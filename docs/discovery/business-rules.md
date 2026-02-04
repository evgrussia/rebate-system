---
title: "Business Rules Catalog — CryptoRebate"
created_by: "Business-Analyst Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Business Rules Catalog: CryptoRebate

> Каталог бизнес-правил системы — constraints, derivations, triggers

---

## 1. Правила расчёта Rebate (Derivation)

### BR-001: Формула расчёта gross rebate

**Category:** Derivation
**Source:** Бизнес-модель CryptoRebate
**Priority:** Critical
**Related:** FR-030, FR-031, BP-004

#### Формулировка
Gross rebate для каждого трейдера рассчитывается на основе его торгового объёма, ставки комиссии биржи и процента affiliate commission.

#### Псевдокод
```
gross_rebate = trading_volume × exchange_fee_rate × affiliate_commission_rate

WHERE:
  trading_volume    = сумма объёмов торгов за расчётный период (USD)
  exchange_fee_rate = средневзвешенная ставка комиссии биржи (maker+taker)
  affiliate_commission_rate = процент, который биржа отдаёт аффилиату
```

#### Примеры
- Трейдер наторговал $100,000 на MEXC (fee 0.1%, affiliate 50%): `$100,000 × 0.001 × 0.50 = $50`
- Трейдер наторговал $50,000 на Bybit фьючерсы (fee 0.04%, affiliate 30%): `$50,000 × 0.0004 × 0.30 = $6`

#### Exceptions
- Если биржа предоставляет уже рассчитанный rebate (а не raw volume), используется прямое значение

---

### BR-002: Расчёт доли трейдера

**Category:** Derivation
**Source:** Бизнес-модель CryptoRebate
**Priority:** Critical
**Related:** FR-031, FR-032, BP-004

#### Формулировка
Доля трейдера рассчитывается как процент от gross rebate. Процент определяется конфигурацией биржи, с возможностью индивидуального override.

#### Псевдокод
```
IF trader.has_individual_rate(exchange)
  THEN trader_share_pct = trader.individual_rate(exchange)
  ELSE trader_share_pct = exchange_config.default_trader_share

trader_payout = gross_rebate × trader_share_pct
service_margin = gross_rebate × (1 − trader_share_pct)
```

#### Примеры
- Gross rebate $50, default share 60%: Trader = $30, Service = $20
- Gross rebate $50, individual VIP share 75%: Trader = $37.50, Service = $12.50

#### Exceptions
- Индивидуальная ставка не может превышать 95% (минимальная маржа сервиса 5%)

---

### BR-003: Расчёт rebate для разных типов торговли

**Category:** Derivation
**Source:** Exchange Research
**Priority:** High
**Related:** FR-030, BP-004

#### Формулировка
Если биржа предоставляет разные ставки для спот и фьючерсной торговли, расчёт выполняется раздельно.

#### Псевдокод
```
IF exchange.has_separate_rates
  THEN
    spot_rebate = spot_volume × spot_fee_rate × spot_affiliate_rate
    futures_rebate = futures_volume × futures_fee_rate × futures_affiliate_rate
    gross_rebate = spot_rebate + futures_rebate
  ELSE
    gross_rebate = total_volume × avg_fee_rate × affiliate_rate
```

#### Примеры
- Binance: Спот 41% affiliate + Фьючерсы 30% affiliate → раздельный расчёт
- MEXC: Единая ставка 50% → общий расчёт

---

## 2. Правила вывода средств (Constraints)

### BR-010: Минимальная сумма вывода

**Category:** Constraint
**Source:** Operations / Exchange Config
**Priority:** Critical
**Related:** FR-060, FR-061, BP-005

#### Формулировка
Трейдер не может запросить вывод суммы меньше установленного минимума. Минимум настраивается per биржа.

#### Псевдокод
```
IF withdrawal_amount < exchange_config.min_withdrawal_usd
  THEN REJECT "Минимальная сумма вывода: ${min} USD"

Global minimum: $5 (независимо от настроек биржи)
```

#### Примеры
- MEXC min withdrawal $10: запрос $8 → отклонён
- Общий баланс $15 (MEXC $8, Bybit $7): вывод $15 → OK (общий баланс)

---

### BR-011: Баланс достаточен для вывода

