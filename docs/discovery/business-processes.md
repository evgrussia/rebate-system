---
title: "Business Processes — CryptoRebate"
created_by: "Business-Analyst Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Business Processes: CryptoRebate

> Описание бизнес-модели, ключевых бизнес-процессов и финансовой модели

---

## 1. Бизнес-модель

### 1.1 Value Chain (Цепочка создания ценности)

```
Биржа                    CryptoRebate               Трейдер
  │                           │                         │
  │  Affiliate программа      │  Привлечение трейдеров  │
  │  (40-70% комиссий)        │  (реферальные ссылки)   │
  │ ─────────────────────────►│◄─────────────────────── │
  │                           │                         │
  │  Трейдер торгует          │                         │  Совершает сделки
  │◄──────────────────────────│─────────────────────────│──────────────►
  │                           │                         │
  │  Начисляет affiliate      │  Рассчитывает rebate    │
  │  rebate сервису           │  и долю трейдера        │
  │ ─────────────────────────►│ ──────────────────────►│
  │                           │                         │
  │                           │  Выплачивает трейдеру   │  Получает cashback
  │                           │ ──────────────────────►│──────────────►
  │                           │                         │
  │                           │  Сервис оставляет       │
  │                           │  свою маржу             │
```

### 1.2 Revenue Model (Модель дохода)

```yaml
Источник дохода: Маржа между полученным rebate и выплатой трейдеру

Формула:
  Net_Revenue = Gross_Rebate_from_Exchange − Trader_Payout

  Gross_Rebate = Trading_Volume × Exchange_Fee_Rate × Affiliate_Commission_Rate
  Trader_Payout = Gross_Rebate × Trader_Share_Percentage
  Service_Margin = Gross_Rebate × (1 − Trader_Share_Percentage)

Пример (1 трейдер, 1 биржа MEXC):
  Trading Volume:         $100,000 / мес
  Exchange Fee Rate:      0.10% (maker+taker avg)
  Commission Earned:      $100
  Affiliate Rate (MEXC):  50%
  Gross Rebate:           $50
  Trader Share:           60%
  Trader Payout:          $30
  Service Margin:         $20 / мес / трейдер
```

### 1.3 Unit Economics

```yaml
Per Trader (среднемесячно):
  Avg. Trading Volume:    $30,000
  Avg. Exchange Fee:      0.08%
  Avg. Commission:        $24
  Avg. Affiliate Rate:    45%
  Gross Rebate:           $10.80
  Trader Share (60%):     $6.48
  Service Margin:         $4.32

  CAC (target):           $5
  LTV (12 мес, 60% ret):  $4.32 × 12 × 0.60 = $31.10
  LTV/CAC:                6.2x ✅

Breakeven:
  Fixed Costs (server, support): ~$500/мес
  Breakeven traders:      $500 / $4.32 ≈ 116 активных трейдеров

Scale (1,000 active traders):
  Monthly Revenue:        $4,320
  Monthly Costs:          ~$1,000 (infra + ops)
  Monthly Profit:         ~$3,320

Scale (5,000 active traders):
  Monthly Revenue:        $21,600
  Monthly Costs:          ~$2,500
  Monthly Profit:         ~$19,100
```

### 1.4 Финансовые потоки

```
                    ┌──────────────────┐
                    │ Трейдер торгует  │
                    │ на бирже         │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │ Биржа удерживает │
                    │ комиссию 0.1%    │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │ Биржа начисляет  │
                    │ affiliate rebate │
                    │ (40-70%)         │
                    └────────┬─────────┘
                             │
              ┌──────────────▼──────────────┐
              │   CryptoRebate получает     │
              │   Gross Rebate              │
              └──────┬──────────────┬───────┘
                     │              │
           ┌─────────▼───────┐  ┌──▼─────────────┐
           │ Trader Share    │  │ Service Margin  │
           │ (50-80%)        │  │ (20-50%)        │
           └─────────┬───────┘  └──┬──────────────┘
                     │             │
           ┌─────────▼───────┐  ┌──▼──────────────┐
           │ Баланс трейдера │  │ Доход сервиса   │
           │ (доступен для   │  │ (операционные   │
           │  вывода)        │  │  расходы, profit)│
           └─────────────────┘  └─────────────────┘
```

