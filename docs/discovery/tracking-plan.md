---
title: "Tracking Plan — CryptoRebate"
created_by: "Analytics Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Tracking Plan: CryptoRebate

> План инструментирования событий для product analytics

---

## 1. Соглашения (Conventions)

### Naming Convention

```yaml
Events: object_action (snake_case)
  Примеры:
    - user_signed_up
    - referral_link_copied
    - withdrawal_requested

Properties: snake_case
  Примеры:
    - signup_method
    - exchange_name
    - amount_usd

User Properties: snake_case
  Примеры:
    - total_trading_volume
    - exchanges_count
    - first_trade_date
```

### Общие правила

```yaml
- Timestamps: UTC, ISO 8601 (e.g. "2026-02-04T14:30:00Z")
- User ID: обязателен для всех событий (кроме анонимных)
- Session ID: для группировки событий в рамках одной сессии
- Platform: "web" | "telegram_bot" | "admin" — обязателен для всех событий
- Amounts: в USD-эквиваленте, с точностью до 2 знаков
- Exchange names: lowercase, без пробелов (e.g. "mexc", "bybit", "okx")
```

---

## 2. User Properties

| Property | Type | Description | Example | Update |
|----------|------|-------------|---------|--------|
| `user_id` | string | Уникальный ID пользователя | "usr_a1b2c3" | Set once |
| `signup_date` | datetime | Дата регистрации | "2026-02-04T10:00:00Z" | Set once |
| `signup_method` | string | Метод регистрации | "email" / "telegram" | Set once |
| `signup_source` | string | Канал привлечения | "organic" / "influencer_x" / "telegram_channel" | Set once |
| `is_activated` | boolean | Совершил ли первую сделку | true | Update |
| `activation_date` | datetime | Дата первой сделки | "2026-02-06T15:00:00Z" | Set once |
| `exchanges_count` | int | Кол-во подключённых бирж | 3 | Update |
| `exchanges_list` | array[string] | Список подключённых бирж | ["mexc", "bybit", "okx"] | Update |
| `total_trading_volume` | float | Совокупный объём торгов (USD) | 150000.00 | Update |
| `total_rebate_earned` | float | Общий начисленный rebate (USD) | 750.50 | Update |
| `total_withdrawn` | float | Общая сумма выведенного (USD) | 500.00 | Update |
| `available_balance` | float | Доступный для вывода баланс (USD) | 250.50 | Update |
| `last_active_date` | datetime | Последняя активность | "2026-02-04T18:00:00Z" | Update |
| `preferred_platform` | string | Преобладающий канал | "web" / "telegram_bot" | Update |
| `language` | string | Язык интерфейса | "ru" / "en" | Update |
| `country` | string | Страна (по IP при регистрации) | "RU" / "US" | Set once |

---

## 3. Events

### 3.1 Onboarding (Регистрация и активация)

---

#### `page_viewed`

**Trigger:** Пользователь открыл страницу (web)
**Priority:** P0
**Platform:** web

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `page_name` | string | yes | Имя страницы | "landing" / "dashboard" / "exchanges" |
| `page_url` | string | yes | URL страницы | "/dashboard" |
| `referrer_url` | string | no | Откуда пришёл | "https://google.com" |

---

#### `user_signed_up`

**Trigger:** Пользователь завершил регистрацию
**Priority:** P0
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `method` | string | yes | Метод регистрации | "email" / "telegram" |
| `source` | string | no | Источник трафика | "organic" / "influencer_x" / "ad_campaign_y" |
| `utm_source` | string | no | UTM source | "telegram" |
| `utm_medium` | string | no | UTM medium | "social" |
| `utm_campaign` | string | no | UTM campaign | "launch_feb2026" |

---

#### `user_logged_in`

**Trigger:** Пользователь успешно авторизовался
**Priority:** P0
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `method` | string | yes | Метод входа | "email_password" / "telegram" / "jwt_refresh" |

---

#### `user_logged_out`

**Trigger:** Пользователь вышел из аккаунта
**Priority:** P1
**Platform:** web

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `session_duration_sec` | int | yes | Длительность сессии | 1200 |

---

#### `onboarding_step_completed`

**Trigger:** Пользователь прошёл шаг онбординга
**Priority:** P0
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `step_number` | int | yes | Номер шага | 1 |
| `step_name` | string | yes | Название шага | "view_exchanges" / "copy_first_link" |
| `total_steps` | int | yes | Всего шагов | 4 |

---

#### `onboarding_completed`

**Trigger:** Пользователь завершил весь онбординг
**Priority:** P0
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `duration_sec` | int | yes | Время прохождения (сек) | 180 |
| `steps_skipped` | int | yes | Кол-во пропущенных шагов | 0 |

---

### 3.2 Referral Links (Реферальные ссылки)