**Category:** Constraint
**Source:** Бизнес-логика
**Priority:** Critical
**Related:** FR-060, BP-005

#### Формулировка
Сумма запроса на вывод не может превышать доступный баланс трейдера.

#### Псевдокод
```
available_balance = total_accrued_rebate − total_withdrawn − pending_withdrawals

IF withdrawal_amount > available_balance
  THEN REJECT "Недостаточно средств. Доступно: ${available_balance}"
```

#### Exceptions
- pending_withdrawals учитываются в расчёте available_balance (заблокированы до завершения)

---

### BR-012: Rate limiting на вывод

**Category:** Constraint
**Source:** Anti-fraud
**Priority:** High
**Related:** FR-060, BP-005

#### Формулировка
Ограничение на количество и объём выводов для предотвращения злоупотреблений.

#### Псевдокод
```
MAX_WITHDRAWALS_PER_DAY = 3
MAX_WITHDRAWAL_AMOUNT_PER_DAY = $1,000 (настраиваемо)

IF count(today_withdrawals) >= MAX_WITHDRAWALS_PER_DAY
  THEN REJECT "Превышен лимит: не более 3 выводов в день"

IF sum(today_withdrawals) + amount > MAX_WITHDRAWAL_AMOUNT_PER_DAY
  THEN REJECT "Превышен дневной лимит вывода: ${max} USD"
```

#### Exceptions
- Индивидуальные лимиты для VIP трейдеров (устанавливаются в админке)

---

### BR-013: Auto-approve vs Manual-approve

**Category:** Constraint
**Source:** Operations / Finance
**Priority:** Critical
**Related:** FR-064, FR-065, BP-005

#### Формулировка
Выплаты ниже порога обрабатываются автоматически. Выплаты выше порога требуют ручного одобрения администратора.

#### Псевдокод
```
AUTO_APPROVE_THRESHOLD = $100 (настраиваемо в admin)

IF withdrawal_amount <= AUTO_APPROVE_THRESHOLD
  AND trader.verified == true
  AND trader.successful_withdrawals > 0
  THEN status = "approved" (автоматически)
  ELSE status = "pending" (ожидает одобрения админа)

# Первый вывод — всегда ручная проверка
IF trader.successful_withdrawals == 0
  THEN status = "pending"
```

#### Примеры
- Запрос $50 от проверенного трейдера с историей → auto-approve
- Запрос $50 от нового трейдера (первый вывод) → manual review
- Запрос $200 → manual review (выше порога)

---

### BR-014: Валидация адреса кошелька

**Category:** Constraint
**Source:** Security / Operations
**Priority:** High
**Related:** FR-063, BP-005

#### Формулировка
Адрес кошелька для вывода должен быть валидным для указанной сети.

#### Псевдокод
```
IF NOT validate_address(wallet_address, network)
  THEN REJECT "Недействительный адрес кошелька для сети {network}"

Supported networks:
  - TRC20 (Tron) — адрес начинается с "T", 34 символа
  - ERC20 (Ethereum) — адрес начинается с "0x", 42 символа
  - BEP20 (BSC) — адрес начинается с "0x", 42 символа
  - BTC — адрес начинается с "1", "3" или "bc1"
```

---

## 3. Правила регистрации и аккаунта (Constraints)

### BR-020: Уникальность email

**Category:** Constraint
**Source:** Бизнес-логика
**Priority:** Critical
**Related:** FR-001

#### Формулировка
Один email может быть привязан только к одному аккаунту.

#### Псевдокод
```
IF EXISTS(user WHERE email = new_email)
  THEN REJECT "Аккаунт с таким email уже существует"
```

---

### BR-021: Уникальность Telegram аккаунта

**Category:** Constraint
**Source:** Бизнес-логика
**Priority:** Critical
**Related:** FR-004

#### Формулировка
Один Telegram аккаунт может быть привязан только к одному аккаунту CryptoRebate.

#### Псевдокод
```
IF EXISTS(user WHERE telegram_id = new_telegram_id)
  THEN REJECT "Этот Telegram аккаунт уже привязан к другому аккаунту"
```

---

### BR-022: Один реферал — одна биржа