---

## 2. Ключевые бизнес-процессы

### BP-001: Регистрация трейдера

```yaml
Process ID: BP-001
Owner: Product
Trigger: Трейдер попадает на сайт/бота и хочет зарегистрироваться
End State: Трейдер имеет аккаунт и видит список бирж с реферальными ссылками
```

**Шаги процесса:**

```
┌──────────┐    ┌──────────────┐    ┌────────────────┐    ┌──────────────┐
│ 1. Трейдер│──►│ 2. Выбирает  │──►│ 3. Заполняет   │──►│ 4. Аккаунт   │
│ заходит   │   │ метод:       │   │ данные:        │   │ создан       │
│ на сайт / │   │ - Email      │   │ - Email+pass   │   │              │
│ /start бот│   │ - Telegram   │   │ - Или TG auth  │   │              │
└──────────┘    └──────────────┘    └────────────────┘    └──────┬───────┘
                                                                  │
                                                           ┌──────▼───────┐
                                                           │ 5. Онбординг:│
                                                           │ - Показать   │
                                                           │   биржи      │
                                                           │ - Объяснить  │
                                                           │   как это    │
                                                           │   работает   │
                                                           └──────┬───────┘
                                                                  │
                                                           ┌──────▼───────┐
                                                           │ 6. Генерация │
                                                           │ реф. ссылок  │
                                                           │ для 11 бирж  │
                                                           └──────────────┘
```

**KPIs:**
- Время регистрации: < 2 мин
- Signup → Onboarding completion: > 80%
- Signup → Ref link copy: > 70%

---

### BP-002: Подключение трейдера к бирже

```yaml
Process ID: BP-002
Owner: Product
Trigger: Трейдер копирует реферальную ссылку для биржи
End State: Трейдер зарегистрирован на бирже по нашему ref, система трекает его сделки
```

**Шаги процесса:**

```
┌──────────────┐    ┌──────────────┐    ┌────────────────┐    ┌──────────────┐
│ 1. Трейдер   │──►│ 2. Трейдер   │──►│ 3. Биржа       │──►│ 4. Система   │
│ копирует     │   │ регистрируется│   │ привязывает    │   │ обнаруживает │
│ реф. ссылку  │   │ на бирже     │   │ реферальный    │   │ нового       │
│ из ЛК        │   │ по ссылке    │   │ код            │   │ реферала     │
└──────────────┘    └──────────────┘    └────────────────┘    └──────┬───────┘
                                                                      │
                                                               ┌──────▼───────┐
                                                               │ 5. Трейдер   │
                                                               │ начинает     │
                                                               │ торговать    │
                                                               └──────┬───────┘
                                                                      │
                                                               ┌──────▼───────┐
                                                               │ 6. Статус    │
                                                               │ обновляется  │
                                                               │ в ЛК:        │
                                                               │ "Подключён"  │
                                                               └──────────────┘
```

**Ограничения:**
- Трейдер должен быть НОВЫМ на бирже (для большинства бирж)
- Некоторые биржи требуют KYC (Binance, KuCoin)
- Процесс подтверждения зависит от биржи (от мгновенного до нескольких дней)

**KPIs:**
- Ref copy → Exchange signup: > 50%
- Время подтверждения привязки: < 48h
- Exchange signup → First trade: > 80%

---

### BP-003: Синхронизация данных с бирж (Exchange Sync)

```yaml
Process ID: BP-003
Owner: Backend / DevOps
Trigger: Cron/Celery задание по расписанию (каждые 1-6 часов, настраиваемо)
End State: Данные о торговых объёмах и комиссиях актуализированы в БД
```

**Шаги процесса:**

