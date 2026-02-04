---
title: "Interaction Patterns — CryptoRebate"
created_by: "UX Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Interaction Patterns: CryptoRebate

> Стандартные паттерны взаимодействия, микро-анимации и feedback patterns

---

## 1. Navigation Patterns

### NP-001: Top Navigation Bar (Web ЛК)

```yaml
Type: Fixed top bar
Behavior:
  - Прилипает к верху при скролле
  - Тень sm появляется при скролле > 0
  - Responsive: hamburger menu на mobile (< 768px)
  - Active state: underline + bold на текущей секции

Structure:
  Left: Logo (→ /dashboard)
  Center: Nav items (Дашборд, Биржи, Выводы, История)
  Right: User menu (аватар + dropdown)

Dropdown menu:
  - Настройки
  - ---
  - Выйти
```

### NP-002: Sidebar Navigation (Admin Panel)

```yaml
Type: Collapsible left sidebar
Behavior:
  - Default: expanded (240px)
  - Collapsed: icons only (64px)
  - Mobile: overlay + backdrop
  - Active item: brand color background + bold text

Sections:
  - Dashboard (icon: chart)
  - Пользователи (icon: users)
  - Биржи (icon: exchange)
  - Выплаты (icon: wallet)
  - Настройки (icon: gear)
```

### NP-003: Telegram Bot Navigation

```yaml
Type: Inline keyboard buttons (2-3 per row)
Behavior:
  - Главное меню: persistent keyboard или /menu
  - Кнопка "← Назад" на каждом подэкране
  - Deep link поддержка: /start?exchange=bybit

Layout:
  Row 1: [📊 Дашборд] [💱 Биржи]
  Row 2: [💰 Вывести] [📋 История]
  Row 3: [⚙️ Настройки]
```

---

## 2. Data Display Patterns

### DP-001: KPI Cards

```yaml
Pattern: Metric card с числом, лейблом и трендом
Usage: Dashboard, Admin Dashboard

Structure:
  ┌────────────────────┐
  │  Label              │
  │  $1,234.56    ↑12% │
  │  ███████░░░        │
  └────────────────────┘

Variants:
  - Default: число + label
  - With trend: число + label + ↑/↓ процент (green/red)
  - With sparkline: число + миниатюрный график
  - Clickable: hover → shadow-md, cursor pointer

Loading State:
  - Skeleton placeholder (пульсирующий серый блок)

Empty State:
  - "$0.00" с подсказкой "Подключите биржу, чтобы начать"
```

### DP-002: Data Table

```yaml
Pattern: Сортируемая таблица с пагинацией
Usage: История начислений, выводы, Admin списки

Features:
  - Column sorting (click header → asc/desc/none)
  - Pagination: 20 items per page
  - Row hover: background subtle
  - Click row: → detail view
  - Status badges: цветные pills

Responsive (< 768px):
  - Горизонтальный scroll с sticky первой колонкой
  - ИЛИ card view (каждая строка → карточка)

Loading: Skeleton rows (5 шт)
Empty: Illustration + "Данных пока нет" + CTA

Sorting Animation:
  - Duration: 200ms
  - Easing: ease-out
  - Icon rotation на header
```

### DP-003: Chart / Graph

```yaml
Pattern: Line chart для rebate за период
Usage: Dashboard

Features:
  - Period selector: [7д] [30д] [90д] [Всё]
  - Hover: tooltip с точными значениями
  - Responsive: сжимается по ширине
  - Grid lines: subtle horizontal

Loading: Skeleton chart area
Empty: "Подключите биржу и начните торговать" + illustration

Animation:
  - Line draw: 600ms ease-in-out
  - Tooltip appear: 150ms fade-in
```

### DP-004: Status Badge