**Category:** Constraint
**Source:** Правила бирж
**Priority:** Critical
**Related:** FR-010, BP-002

#### Формулировка
Трейдер может быть привязан как реферал к одной партнёрской ссылке на одной бирже. Если трейдер уже зарегистрирован на бирже без нашего ref — привязка невозможна (для большинства бирж).

#### Псевдокод
```
# Генерация реферальной ссылки — всегда возможна
referral_link = generate_link(user_id, exchange)

# Но трейдер должен быть НОВЫМ на бирже
# (это ограничение на стороне биржи, мы не контролируем)
# Наша система просто отслеживает статус: "confirmed" / "not_confirmed"
```

#### Exceptions
- Некоторые биржи позволяют перепривязку (rebinding) — уточнять для каждой

---

## 4. Правила синхронизации (Triggers)

### BR-030: Запуск синхронизации

**Category:** Trigger
**Source:** Operations
**Priority:** Critical
**Related:** FR-024, BP-003

#### Формулировка
Синхронизация данных запускается по расписанию с интервалом, настроенным per биржа.

#### Псевдокод
```
FOR EACH exchange WHERE sync_enabled == true:
  IF (now - last_sync) >= exchange.sync_interval_hours
    THEN trigger_sync(exchange)

# Также доступен ручной запуск через Admin Panel
```

#### Примеры
- MEXC: интервал 4h → синхронизация в 00:00, 04:00, 08:00, 12:00, 16:00, 20:00
- BingX: интервал 2h → синхронизация каждые 2 часа

---

### BR-031: Retry при ошибке синхронизации

**Category:** Trigger
**Source:** Operations / Reliability
**Priority:** High
**Related:** FR-025, BP-003

#### Формулировка
При ошибке синхронизации система выполняет повторные попытки с экспоненциальной задержкой.

#### Псевдокод
```
MAX_RETRIES = 3
BASE_DELAY_SEC = 60

FOR attempt = 1 TO MAX_RETRIES:
  result = try_sync(exchange)
  IF result == success
    THEN BREAK
    ELSE
      delay = BASE_DELAY_SEC × (2 ^ (attempt - 1))  # 60, 120, 240 сек
      WAIT(delay)

IF all_retries_failed:
  log_error(exchange, "sync_failed_after_retries")
  send_alert(admin, "Exchange {name} sync failed after {MAX_RETRIES} retries")
  SET exchange.last_sync_status = "failed"
```

---

### BR-032: Alert при устаревших данных

**Category:** Trigger
**Source:** SRE / Monitoring
**Priority:** High
**Related:** FR-027, BP-003

#### Формулировка
Если данные биржи не обновлялись дольше 2× интервала синхронизации, генерируется alert.

#### Псевдокод
```
FOR EACH exchange WHERE sync_enabled == true:
  stale_threshold = exchange.sync_interval_hours × 2
  IF (now - exchange.last_successful_sync) > stale_threshold
    THEN send_alert(admin, "Exchange {name}: data stale for {hours}h")
    AND  SET exchange.status = "stale"
```

---

## 5. Правила начисления Rebate (Constraints)

### BR-040: Срок действия реферальной привязки

**Category:** Constraint
**Source:** Exchange Research
**Priority:** High
**Related:** BR-001, BP-004

#### Формулировка
Некоторые биржи ограничивают срок действия реферальной привязки. После истечения срока rebate не начисляется.

#### Псевдокод
```
IF exchange.referral_expiry_days > 0:
  days_since_referral = (now - trader.referral_date_on_exchange).days

  IF days_since_referral > exchange.referral_expiry_days
    THEN gross_rebate = 0
    AND  mark_referral_expired(trader, exchange)
    AND  notify_trader("Реферальный срок на {exchange} истёк")
```

#### Примеры по биржам
| Биржа | Срок | Действие при истечении |
|-------|------|-----------------------|
| MEXC | 1080 дней (≈3 года) | Прекращение начислений |
| HTX | 730 дней (2 года) | Прекращение начислений |
| Bitmart | 365 дней (1 год) | Прекращение начислений |
| Bybit | Бессрочно | N/A |
| BingX | Бессрочно* | Переоценка уровня |
| OKX | 5 мес защита | Ставка может снизиться |
| Остальные | Бессрочно* | N/A |