```
┌──────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ 1. Celery    │──►│ 2. Для каждой    │──►│ 3. Запрос к API │
│ trigger      │   │ биржи:           │   │ биржи:          │
│ (по расписа- │   │ - Загрузить      │   │ - Торг. объёмы  │
│  нию)        │   │   конфиг адаптера│   │ - Комиссии      │
└──────────────┘    └──────────────────┘    │ - Rebate данные │
                                            └────────┬────────┘
                                                     │
                                              ┌──────▼────────┐
                                              │ 4. Валидация  │
                                              │ данных:       │
                                              │ - Формат OK?  │
                                              │ - Аномалии?   │
                                              └────────┬──────┘
                                                       │
                                      ┌────────────────┼────────────────┐
                                      │                                 │
                               ┌──────▼──────┐                 ┌───────▼───────┐
                               │ 5a. Успех:  │                 │ 5b. Ошибка:   │
                               │ - Сохранить │                 │ - Логировать  │
                               │   в БД      │                 │ - Retry (3x)  │
                               │ - Обновить  │                 │ - Alert если  │
                               │   timestamp │                 │   все retry   │
                               └─────────────┘                 │   failed      │
                                                               └───────────────┘
```

**Типы данных синхронизации:**

| Данные | Источник | Частота | Критичность |
|--------|----------|---------|-------------|
| Trading volume per trader | Exchange API / Dashboard | 4-6 часов | Высокая |
| Commission earned per trader | Exchange API / Dashboard | 4-6 часов | Высокая |
| Affiliate rebate accrued | Exchange API / Dashboard | Ежедневно | Высокая |
| New referral signups | Exchange API / Dashboard | 1-4 часа | Средняя |
| Exchange fee schedule | Exchange API / Manual | Еженедельно | Низкая |

**Два режима синхронизации:**

```yaml
Mode A — API-based (BingX, Bybit, OKX, Weex):
  - Автоматический запрос через Broker/Affiliate API
  - Парсинг ответа через адаптер
  - Сохранение в unified формат

Mode B — Manual/Semi-auto (остальные 7 бирж):
  - Скрапинг affiliate dashboard (если доступен)
  - Или ручной импорт CSV/Excel через Admin Panel
  - Или API-контакт с менеджером биржи для получения данных
```

**KPIs:**
- Sync success rate: > 95% per exchange
- Data freshness: < 12 часов
- Sync latency: < 5 мин per exchange

---

### BP-004: Расчёт Rebate (Rebate Calculation)

```yaml
Process ID: BP-004
Owner: Backend (Rebate Calculator)
Trigger: После успешной синхронизации данных (BP-003)
End State: Rebate рассчитан и начислен на баланс каждого трейдера
```

**Шаги процесса:**

```
┌──────────────┐    ┌───────────────────┐    ┌──────────────────────┐
│ 1. Синхрони- │──►│ 2. Для каждого    │──►│ 3. Получить          │
│ зация        │   │ трейдера с данными │   │ параметры:           │
│ завершена    │   │ за период:        │   │ - Exchange fee rate  │
│ (BP-003)     │   │                   │   │ - Affiliate rate     │
└──────────────┘    └───────────────────┘    │ - Trader share %    │
                                             │ - Individual override│
                                             └──────────┬───────────┘
                                                        │
                                                 ┌──────▼───────┐
                                                 │ 4. Расчёт:   │
                                                 │              │
                                                 │ gross_rebate │
                                                 │  = volume    │
                                                 │  × fee_rate  │
                                                 │  × aff_rate  │
                                                 │              │
                                                 │ trader_share │
                                                 │  = gross     │
                                                 │  × share_%   │
                                                 │              │
                                                 │ service_share│
                                                 │  = gross     │
                                                 │  − trader    │
                                                 └──────┬───────┘
                                                        │
                                                 ┌──────▼───────┐
                                                 │ 5. Проверки: │
                                                 │ - VIP caps?  │
                                                 │ - Exclusions?│
                                                 │ - Min amount?│
                                                 │ - Anomaly?   │
                                                 └──────┬───────┘
                                                        │
                                          ┌─────────────┼─────────────┐
                                          │                           │
                                   ┌──────▼──────┐            ┌──────▼──────┐
                                   │ 6a. OK:     │            │ 6b. Flag:   │
                                   │ Начислить   │            │ На ручную   │
                                   │ на баланс   │            │ проверку    │
                                   │ трейдера    │            │ (админке)   │
                                   └──────┬──────┘            └─────────────┘
                                          │
                                   ┌──────▼──────┐
                                   │ 7. Сохранить│
                                   │ запись в    │
                                   │ rebate_log  │
                                   │ + уведомить │
                                   └─────────────┘
```