---

#### `referral_link_viewed`

**Trigger:** Пользователь открыл список бирж / увидел реферальную ссылку
**Priority:** P0
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `exchange_name` | string | yes | Название биржи | "mexc" |

---

#### `referral_link_copied`

**Trigger:** Пользователь скопировал реферальную ссылку
**Priority:** P0
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `exchange_name` | string | yes | Название биржи | "bybit" |
| `copy_method` | string | yes | Способ копирования | "button_click" / "context_menu" |
| `is_first_copy` | boolean | yes | Первое ли копирование этой ссылки | true |

---

#### `exchange_signup_confirmed`

**Trigger:** Система подтвердила регистрацию трейдера на бирже по нашему ref
**Priority:** P0
**Platform:** backend (server-side event)

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `exchange_name` | string | yes | Название биржи | "okx" |
| `days_since_ref_copy` | int | no | Дней от копирования ссылки до регистрации | 2 |

---

### 3.3 Trading (Торговля)

---

#### `first_trade_detected`

**Trigger:** Система обнаружила первую сделку трейдера на бирже через наш ref
**Priority:** P0
**Platform:** backend (server-side event)

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `exchange_name` | string | yes | Название биржи | "binance" |
| `trade_type` | string | yes | Тип торговли | "spot" / "futures" |
| `volume_usd` | float | yes | Объём сделки (USD) | 1500.00 |
| `days_since_signup` | int | yes | Дней от регистрации | 3 |

---

#### `trading_volume_synced`

**Trigger:** Система синхронизировала данные о торговых объёмах с биржи
**Priority:** P0
**Platform:** backend (server-side event)

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `exchange_name` | string | yes | Название биржи | "mexc" |
| `period` | string | yes | Период синхронизации | "daily" / "weekly" |
| `traders_count` | int | yes | Кол-во трейдеров с данными | 150 |
| `total_volume_usd` | float | yes | Общий объём за период (USD) | 2500000.00 |
| `sync_duration_sec` | float | yes | Длительность синхронизации | 12.5 |
| `sync_status` | string | yes | Статус | "success" / "partial" / "failed" |
| `errors_count` | int | no | Кол-во ошибок | 0 |

---

### 3.4 Rebate (Начисления)

---

#### `rebate_calculated`

**Trigger:** Система рассчитала rebate для пользователя
**Priority:** P0
**Platform:** backend (server-side event)

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `exchange_name` | string | yes | Биржа | "weex" |
| `period` | string | yes | Расчётный период | "2026-02-01_2026-02-07" |
| `gross_rebate_usd` | float | yes | Rebate от биржи | 50.00 |
| `trader_share_usd` | float | yes | Доля трейдера | 30.00 |
| `service_share_usd` | float | yes | Доля сервиса | 20.00 |
| `trader_share_pct` | float | yes | % трейдера | 60.0 |
| `trading_volume_usd` | float | yes | Объём торгов за период | 100000.00 |

---

#### `rebate_accrued_notification`

**Trigger:** Пользователь увидел уведомление о начислении
**Priority:** P0
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `exchange_name` | string | yes | Биржа | "bingx" |
| `amount_usd` | float | yes | Сумма начисления | 12.50 |
| `notification_channel` | string | yes | Канал уведомления | "telegram" / "web_push" / "email" |

---

### 3.5 Withdrawals (Выводы)

---

#### `withdrawal_requested`

**Trigger:** Трейдер запросил вывод средств
**Priority:** P0
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `amount_usd` | float | yes | Сумма в USD | 100.00 |
| `currency` | string | yes | Валюта вывода | "USDT" |
| `network` | string | yes | Сеть блокчейна | "TRC20" / "ERC20" / "BEP20" |
| `is_first_withdrawal` | boolean | yes | Первый ли вывод | true |

---

#### `withdrawal_status_changed`

**Trigger:** Изменился статус вывода
**Priority:** P0
**Platform:** backend (server-side event)

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `withdrawal_id` | string | yes | ID вывода | "wd_abc123" |
| `old_status` | string | yes | Предыдущий статус | "pending" |
| `new_status` | string | yes | Новый статус | "approved" / "processing" / "completed" / "failed" |
| `amount_usd` | float | yes | Сумма | 100.00 |
| `processing_time_sec` | int | no | Время обработки (для completed) | 3600 |
| `failure_reason` | string | no | Причина ошибки (для failed) | "invalid_address" |

---

#### `withdrawal_completed`

**Trigger:** Вывод успешно завершён
**Priority:** P0
**Platform:** backend (server-side event)

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `withdrawal_id` | string | yes | ID вывода | "wd_abc123" |
| `amount_usd` | float | yes | Сумма | 100.00 |
| `currency` | string | yes | Валюта | "USDT" |
| `network` | string | yes | Сеть | "TRC20" |
| `tx_hash` | string | no | Хеш транзакции | "0xabc..." |
| `total_processing_sec` | int | yes | Общее время обработки | 7200 |