```yaml
Pattern: Цветной pill/badge для статусов
Usage: Везде где есть статусы

Variants:
  | Status      | Color      | Icon | Text              |
  |-------------|------------|------|-------------------|
  | connected   | Green      | ✅   | Подключена        |
  | pending     | Yellow     | ⏳   | Ожидание          |
  | processing  | Blue       | 🔄   | Обработка         |
  | completed   | Green      | ✅   | Выполнено         |
  | failed      | Red        | ❌   | Ошибка            |
  | rejected    | Red        | 🚫   | Отклонено         |
  | disabled    | Gray       | ⬜   | Отключена         |
  | active      | Green      | 🟢   | Активна           |

Size:
  - sm: 20px height, 12px font
  - md: 24px height, 14px font (default)
```

---

## 3. Form Patterns

### FP-001: Input Field

```yaml
Pattern: Text input с label, placeholder, помощью и ошибкой
Usage: Все формы

States:
  Default:    Border gray-300, text gray-700
  Focus:      Border brand-primary, ring-2 brand-primary/20
  Filled:     Border gray-300, text gray-900
  Error:      Border error, text error, help text red
  Disabled:   Background gray-100, text gray-400, cursor not-allowed

Validation:
  - Inline: валидация на blur (потеря фокуса)
  - Submit: валидация всех полей при submit
  - Real-time: для паролей (strength indicator)

Layout:
  ┌─────────────────────────────┐
  │ Label *                      │
  │ ┌─────────────────────────┐ │
  │ │ Placeholder text        │ │
  │ └─────────────────────────┘ │
  │ Help text or error message  │
  └─────────────────────────────┘

Animation:
  - Focus ring: 150ms ease-in
  - Error shake: 300ms, translateX(±4px) × 3
```

### FP-002: Copy to Clipboard

```yaml
Pattern: Кнопка "Копировать" для реферальных ссылок
Usage: Exchanges page, Onboarding

Behavior:
  1. Default: [📋 Копировать ссылку]
  2. Click: копирует в clipboard
  3. Feedback: [✅ Скопировано!] (зелёный, 2 секунды)
  4. Return: [📋 Копировать ссылку]

  Fallback: если clipboard API недоступен → select all в input

Animation:
  - Icon switch: 200ms fade
  - Text color transition: 200ms
```

### FP-003: Currency Input

```yaml
Pattern: Числовой input для суммы + валюта
Usage: Withdrawal form

Features:
  - Только числа + 1 точка
  - Max 2 decimal places
  - Суффикс: "USDT"
  - Кнопка [MAX] — вставляет максимум
  - Live preview: "Вы получите: $XX.XX"

Layout:
  ┌──────────────────────────────────┐
  │ Сумма                            │
  │ ┌─────────────────────┬────────┐ │
  │ │ 100.00              │  USDT  │ │
  │ └─────────────────────┴────────┘ │
  │ Доступно: $123.45     [MAX]      │
  └──────────────────────────────────┘

Validation:
  - amount > 0
  - amount >= min_withdrawal ($10)
  - amount <= available_balance
```

### FP-004: Wallet Address Input

```yaml
Pattern: Input для адреса крипто-кошелька с валидацией
Usage: Withdrawal form, Settings

Features:
  - Paste detection (показать toast "Адрес вставлен")
  - Format validation (TRC-20: начинается с T, 34 символа)
  - Checksum validation (если поддерживается)
  - Truncation display: T...xxxxx (показать полный при hover)

Warning:
  - Всегда показывать: "⚠️ Проверяйте адрес. Отправка необратима."
  - Смена кошелька: cooldown 48 часов (BR-051)
```

---

## 4. Feedback Patterns

### FB-001: Toast Notifications

```yaml
Pattern: Всплывающее уведомление сверху-справа
Usage: Feedback на действия пользователя

Types:
  | Type    | Icon | Color      | Duration | Auto-dismiss |
  |---------|------|------------|----------|-------------|
  | Success | ✅   | Green      | 3s       | Да          |
  | Error   | ❌   | Red        | 5s       | Нет (close) |
  | Warning | ⚠️   | Yellow     | 4s       | Да          |
  | Info    | ℹ️   | Blue       | 3s       | Да          |

Behavior:
  - Appear: slide-in from right, 200ms
  - Stack: max 3, newer on top, older shift down
  - Dismiss: click × or swipe right (mobile)
  - Disappear: fade-out, 200ms

Position:
  Desktop: top-right, 16px from edges
  Mobile: top-center, full width - 32px
```