**Формулы расчёта:**

```python
# Основная формула
gross_rebate = trading_volume * exchange_fee_rate * affiliate_commission_rate

# Доля трейдера
trader_payout = gross_rebate * trader_share_pct

# Маржа сервиса
service_margin = gross_rebate - trader_payout

# С учётом индивидуальных условий
if trader.has_individual_rate:
    trader_share_pct = trader.individual_rate
else:
    trader_share_pct = exchange_config.default_trader_share

# С учётом VIP caps
if exchange == "okx" and trader.vip_level >= 5:
    gross_rebate = min(gross_rebate, exchange_config.vip_monthly_cap)

# С учётом срока действия
if exchange == "mexc" and (now - trader.referral_date).days > 1080:
    gross_rebate = 0  # Реферальный срок истёк
```

**Источники параметров:**

| Параметр | Источник | Изменяемость |
|----------|----------|-------------|
| `trading_volume` | Exchange API sync | Каждая синхронизация |
| `exchange_fee_rate` | Exchange config (admin) | Ручное обновление при изменении |
| `affiliate_commission_rate` | Exchange config (admin) | Ручное обновление при пересмотре |
| `trader_share_pct` | Exchange config (admin) + per-trader override | Admin panel |
| `vip_caps` | Exchange config (admin) | Ручное |
| `referral_expiry_days` | Exchange config (admin) | Ручное |

**KPIs:**
- Calculation accuracy: > 99.9%
- Calculation latency per batch: < 5 мин
- Reconciliation diff: < 1%

---

### BP-005: Вывод средств (Withdrawal / Payout)

```yaml
Process ID: BP-005
Owner: Finance / Backend (Payout Engine)
Trigger: Трейдер запрашивает вывод средств
End State: Средства отправлены на кошелёк трейдера
```

**Шаги процесса:**

```
┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ 1. Трейдер   │──►│ 2. Валидация:    │──►│ 3. Определить    │
│ заполняет    │   │ - Баланс >= сумма│   │ тип обработки:   │
│ форму:       │   │ - Сумма >= мин.  │   │                  │
│ - Сумма      │   │ - Адрес валиден  │   │ ≤ threshold:     │
│ - Кошелёк    │   │ - Rate limit OK  │   │   → Auto approve │
│ - Сеть       │   │                  │   │ > threshold:     │
└──────────────┘    └──────────────────┘    │   → Manual review│
                                            └────────┬─────────┘
                                                     │
                              ┌───────────────────────┼───────────────────┐
                              │                                           │
                       ┌──────▼──────┐                            ┌───────▼──────┐
                       │ 4a. Auto:   │                            │ 4b. Manual:  │
                       │ Status →    │                            │ Status →     │
                       │ "approved"  │                            │ "pending"    │
                       │             │                            │ → Админ      │
                       │             │                            │   проверяет  │
                       │             │                            │   и одобряет │
                       └──────┬──────┘                            │   или        │
                              │                                   │   отклоняет  │
                              │                                   └───────┬──────┘
                              │                                           │
                              └──────────────┬────────────────────────────┘
                                             │
                                      ┌──────▼───────┐
                                      │ 5. Status → │
                                      │ "processing" │
                                      │ Отправка     │
                                      │ транзакции   │
                                      │ на блокчейн  │
                                      └──────┬───────┘
                                             │
                              ┌──────────────┼──────────────┐
                              │                             │
                       ┌──────▼──────┐              ┌───────▼──────┐
                       │ 6a. Успех:  │              │ 6b. Ошибка:  │
                       │ Status →    │              │ Status →     │
                       │ "completed" │              │ "failed"     │
                       │ tx_hash     │              │ → Retry (3x) │
                       │ сохранён    │              │ → Alert      │
                       └──────┬──────┘              └──────────────┘
                              │
                       ┌──────▼──────┐
                       │ 7. Уведомить│
                       │ трейдера    │
                       │ (TG + email)│
                       └─────────────┘
```