---

### 3.6 Dashboard & Navigation (Навигация)

---

#### `dashboard_viewed`

**Trigger:** Пользователь открыл дашборд
**Priority:** P0
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `total_rebate_usd` | float | yes | Общий rebate на момент просмотра | 450.00 |
| `available_balance_usd` | float | yes | Доступный баланс | 120.00 |
| `exchanges_active` | int | yes | Кол-во активных бирж | 3 |

---

#### `statistics_viewed`

**Trigger:** Пользователь открыл страницу статистики
**Priority:** P1
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `exchange_name` | string | no | Конкретная биржа (если фильтр) | "mexc" |
| `period` | string | no | Выбранный период | "7d" / "30d" / "90d" |

---

#### `history_viewed`

**Trigger:** Пользователь открыл историю начислений/выплат
**Priority:** P1
**Platform:** web, telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `history_type` | string | yes | Тип истории | "rebate_accruals" / "withdrawals" |
| `filter_exchange` | string | no | Фильтр по бирже | "bybit" |
| `filter_period` | string | no | Фильтр по периоду | "30d" |

---

### 3.7 Telegram Bot Specific

---

#### `bot_started`

**Trigger:** Пользователь нажал /start в Telegram-боте
**Priority:** P0
**Platform:** telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `is_new_user` | boolean | yes | Новый пользователь или возврат | true |
| `deep_link` | string | no | Deep link параметр | "ref_influencer_x" |

---

#### `bot_command_used`

**Trigger:** Пользователь использовал команду или нажал кнопку в боте
**Priority:** P0
**Platform:** telegram_bot

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `command` | string | yes | Команда / кнопка | "dashboard" / "exchanges" / "withdraw" |
| `is_inline_button` | boolean | yes | Inline-кнопка или текстовая | true |

---

#### `bot_notification_sent`

**Trigger:** Бот отправил уведомление пользователю
**Priority:** P1
**Platform:** telegram_bot (server-side)

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `notification_type` | string | yes | Тип уведомления | "rebate_accrued" / "withdrawal_completed" / "new_exchange" |
| `delivery_status` | string | yes | Статус доставки | "delivered" / "blocked" / "failed" |

---

### 3.8 Admin Events

---

#### `admin_action_performed`

**Trigger:** Администратор выполнил действие
**Priority:** P1
**Platform:** admin

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `admin_id` | string | yes | ID администратора | "adm_001" |
| `action_type` | string | yes | Тип действия | "approve_withdrawal" / "update_rate" / "block_user" |
| `target_entity` | string | yes | Объект действия | "withdrawal_wd_123" / "exchange_mexc" |
| `details` | object | no | Детали | {"old_rate": 50, "new_rate": 60} |

---

#### `exchange_rate_updated`

**Trigger:** Администратор изменил ставку rebate для биржи
**Priority:** P0
**Platform:** admin

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `admin_id` | string | yes | ID админа | "adm_001" |
| `exchange_name` | string | yes | Биржа | "mexc" |
| `old_trader_share_pct` | float | yes | Старый % трейдера | 50.0 |
| `new_trader_share_pct` | float | yes | Новый % трейдера | 60.0 |

---

### 3.9 System Events (Error & Performance)

---

#### `api_sync_failed`

**Trigger:** Ошибка синхронизации с API биржи
**Priority:** P0
**Platform:** backend (server-side)

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `exchange_name` | string | yes | Биржа | "htx" |
| `error_type` | string | yes | Тип ошибки | "timeout" / "auth_failed" / "rate_limited" / "server_error" |
| `error_message` | string | no | Сообщение об ошибке | "Connection timed out" |
| `retry_attempt` | int | yes | Номер попытки | 2 |
| `will_retry` | boolean | yes | Будет ли повторная попытка | true |

---

#### `payout_failed`

**Trigger:** Ошибка при выполнении выплаты
**Priority:** P0
**Platform:** backend (server-side)

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `withdrawal_id` | string | yes | ID вывода | "wd_abc123" |
| `failure_reason` | string | yes | Причина | "insufficient_balance" / "invalid_address" / "network_error" |
| `amount_usd` | float | yes | Сумма | 100.00 |
| `will_retry` | boolean | yes | Повторная попытка | true |

---

## 4. Сводная таблица событий