### FB-002: Confirmation Modal

```yaml
Pattern: Модальное окно подтверждения для опасных действий
Usage: Вывод средств, удаление, отмена

Structure:
  ┌─────────────────────────────────┐
  │                           [×]   │
  │  ⚠️ Подтвердите действие       │
  │                                 │
  │  Вы собираетесь вывести         │
  │  $100.00 USDT на адрес         │
  │  T...x4f2a (TRC-20)            │
  │                                 │
  │  [Отмена]    [Подтвердить]     │
  └─────────────────────────────────┘

Behavior:
  - Backdrop: semi-transparent black (click → close)
  - Appear: fade-in 200ms + scale from 95%
  - Focus trap: Tab cycles внутри модала
  - Escape: закрывает модал
  - Primary action: справа, акцентный цвет
  - Destructive action: красная кнопка
```

### FB-003: Loading States

```yaml
Pattern: Индикаторы загрузки
Usage: Все асинхронные операции

Variants:
  1. Skeleton:
     - Для контента (карточки, таблицы, текст)
     - Пульсирующие серые блоки
     - Повторяет layout будущего контента

  2. Spinner:
     - Для кнопок (внутри кнопки, заменяет текст)
     - Для отдельных секций
     - SVG animated circle

  3. Progress bar:
     - Для длительных операций (импорт, sync)
     - Линейный прогресс с процентами

  4. Full-page loader:
     - Только при первой загрузке приложения
     - Logo + spinner
     - Timeout: 10s → показать retry

Rules:
  - < 300ms: не показывать loader (perceived instant)
  - 300ms-1s: spinner
  - > 1s: skeleton или progress
  - > 10s: сообщение "Загрузка занимает больше обычного"
```

### FB-004: Empty States

```yaml
Pattern: Состояния пустых списков/данных
Usage: Таблицы, дашборд, биржи

Structure:
  ┌─────────────────────────────────┐
  │                                 │
  │        [Illustration]           │
  │                                 │
  │   Заголовок                     │
  │   Описание + что сделать        │
  │                                 │
  │     [Primary CTA Button]        │
  │                                 │
  └─────────────────────────────────┘

Examples:
  | Screen          | Title                    | CTA                    |
  |-----------------|--------------------------|------------------------|
  | Dashboard       | "Пока ничего нет"        | "Подключить биржу"     |
  | Exchanges       | "Начните с подключения"   | "Выбрать биржу"        |
  | History         | "Нет начислений"          | "Как это работает?"    |
  | Withdrawals     | "Нет выводов"             | "Как вывести средства?"|
  | Admin Users     | "Нет пользователей"       | —                      |
```

### FB-005: Error States

```yaml
Pattern: Отображение ошибок
Usage: Формы, API errors, network errors

Levels:
  1. Field-level: красный бордер + сообщение под полем
  2. Form-level: alert banner сверху формы
  3. Section-level: error card с retry кнопкой
  4. Page-level: full-page error (404, 500)

Page-level errors:
  404:
    Title: "Страница не найдена"
    CTA: "На главную"

  500:
    Title: "Что-то пошло не так"
    Subtitle: "Мы уже разбираемся. Попробуйте позже."
    CTA: "Обновить страницу"

  Network:
    Title: "Нет соединения"
    Subtitle: "Проверьте подключение к интернету"
    CTA: "Попробовать снова"
```

---

## 5. Action Patterns

### AP-001: Primary Action Button

```yaml
Pattern: Главная кнопка действия на странице
Rule: Максимум 1 primary CTA на экран

Examples:
  | Page              | CTA                  |
  |-------------------|----------------------|
  | Register          | "Зарегистрироваться" |
  | Login             | "Войти"              |
  | Exchange detail   | "Копировать ссылку"  |
  | Withdrawal form   | "Вывести средства"   |
  | Admin payout      | "Одобрить"           |

Loading state:
  - Text заменяется spinner + "Загрузка..."
  - Кнопка disabled
  - Prevent double-click
```