**Статусы выплаты:**

```
pending → approved → processing → completed
   │         │          │
   │         │          └──→ failed (→ retry → processing)
   │         │                           └──→ failed_final
   │         └──→ rejected (отклонён админом)
   └──→ cancelled (отменён трейдером)
```

**KPIs:**
- Время обработки (auto): < 1 час
- Время обработки (manual): < 4 часа
- Success rate: > 99%
- Failed rate: < 2%

---

### BP-006: Администрирование бирж

```yaml
Process ID: BP-006
Owner: Admin / Operations
Trigger: Подключение новой биржи ИЛИ изменение условий существующей
End State: Биржа настроена и данные синхронизируются
```

**Шаги процесса (подключение новой биржи):**

```
1. Зарегистрироваться как affiliate/broker на бирже
2. Получить API ключи (если есть affiliate API)
3. Настроить адаптер (exchange config):
   - API endpoint / credentials
   - Fee rate schedule
   - Affiliate commission rate
   - Trader share percentage
   - Minimum withdrawal amount
   - Sync interval
   - Referral expiry (если есть)
   - VIP caps (если есть)
4. Создать реферальные ссылки (шаблон для генерации per user)
5. Активировать синхронизацию
6. Протестировать: sync → calculation → display в ЛК
7. Включить биржу для пользователей
```

**Настройки per биржа (Admin Panel):**

```yaml
exchange_config:
  name: "mexc"
  display_name: "MEXC"
  status: "active" | "disabled" | "maintenance"

  # API integration
  api_type: "broker_api" | "trading_api" | "manual"
  api_endpoint: "https://..."
  api_key: "[encrypted]"
  api_secret: "[encrypted]"

  # Rates
  affiliate_commission_rate: 0.50  # 50%
  default_trader_share: 0.60       # 60%
  exchange_fee_rate_spot: 0.001    # 0.1%
  exchange_fee_rate_futures: 0.0004 # 0.04%

  # Payout settings
  min_withdrawal_usd: 10.0
  payout_frequency: "daily"
  payout_currency: ["USDT"]

  # Limits
  referral_expiry_days: 1080       # 0 = бессрочно
  vip_monthly_cap_usd: 0          # 0 = нет cap
  vip_cap_levels: []               # [5, 6, 7] — уровни с caps

  # Sync
  sync_interval_hours: 4
  sync_enabled: true
  last_sync: "2026-02-04T14:00:00Z"
  last_sync_status: "success"

  # Referral link template
  referral_url_template: "https://www.mexc.com/register?inviteCode={ref_code}"
```

---

### BP-007: Reconciliation (Сверка)

```yaml
Process ID: BP-007
Owner: Finance / Admin
Trigger: Еженедельно (или ежемесячно) по расписанию
End State: Данные сервиса сверены с данными бирж, расхождения устранены
```

**Шаги процесса:**