| # | Event | Platform | Priority | Category |
|---|-------|----------|----------|----------|
| 1 | `page_viewed` | web | P0 | navigation |
| 2 | `user_signed_up` | web, bot | P0 | onboarding |
| 3 | `user_logged_in` | web, bot | P0 | onboarding |
| 4 | `user_logged_out` | web | P1 | onboarding |
| 5 | `onboarding_step_completed` | web, bot | P0 | onboarding |
| 6 | `onboarding_completed` | web, bot | P0 | onboarding |
| 7 | `referral_link_viewed` | web, bot | P0 | referral |
| 8 | `referral_link_copied` | web, bot | P0 | referral |
| 9 | `exchange_signup_confirmed` | backend | P0 | referral |
| 10 | `first_trade_detected` | backend | P0 | trading |
| 11 | `trading_volume_synced` | backend | P0 | trading |
| 12 | `rebate_calculated` | backend | P0 | rebate |
| 13 | `rebate_accrued_notification` | web, bot | P0 | rebate |
| 14 | `withdrawal_requested` | web, bot | P0 | withdrawal |
| 15 | `withdrawal_status_changed` | backend | P0 | withdrawal |
| 16 | `withdrawal_completed` | backend | P0 | withdrawal |
| 17 | `dashboard_viewed` | web, bot | P0 | navigation |
| 18 | `statistics_viewed` | web, bot | P1 | navigation |
| 19 | `history_viewed` | web, bot | P1 | navigation |
| 20 | `bot_started` | bot | P0 | telegram |
| 21 | `bot_command_used` | bot | P0 | telegram |
| 22 | `bot_notification_sent` | bot | P1 | telegram |
| 23 | `admin_action_performed` | admin | P1 | admin |
| 24 | `exchange_rate_updated` | admin | P0 | admin |
| 25 | `api_sync_failed` | backend | P0 | system |
| 26 | `payout_failed` | backend | P0 | system |

**Итого: 26 событий**
- P0: 19 событий
- P1: 7 событий

**По категориям:**
- Onboarding: 5
- Referral: 3
- Trading: 2
- Rebate: 2
- Withdrawal: 3
- Navigation: 3
- Telegram: 3
- Admin: 2
- System: 2
- General: 1

---

## 5. Воронки (Funnels)

### Основная воронка (Signup → Revenue)

```
page_viewed (landing)
  → user_signed_up
    → onboarding_completed
      → referral_link_copied
        → exchange_signup_confirmed
          → first_trade_detected
            → rebate_calculated
              → withdrawal_requested
                → withdrawal_completed
```

### Воронка активации

```
user_signed_up
  → referral_link_viewed
    → referral_link_copied
      → exchange_signup_confirmed
        → first_trade_detected
```

### Воронка вывода

```
dashboard_viewed (available_balance > 0)
  → withdrawal_requested
    → withdrawal_status_changed (approved)
      → withdrawal_completed
```

---

## 6. Когорты (Cohorts)

### По дате регистрации

```yaml
Группировка: по неделе регистрации
Метрика: % активных (с торгами) через D1, D7, D14, D30, D60, D90
Цель: D30 retention > 60%
```

### По каналу привлечения

```yaml
Группировка: signup_source (organic, influencer, paid, telegram_channel)
Метрика: Activation Rate, LTV, ARPU
Цель: определить наиболее прибыльный канал
```

### По количеству бирж

```yaml
Группировка: exchanges_count (1, 2, 3, 4+)
Метрика: Retention, ARPU, Trading Volume
Гипотеза: больше бирж = выше retention
```

---

## 7. Реализация в Django

### Интеграция (рекомендация)

```python
# settings.py
AMPLITUDE_API_KEY = env("AMPLITUDE_API_KEY")

# analytics/tracker.py
from amplitude import Amplitude, BaseEvent

amplitude = Amplitude(AMPLITUDE_API_KEY)

def track_event(user_id: str, event_type: str, event_properties: dict = None,
                user_properties: dict = None, platform: str = "web"):
    """Универсальная функция трекинга."""
    event = BaseEvent(
        event_type=event_type,
        user_id=user_id,
        event_properties={
            **(event_properties or {}),
            "platform": platform,
        },
        user_properties=user_properties,
    )
    amplitude.track(event)
```

### Пример использования

```python
# views.py — при регистрации
track_event(
    user_id=str(user.id),
    event_type="user_signed_up",
    event_properties={
        "method": "email",
        "source": request.GET.get("utm_source", "organic"),
        "utm_campaign": request.GET.get("utm_campaign"),
    },
    user_properties={
        "$set": {
            "signup_date": user.created_at.isoformat(),
            "signup_method": "email",
            "country": get_country_from_ip(request),
        }
    }
)

# services.py — при копировании реферальной ссылки
track_event(
    user_id=str(user.id),
    event_type="referral_link_copied",
    event_properties={
        "exchange_name": "mexc",
        "copy_method": "button_click",
        "is_first_copy": not user.has_copied_before("mexc"),
    }
)
```

---

*Документ создан: Analytics Agent | Дата: 2026-02-04*