### AP-002: Destructive Action

```yaml
Pattern: Опасные действия с подтверждением
Usage: Удаление, отклонение, отмена вывода

Flow:
  1. Click destructive button (red text/outline)
  2. Confirmation modal appears
  3. User confirms → action executes
  4. Toast: feedback

Visual:
  - Красный текст / outline
  - НИКОГДА не primary style для destructive
  - Всегда требует confirmation
```

### AP-003: Inline Actions (Table Row)

```yaml
Pattern: Действия в строке таблицы
Usage: Admin tables, history

Approach:
  Desktop: иконки-кнопки справа в строке (visible on hover)
  Mobile: swipe actions или dropdown "⋮"

Actions:
  | Table        | Actions                          |
  |-------------|----------------------------------|
  | Payouts     | Одобрить, Отклонить, Подробности |
  | Users       | Подробности, Заморозить           |
  | Exchanges   | Редактировать, Вкл/Выкл          |
```

---

## 6. Micro-interactions

### MI-001: Copy Animation

```
[📋 Копировать] → click → [✅ Скопировано!] (200ms fade, hold 2s) → [📋 Копировать]
```

### MI-002: Balance Update

```
$123.45 → new data → flash green bg (300ms) → $128.77
```

### MI-003: Status Change

```
⏳ Ожидание → transition (300ms fade) → ✅ Выполнено (+ green pulse once)
```

### MI-004: Card Hover

```
Default → hover → shadow-md (200ms) + translateY(-2px)
```

### MI-005: Toggle Switch

```
[○────] OFF → click → [────●] ON (300ms spring animation)
```

### MI-006: Number Count Up

```
$0 → animate to $1,234.56 (600ms, ease-out) — при первой загрузке dashboard
```

---

## 7. Accessibility Patterns

### Keyboard Navigation

```yaml
Tab Order:
  - Логичный порядок (left-to-right, top-to-bottom)
  - Skip to main content link (hidden, visible on focus)
  - Focus trap в модалах
  - Escape закрывает overlay/modal/dropdown

Focus Indicators:
  - Ring: 2px solid brand-primary, 2px offset
  - НИКОГДА не убирать outline
  - Custom focus style для всех interactive elements

Shortcuts:
  - Esc: закрыть модал / dropdown
  - Enter: submit форму / confirm
  - Tab: следующий элемент
  - Shift+Tab: предыдущий элемент
```

### Screen Reader

```yaml
ARIA:
  - aria-label на icon-only buttons
  - aria-live="polite" на toast notifications
  - aria-busy="true" на загружаемые секции
  - role="alert" на error messages
  - aria-describedby для help text полей

Landmarks:
  - <header>: навигация
  - <main>: основной контент
  - <nav>: навигационные блоки
  - <aside>: sidebar
  - <footer>: подвал
```

### Color & Contrast

```yaml
Rules:
  - Text contrast ratio: >= 4.5:1 (AA)
  - Large text contrast: >= 3:1
  - Никогда не передавать информацию ТОЛЬКО цветом
  - Status badges: цвет + иконка + текст
  - Charts: цвет + pattern/label
```

---

## 8. Platform-Specific Patterns

### Web (React)

```yaml
Routing:
  - React Router v6
  - Lazy loading страниц
  - Loading fallback: skeleton

State feedback:
  - Optimistic updates (update UI before API response)
  - Rollback on error
  - Stale-while-revalidate for data fetching
```

### Telegram Bot

```yaml
Message Types:
  - Text + inline keyboard (основной)
  - Edit message (update existing message, не спамить)
  - Photo + caption (для дашборда-картинки, V2)

Keyboard Patterns:
  - Inline buttons: max 3 per row
  - Callback data: structured (action:param:value)
  - Loading state: "⏳ Загрузка..." edit message

Rate Limits:
  - Max 30 messages/sec per bot
  - Batch updates: edit instead of new message
  - Throttle rapid button presses (ignore < 500ms)
```

---

*Документ создан: UX Agent | Дата: 2026-02-04*