```
1. Выгрузить данные CryptoRebate за период:
   - Начисленные rebate per exchange
   - Выплаты трейдерам
   - Trading volumes

2. Выгрузить данные из бирж за тот же период:
   - Affiliate dashboard / reports
   - Actual commissions received

3. Сравнить:
   - Наш gross_rebate vs фактически полученное от биржи
   - Наш trading_volume vs данные биржи
   - Расхождения > 1%: пометить как "requires_investigation"

4. Для расхождений:
   - Проверить: пропущенные синхронизации?
   - Проверить: изменённые ставки на бирже?
   - Проверить: VIP исключения?
   - Скорректировать если нужно

5. Создать Reconciliation Report
6. Если нужна корректировка — создать adjustment record
```

**Reconciliation Report:**

| Поле | Описание |
|------|----------|
| Период | Дата начала — Дата конца |
| Биржа | Название биржи |
| Наш объём | Сумма trading volume в нашей системе |
| Объём биржи | Сумма trading volume по данным биржи |
| Diff % | Процент расхождения |
| Наш rebate | Gross rebate в нашей системе |
| Rebate биржи | Фактически полученный rebate |
| Diff % | Процент расхождения |
| Статус | OK / Requires Investigation / Adjusted |

---

## 3. Карта процессов (Process Landscape)

```
┌─────────────────────────────────────────────────────────────────┐
│                     CryptoRebate Process Map                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ПРИВЛЕЧЕНИЕ                   ОПЕРАЦИИ                         │
│  ┌──────────────┐              ┌─────────────────────────────┐  │
│  │ BP-001       │              │ BP-003                      │  │
│  │ Регистрация  │──────────────│ Синхронизация данных с бирж │  │
│  │ трейдера     │              │ (автомат, каждые 1-6 часов) │  │
│  └──────┬───────┘              └──────────────┬──────────────┘  │
│         │                                     │                  │
│  ┌──────▼───────┐              ┌──────────────▼──────────────┐  │
│  │ BP-002       │              │ BP-004                      │  │
│  │ Подключение  │              │ Расчёт rebate               │  │
│  │ к бирже      │              │ (после каждой синхронизации) │  │
│  └──────────────┘              └──────────────┬──────────────┘  │
│                                               │                  │
│  ФИНАНСЫ                                      │                  │
│  ┌────────────────────────────────────────────▼───────────────┐  │
│  │ BP-005 Вывод средств (по запросу трейдера)                 │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  АДМИНИСТРИРОВАНИЕ                                              │
│  ┌──────────────────┐     ┌─────────────────────────────────┐   │
│  │ BP-006            │     │ BP-007                          │   │
│  │ Администрирование │     │ Reconciliation (еженедельно)   │   │
│  │ бирж              │     │                                │   │
│  └──────────────────┘     └─────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Stakeholders

| Stakeholder | Роль | Влияние | Интерес |
|-------------|------|---------|---------|
| **Трейдер** | Конечный пользователь | Высокое | Получить максимальный cashback |
| **Основатель** | Владелец бизнеса | Высокое | Revenue, рост базы, масштаб |
| **Администратор** | Оператор сервиса | Среднее | Удобство управления, минимум ручной работы |
| **Биржа** | Партнёр / поставщик данных | Высокое | Привлечение новых трейдеров, рост объёмов |
| **Инфлюенсер** | Канал привлечения | Среднее | Заработок на рекламе сервиса |

---

## 5. Automation Opportunities

| # | Процесс | Текущее | Целевое | Приоритет |
|---|---------|---------|---------|-----------|
| 1 | Sync данных (API биржи) | Manual / Частично авто | Полностью авто (4 биржи) | P0 |
| 2 | Расчёт rebate | Ручной расчёт | Полностью авто | P0 |
| 3 | Auto-approve payouts (< threshold) | Всё ручное | Авто для сумм < $100 | P0 |
| 4 | Уведомления о начислениях | Нет | Авто TG + email | P0 |
| 5 | Reconciliation | Ручная сверка | Semi-авто (отчёт + flags) | P1 |
| 6 | Sync данных (non-API биржи) | Manual | CSV import через Admin | P1 |
| 7 | Exchange fee rate updates | Manual | Alert при изменении | P2 |

---

*Документ создан: Business-Analyst Agent | Дата: 2026-02-04*