---

### BR-041: VIP caps (ограничения для VIP трейдеров)

**Category:** Constraint
**Source:** Exchange Research (OKX, Bybit)
**Priority:** High
**Related:** BR-001, BP-004

#### Формулировка
Некоторые биржи ограничивают размер affiliate commission для VIP-трейдеров.

#### Псевдокод
```
IF exchange.has_vip_caps AND trader.vip_level IN exchange.vip_cap_levels:
  IF exchange == "okx" AND trader.vip_level >= 5:
    monthly_cap = exchange.vip_monthly_cap  # 100K/мес для VIP5/6
    IF accumulated_monthly_rebate >= monthly_cap:
      gross_rebate = 0  # Лимит достигнут

  IF exchange == "okx" AND trader.vip_level >= 7:
    gross_rebate = 0  # Комиссии не начисляются

  IF exchange == "bybit" AND is_vip:
    gross_rebate = min(gross_rebate, volume × max_rate_50pct)
```

---

### BR-042: Исключения из расчёта

**Category:** Constraint
**Source:** Exchange Research
**Priority:** High
**Related:** BR-001, BP-004

#### Формулировка
Определённые типы сделок исключаются из расчёта rebate.

#### Псевдокод
```
EXCLUDED from rebate calculation:
  - Zero-fee trades (maker с нулевой комиссией)
  - Bonus/promotional trades (с использованием бонусов биржи)
  - Wash trading (обнаруженное биржей)
  - Market maker designated accounts
  - Self-referral trades

IF trade.type IN excluded_types
  THEN SKIP trade from rebate calculation
```

---

### BR-043: Минимальный rebate для начисления

**Category:** Constraint
**Source:** Operations
**Priority:** Medium
**Related:** BP-004

#### Формулировка
Rebate ниже минимального порога не начисляется в текущем периоде, а переносится на следующий.

#### Псевдокод
```
MIN_REBATE_ACCRUAL = $0.01

IF calculated_trader_payout < MIN_REBATE_ACCRUAL
  THEN carry_forward(trader, exchange, amount)
  # Сумма переносится на следующий расчётный период
  # И добавляется к следующему расчёту
```

---

## 6. Правила безопасности и Anti-fraud (Constraints)

### BR-050: Заморозка аккаунта при подозрительной активности

**Category:** Constraint
**Source:** Security
**Priority:** Critical
**Related:** NFR-026

#### Формулировка
При обнаружении подозрительной активности аккаунт замораживается до проверки.

#### Псевдокод
```
Suspicious activity indicators:
  - 5+ неудачных попыток входа за 15 минут
  - Смена кошелька + запрос вывода в течение 1 часа
  - Объём торгов аномально вырос (>10x за период)
  - Вывод > 80% баланса сразу после крупного начисления

IF suspicious_activity_detected:
  THEN freeze_account(trader)
  AND  send_alert(admin, "Suspicious activity: {details}")
  AND  notify_trader("Ваш аккаунт временно заморожен для проверки")
  AND  require_manual_review()
```

---

### BR-051: Cooldown при смене кошелька

**Category:** Constraint
**Source:** Security
**Priority:** High
**Related:** BR-014, BP-005

#### Формулировка
После смены адреса кошелька для вывода применяется cooldown период.

#### Псевдокод
```
WALLET_CHANGE_COOLDOWN_HOURS = 24

IF trader.wallet_changed_at != null
  AND (now - trader.wallet_changed_at).hours < WALLET_CHANGE_COOLDOWN_HOURS
  THEN REJECT withdrawal "Вывод заблокирован на 24 часа после смены кошелька"
```

---

## 7. Правила администрирования (Constraints)

### BR-060: Диапазон trader share

**Category:** Constraint
**Source:** Бизнес-модель
**Priority:** Critical
**Related:** FR-072, FR-073

#### Формулировка
Процент доли трейдера ограничен допустимым диапазоном для обеспечения минимальной маржи сервиса.

#### Псевдокод
```
MIN_TRADER_SHARE = 0.30   # 30% (минимум для привлекательности)
MAX_TRADER_SHARE = 0.95   # 95% (минимальная маржа сервиса 5%)

IF new_trader_share < MIN_TRADER_SHARE OR new_trader_share > MAX_TRADER_SHARE
  THEN REJECT "Доля трейдера должна быть от 30% до 95%"
```

---

### BR-061: Изменение ставок не ретроактивно

**Category:** Constraint
**Source:** Бизнес-логика / Fairness
**Priority:** Critical
**Related:** FR-072, BP-006

#### Формулировка
Изменение ставок rebate применяется только к будущим расчётам. Уже начисленный rebate не пересчитывается.

#### Псевдокод
```
ON rate_change(exchange, new_rate):
  SET exchange_config.trader_share = new_rate
  SET exchange_config.rate_effective_from = now()

  # Все расчёты с effective_from используют новую ставку
  # Расчёты до effective_from — не пересчитываются

  LOG audit_log("Rate changed by {admin}: {exchange} {old} → {new}")
  NOTIFY affected_traders IF rate_decreased
```

---

### BR-062: Отключение биржи

**Category:** Trigger
**Source:** Operations
**Priority:** High
**Related:** BP-006

#### Формулировка
При отключении биржи прекращается синхронизация и расчёт, но накопленный баланс остаётся доступным для вывода.

#### Псевдокод
```
ON exchange_disabled(exchange):
  SET exchange.status = "disabled"
  SET exchange.sync_enabled = false

  # Баланс трейдеров по этой бирже НЕ замораживается
  # Трейдеры могут вывести накопленное

  # Новые реферальные ссылки не генерируются
  # Существующие ссылки помечаются как неактивные

  NOTIFY admin "Exchange {name} disabled"
  NOTIFY affected_traders "Биржа {name} временно отключена. Ваш баланс сохранён."
```

---

## 8. Сводная таблица бизнес-правил

| ID | Название | Категория | Приоритет | Модуль |
|----|----------|-----------|-----------|--------|
| BR-001 | Формула расчёта gross rebate | Derivation | Critical | Rebate Calculator |
| BR-002 | Расчёт доли трейдера | Derivation | Critical | Rebate Calculator |
| BR-003 | Разные ставки спот/фьючерсы | Derivation | High | Rebate Calculator |
| BR-010 | Минимальная сумма вывода | Constraint | Critical | Payout Engine |
| BR-011 | Баланс достаточен для вывода | Constraint | Critical | Payout Engine |
| BR-012 | Rate limiting на вывод | Constraint | High | Payout Engine |
| BR-013 | Auto vs Manual approve | Constraint | Critical | Payout Engine |
| BR-014 | Валидация адреса кошелька | Constraint | High | Payout Engine |
| BR-020 | Уникальность email | Constraint | Critical | Auth |
| BR-021 | Уникальность Telegram | Constraint | Critical | Auth |
| BR-022 | Один реферал — одна биржа | Constraint | Critical | Referral |
| BR-030 | Запуск синхронизации | Trigger | Critical | Exchange Sync |
| BR-031 | Retry при ошибке sync | Trigger | High | Exchange Sync |
| BR-032 | Alert при устаревших данных | Trigger | High | Monitoring |
| BR-040 | Срок действия реферальной привязки | Constraint | High | Rebate Calculator |
| BR-041 | VIP caps | Constraint | High | Rebate Calculator |
| BR-042 | Исключения из расчёта | Constraint | High | Rebate Calculator |
| BR-043 | Минимальный rebate для начисления | Constraint | Medium | Rebate Calculator |
| BR-050 | Заморозка при подозрительной активности | Constraint | Critical | Security |
| BR-051 | Cooldown при смене кошелька | Constraint | High | Security |
| BR-060 | Диапазон trader share | Constraint | Critical | Admin |
| BR-061 | Изменение ставок не ретроактивно | Constraint | Critical | Admin |
| BR-062 | Отключение биржи | Trigger | High | Admin |

**Итого: 23 бизнес-правила**
- Derivation: 3
- Constraint: 17
- Trigger: 3

**По модулям:**
- Rebate Calculator: 7
- Payout Engine: 5
- Auth: 2
- Referral: 1
- Exchange Sync: 2
- Monitoring: 1
- Security: 2
- Admin: 3

---

*Документ создан: Business-Analyst Agent | Дата: 2026-02-04*
