---
title: "Figma Make Prompts — CryptoRebate Concept Prototype"
created_by: "Orchestrator Agent (UX + UI + Content)"
created_at: "2026-02-04"
version: "1.0"
---

# Figma Make Prompts: CryptoRebate Concept Prototype

> Промпты для генерации полного интерактивного прототипа в Figma Make.
> Каждый промпт — отдельный экран. Генерировать последовательно.

---

## Общие инструкции (System Prompt)

Перед генерацией каждого экрана, вставляй этот контекст в начало:

```
DESIGN SYSTEM CONTEXT (apply to ALL screens):

Brand: CryptoRebate — crypto exchange rebate/cashback aggregator.
Style: Premium fintech 2026, clean, data-dense but not cluttered.
Vibe: Trust + Money. Feels like a professional trading dashboard, not a crypto hype project.

Colors:
- Primary: Deep Blue #1E40AF (trust, professionalism)
- Secondary: Emerald Green #059669 (money, success, profit)
- Backgrounds: #FFFFFF (main), #F9FAFB (secondary), #F3F4F6 (tertiary)
- Text: #1F2937 (headings), #374151 (body), #6B7280 (secondary), #9CA3AF (placeholder)
- Borders: #E5E7EB
- Semantic: Success #059669, Warning #D97706, Error #DC2626, Info #2563EB

Typography:
- Headings: Inter Bold/Semibold
- Body: Inter Regular 16px/24px
- Data/Numbers: Inter with tabular figures
- Crypto addresses & hashes: JetBrains Mono 14px
- All text in Russian (RU)

Spacing: 4px base grid. Card padding 24px, section gap 32px.
Border radius: Buttons 8px, Cards 12px, Modals 16px, Avatars 9999px.
Shadows: Cards shadow-md, Modals shadow-lg.
Icons: Lucide style (stroke width 2, round caps).
Grid: 12 columns, 1280px max-width, 24px gutter.

2026 Design Trends to apply:
- Glassmorphism subtle effects on hero sections and cards
- Micro-gradients on primary CTAs (blue to blue-600)
- Bento grid layouts for dashboard KPI cards
- Soft ambient shadows (no hard drop shadows)
- Subtle grain/noise texture on hero backgrounds
- Smooth corner radius (squircle feel)
- Variable font weight animations on hover states
- Floating navigation with backdrop-blur
- 3D icon style for feature illustrations
- Dark mode toggle in header (show light mode as default)
- Neumorphic subtle depth on input fields
- Animated gradient borders on focus states
- Mesh gradient accents in hero/CTA sections
```

---

## Промпт 1: Landing Page (Главная)

```
Design a full landing page for CryptoRebate — a crypto exchange rebate/cashback aggregator service.
This is the main entry point that describes the ENTIRE project.

Page structure (scroll, single page):

SECTION 1 — STICKY HEADER:
- Left: Logo "CryptoRebate" (icon: stylized "CR" monogram with emerald accent)
- Center nav links: "Как работает", "Биржи", "Калькулятор", "FAQ"
- Right: "Войти" (ghost button) + "Начать бесплатно" (primary button, gradient blue)
- Header has backdrop-blur glass effect, appears on scroll
- Include dark mode toggle icon (sun/moon)

SECTION 2 — HERO (90vh):
- Large heading: "Получай cashback с каждой сделки на 11 криптобиржах"
- Subheading: "Зарегистрируйся один раз — мы вернём до 40% торговых комиссий на Bybit, Binance, OKX, MEXC и ещё 7 биржах. Бесплатно."
- Primary CTA: "Получить cashback →" (large, gradient blue-to-emerald button)
- Secondary CTA: "Узнать больше ↓" (ghost)
- Trust badges row: "✓ Без KYC", "✓ 11 бирж", "✓ Вывод в USDT", "✓ Telegram бот"
- Right side or background: abstract 3D mesh gradient illustration with floating crypto icons (BTC, ETH, USDT orbiting around a central shield/wallet icon)
- Subtle grain texture overlay on the hero background

SECTION 3 — HOW IT WORKS (3 steps):
- Section title: "Как это работает"
- Subtitle: "Три простых шага до вашего первого cashback"
- 3 cards in a row (bento grid style):
  Card 1: Icon (Link), "1. Зарегистрируйтесь", "Создайте аккаунт за 30 секунд через email или Telegram"
  Card 2: Icon (Building2), "2. Подключите биржу", "Перейдите на биржу по нашей реферальной ссылке и начните торговать"
  Card 3: Icon (Wallet), "3. Получайте cashback", "Торгуйте как обычно — rebate начисляется автоматически. Выводите на свой кошелёк"
- Each card has a subtle glass background with soft shadow
- Numbered step indicators connected with a dotted line

SECTION 4 — SUPPORTED EXCHANGES:
- Title: "11 бирж — одна платформа"
- Subtitle: "Все биржи доступны сразу после регистрации"
- Grid of 11 exchange logos with names and max rebate rates:
  MEXC (до 40%), Bitget (до 35%), BingX (до 30%), Weex (до 25%), Bybit (до 30%),
  Binance (до 20%), Bitmart (до 15%), OKX (до 20%), KuCoin (до 20%), HTX (до 30%), BloFin (до 20%)
- Each logo card has hover effect showing tooltip: "Спот: X%, Фьючерсы: Y%"
- Below grid: "Подключайте все биржи одновременно для максимального cashback"

SECTION 5 — REBATE CALCULATOR:
- Title: "Посчитайте свой cashback"
- Interactive calculator card with glass background:
  Input: "Ваш месячный объём торгов" — slider from $1,000 to $500,000 + manual input field
  Dropdown: "Биржа" — select with 11 options (default: MEXC)
  Toggle: "Спот" / "Фьючерсы"
  Result block (large, emerald accent):
    "Ваш cashback: ~$150 / месяц"
    "~$1,800 / год"
  CTA: "Начать получать cashback →"
- Show breakdown: "Комиссия биржи: $X → Affiliate rebate: $Y → Ваш cashback: $Z"

SECTION 6 — FEATURES (Future features, show ALL):
- Title: "Всё для максимального cashback"
- Bento grid of 8 feature cards:
  1. "Автоматический расчёт" — icon TrendingUp — "Rebate начисляется автоматически после каждой синхронизации с биржей"
  2. "Telegram бот" — icon Bot — "Полноценный личный кабинет прямо в Telegram. Статистика, вывод, уведомления"
  3. "Мгновенные уведомления" — icon Bell — "Push в Telegram и email при каждом начислении и выводе"
  4. "Прозрачная статистика" — icon BarChart3 — "Детальная аналитика по каждой бирже: объём, комиссии, rebate"
  5. "Быстрый вывод" — icon ArrowUpFromLine — "Вывод в USDT на TRC-20 или ERC-20. Авто-одобрение до $100"
  6. "Мультивалютный портфель" — icon Coins — "Отслеживание rebate в разных валютах с конвертацией в USDT" (badge: "Скоро")
  7. "API для трейдеров" — icon Code — "Подключите свои торговые инструменты через наш API" (badge: "Скоро")
  8. "Реферальная программа" — icon Users — "Приглашайте друзей и получайте бонус от их rebate" (badge: "Скоро")

SECTION 7 — SOCIAL PROOF / TESTIMONIALS:
- Title: "Трейдеры уже экономят"
- 3 testimonial cards in a horizontal row:
  Card 1: Avatar, "Экономлю $200 в месяц на комиссиях MEXC. Подключил за 2 минуты." — Alex, MEXC, 5 stars
  Card 2: Avatar, "Простое подключение, прозрачные начисления. Рекомендую." — Maria, Bybit + Bitget, 5 stars
  Card 3: Avatar, "Вывожу cashback каждую неделю. Работает как часы." — Dmitry, OKX + BingX, 4 stars
- Stats bar below: "2,500+ трейдеров", "$2.4M+ объём торгов", "$180K+ выплачено cashback"

SECTION 8 — SECURITY & TRUST:
- Title: "Безопасность и прозрачность"
- 4 trust points in a row:
  1. Shield icon — "Без доступа к вашим средствам" — "Мы не имеем доступа к вашему торговому счёту. Только отслеживание комиссий"
  2. Lock icon — "Шифрование данных" — "256-bit SSL, безопасное хранение данных"
  3. Eye icon — "Прозрачные начисления" — "Каждое начисление привязано к конкретной сделке"
  4. Clock icon — "3 года на рынке" — "Стабильные выплаты с первого дня работы"

SECTION 9 — FAQ:
- Title: "Частые вопросы"
- 6 accordion items:
  1. "Как работает cashback?" → "Вы регистрируетесь на бирже через нашу реферальную ссылку..."
  2. "Это бесплатно?" → "Да, сервис полностью бесплатен для трейдеров..."
  3. "Какой минимальный вывод?" → "Минимальная сумма вывода — $10 USDT..."
  4. "Как быстро начисляется rebate?" → "Зависит от биржи. Обычно в течение 24 часов..."
  5. "Можно подключить несколько бирж?" → "Да, все 11 бирж доступны одновременно..."
  6. "Нужна ли верификация?" → "Нет, KYC не требуется для нашего сервиса..."

SECTION 10 — FINAL CTA:
- Full-width section with mesh gradient background (blue-to-emerald)
- Large heading: "Готовы экономить на комиссиях?"
- Subtext: "Присоединяйтесь к 2,500+ трейдерам, которые уже получают cashback"
- CTA: "Зарегистрироваться бесплатно →" (large white button)
- Below: "Регистрация за 30 секунд • Без KYC • Бесплатно навсегда"

FOOTER:
- Left: Logo + "Партнёрский rebate-сервис для 11 криптобирж" + copyright 2026
- Column "Продукт": Как работает, Биржи, Калькулятор, FAQ
- Column "Поддержка": Telegram, Email, Помощь
- Column "Правовое": Условия использования, Политика конфиденциальности
- Bottom row: social icons (Telegram, Twitter/X, GitHub)

Make the page feel premium, modern 2026 fintech with subtle glassmorphism, mesh gradients, and clean data presentation. All text in Russian. Desktop viewport 1440px width.
```

---

## Промпт 2: Registration Page

```
Design a registration page for CryptoRebate.

Layout: Centered card (480px width) on a subtle gradient background (very light blue to white).

HEADER (minimal):
- Left: Logo "CryptoRebate" (clickable, goes to landing)
- Right: "Уже есть аккаунт? Войти" (link)

REGISTRATION CARD (centered, shadow-lg, radius-xl 16px):
- Title: "Создать аккаунт" (h1, Inter Bold 30px)
- Subtitle: "Начните получать cashback с торговых комиссий"

- Method toggle (pill style, full width):
  [Email] [Telegram] — Email is active/selected

- EMAIL FORM (when Email selected):
  Field 1: "Email" — input with placeholder "name@example.com", icon Mail
  Field 2: "Пароль" — input with eye toggle, placeholder dots
  Helper text: "Минимум 8 символов, 1 цифра, 1 буква"
  Password strength indicator bar (weak/medium/strong)
  Field 3: "Повторите пароль" — input with eye toggle

  Checkbox: "Согласен с условиями сервиса и политикой конфиденциальности" (links underlined)

  CTA: "Зарегистрироваться" (full-width primary button, gradient blue, disabled state shown)

  Divider: "— или —"

  Secondary: "Войти через Telegram" (button with Telegram icon, outlined)

- TELEGRAM FORM (when Telegram selected):
  Telegram icon (large, centered)
  Text: "Нажмите кнопку ниже — вы будете перенаправлены в Telegram для авторизации"
  CTA: "Войти через Telegram" (full-width, Telegram blue #0088CC)
  Below: "Или зарегистрируйтесь через Email" (link)

Show BOTH states side by side if possible, or show the Email variant as primary.

STATES to show (as additional frames):
1. Default (empty form)
2. Filling (email entered, password typing, strength bar at "medium")
3. Error: "Этот email уже зарегистрирован. Войти?" (inline error under email field, red border)
4. Submitting (button shows spinner, fields disabled)

Bottom text: "Регистрация бесплатна и займёт 30 секунд"

All text in Russian. Match the landing page design system.
```

---

## Промпт 3: Login Page

```
Design a login page for CryptoRebate.

Layout: Same structure as Registration page — centered card on subtle background.

HEADER (minimal):
- Left: Logo "CryptoRebate"
- Right: "Нет аккаунта? Регистрация" (link)

LOGIN CARD (centered, 480px, shadow-lg, radius-xl):
- Title: "Вход в аккаунт" (h1)

- Method toggle (pill):
  [Email] [Telegram]

- EMAIL FORM:
  Field 1: "Email" — input, placeholder "name@example.com", Mail icon
  Field 2: "Пароль" — input with eye toggle
  Right-aligned link below password: "Забыли пароль?"

  CTA: "Войти" (full-width primary gradient button)

  Divider: "— или —"

  "Войти через Telegram" (outlined button with TG icon)

STATES:
1. Default (empty)
2. Error: "Неверный email или пароль" (inline alert above CTA, red)
3. Submitting (spinner in button)

All text in Russian.
```

---

## Промпт 4: Onboarding Wizard (5 steps)

```
Design a 5-step onboarding wizard overlay for CryptoRebate.
This appears on first login after registration, overlaid on the dashboard.

CONTAINER: Centered modal (640px width), with step indicator at the top (dots: ● ● ○ ○ ○).

STEP 1 — Welcome:
- Illustration: 3D style welcome graphic (person with floating crypto icons)
- Title: "Добро пожаловать в CryptoRebate!"
- Subtitle: "Начните получать cashback с торговых комиссий на 11 биржах"
- CTA: "Начать →" (primary)
- Skip: "Пропустить" (text link)

STEP 2 — How it works:
- 3 numbered items with icons vertically:
  1. 🔗 "Подключитесь" — "Скопируйте реферальную ссылку и зарегистрируйтесь на бирже"
  2. 📈 "Торгуйте" — "Торгуйте как обычно — мы автоматически считаем ваш rebate"
  3. 💰 "Получайте" — "Выводите cashback в криптовалюте на ваш кошелёк"
- CTA: "Далее →"
- Back: "← Назад"

STEP 3 — Choose exchange:
- Title: "Выберите вашу первую биржу"
- Subtitle: "Вы сможете подключить все 11 позже"
- Grid of 11 exchange cards (small, with logo + name + "до X% cashback"):
  MEXC, Bitget, BingX, Weex, Bybit, Binance, Bitmart, OKX, KuCoin, HTX, BloFin
- Selected exchange highlighted with emerald border
- CTA: "Далее →"

STEP 4 — Copy referral link:
- Title: "Скопируйте ссылку"
- Subtitle: "Перейдите по ней и зарегистрируйтесь на MEXC"
- Large link block with copy button:
  "https://www.mexc.com/register?inviteCode=CRB_12345"
  [Скопировать ссылку] (primary button with Copy icon)
- After copy state: checkmark, "Ссылка скопирована! ✓"
- Instruction: "Зарегистрируйтесь на бирже по этой ссылке, затем вернитесь сюда"

STEP 5 — Done:
- Celebration illustration (confetti / checkmark)
- Title: "Отлично! Вы всё настроили"
- Subtitle: "Начинайте торговать — мы будем считать ваш cashback автоматически"
- CTA: "Перейти в дашборд →" (primary, gradient)

Show all 5 steps as separate frames in Figma. Background: dimmed dashboard.
All text in Russian.
```

---

## Промпт 5: Trader Dashboard

```
Design the main trader dashboard for CryptoRebate personal account.

LAYOUT: Sidebar (240px) + Main content area.

LEFT SIDEBAR (fixed, dark blue #1E3050 background):
- Top: Logo "CryptoRebate" (white text, small)
- User avatar (circle) + "Alex" + balance "$1,245.00"
- Navigation items (white text, Lucide icons, active item has blue-500 left border + blue-50 bg):
  • 🏠 Дашборд (ACTIVE)
  • 🏢 Биржи
  • 💰 Выводы
  • 📋 История
  • ⚙️ Настройки
  — divider —
  • 💬 Поддержка
  • 🚪 Выход
- Bottom: "CryptoRebate v1.0"

MAIN CONTENT:

Row 1 — Page header:
- "Дашборд" (h1, 30px)
- "Привет, Alex! 👋" (subtitle, gray-500)
- Right: period selector pills [7д] [30д] [90д] [Всё] — 30д active

Row 2 — KPI Cards (4 cards in a bento grid row):
Card 1 (main, slightly larger):
  Label: "Доступный баланс"
  Value: "$1,245.00" (large, 36px, bold, dark)
  Change: "↑ +$85.20 за 7 дней" (emerald green)
  Sparkline mini chart (green line, last 7 days)
  Bottom link: "Вывести →"

Card 2:
  Label: "Всего заработано"
  Value: "$4,320.50"
  Change: "↑ +$312 за 30 дней"
  Sparkline (blue)

Card 3:
  Label: "Активных бирж"
  Value: "5 из 11"
  Visual: 5 small green dots + 6 gray dots
  Bottom link: "Подключить ещё →"

Card 4:
  Label: "В ожидании"
  Value: "$320.00"
  Subtext: "1 заявка на вывод"
  Status badge: yellow "Обработка"

Row 3 — Chart section:
- Card with title "Rebate за период"
- Period tabs: [7д] [30д] [90д] [Всё]
- Area chart (gradient fill, blue-to-transparent):
  X axis: dates (last 30 days)
  Y axis: dollar amounts
  Hover tooltip showing exact value for a data point
- Legend: "Начислено $312.40 за период"

Row 4 — Recent accruals table:
- Section title: "Последние начисления"
- Right: "Показать все →" (link)
- Table with 5 rows:
  Columns: Дата | Биржа | Тип | Объём торгов | Rebate | Статус
  Row 1: 04.02 | [MEXC logo] MEXC | Фьючерсы | $12,340 | +$32.50 | ✅ Начислен (green badge)
  Row 2: 04.02 | [Bitget logo] Bitget | Спот | $8,150 | +$18.20 | ✅ Начислен
  Row 3: 03.02 | [Bybit logo] Bybit | Фьючерсы | $15,200 | +$45.00 | ✅ Начислен
  Row 4: 03.02 | [BingX logo] BingX | Спот | $5,400 | +$12.80 | ✅ Начислен
  Row 5: 02.02 | [OKX logo] OKX | Фьючерсы | $3,100 | +$8.40 | ⏳ Расчёт (yellow badge)
- Table has zebra striping, hover highlight, sortable columns

Make the dashboard feel data-rich but clean. Use subtle card shadows, soft borders.
All mock data should look realistic. All text in Russian. Desktop 1440px viewport.
```

---

## Промпт 6: Dashboard — Empty State (New User)

```
Design the trader dashboard empty state for a new user who just registered on CryptoRebate.

Same sidebar layout as the main dashboard.

MAIN CONTENT:

KPI Cards (4 cards, all showing $0 / 0):
  Card 1: "Доступный баланс" — "$0.00" — gray, no sparkline
  Card 2: "Всего заработано" — "$0.00"
  Card 3: "Активных бирж" — "0 из 11"
  Card 4: "В ожидании" — "$0.00"

EMPTY STATE (centered, replacing chart and table area):
- Large illustration: a friendly empty state graphic (person looking at crypto charts with a magnifying glass, or a rocket about to launch)
- Title: "Добро пожаловать!"
- Subtitle: "Подключите биржу и начните получать cashback с комиссий"
- Primary CTA: "Подключить биржу →" (large gradient button)
- Secondary: "Как это работает? →" (text link)

Make the empty state feel inviting, not sad. Use the emerald accent for CTA.
All text in Russian.
```

---

## Промпт 7: Exchanges Page

```
Design the Exchanges page for CryptoRebate trader account.

Same sidebar layout (Биржи is ACTIVE in nav).

MAIN CONTENT:

Header row:
- Title: "Мои биржи" (h1)
- Search: "Поиск биржи..." input (with Search icon)
- View toggle: [Grid icon] [List icon] — Grid active

Filter chips row:
- (Все) — active/selected
- (Подключённые) — 5
- (Ожидание) — 1
- (Не подключённые) — 5

GRID VIEW — 3 columns of exchange cards (11 total):

Card structure (each card):
- Exchange logo (rounded square, 48px) + Exchange name (bold)
- "Cashback: до X%" (emerald text)
- Status badge:
  • Green "Подключена" (with CheckCircle icon) — for connected
  • Yellow "Ожидание" (with Clock icon) — for pending
  • Gray "Не подключена" (with Plus icon) — for not connected
- Mini stats (only for connected): "Объём: $85K | Rebate: $1,200"
- Actions:
  Connected: "Скопировать ссылку" (outlined) + "Подробнее →" (link)
  Pending: "Скопировать ссылку" (outlined) + "Подробнее →"
  Not connected: "Подключить" (primary button)

Show these 11 exchanges with varied statuses:
- MEXC — Connected, до 40%, $85K volume, $1,200 rebate
- Bitget — Connected, до 35%, $45K volume, $650 rebate
- BingX — Connected, до 30%, $28K volume, $340 rebate
- Bybit — Connected, до 30%, $65K volume, $980 rebate
- OKX — Connected, до 20%, $12K volume, $180 rebate
- Weex — Pending, до 25%
- Binance — Not connected, до 20%
- Bitmart — Not connected, до 15%
- KuCoin — Not connected, до 20%
- HTX — Not connected, до 30%
- BloFin — Not connected, до 20%

Each card should have a subtle hover state (lift + shadow increase).
Make logos recognizable placeholder shapes with exchange brand colors.
All text in Russian. Desktop 1440px.
```

---

## Промпт 8: Exchange Detail Page

```
Design the Exchange Detail page for MEXC on CryptoRebate.

Same sidebar (Биржи is active).

MAIN CONTENT:

Breadcrumbs: "Биржи > MEXC"

EXCHANGE HEADER CARD (full width, subtle gradient bg):
- Left: MEXC logo (large, 64px) + "MEXC" (h1)
- Status: green badge "Подключена"
- Rebate info: "Ваш rebate: 40% от комиссий"
- Subtext: "Подключена с 15 января 2026"

KPI ROW (3 cards):
Card 1: "Торговый объём" — "$125,400" — "за 30 дней" — sparkline
Card 2: "Rebate заработано" — "$1,850.00" — "за всё время" — sparkline
Card 3: "Ожидает начисления" — "$85.00" — clock icon

REFERRAL LINK SECTION:
- Card with subtle emerald border
- Label: "Ваша реферальная ссылка"
- Link display: "https://www.mexc.com/register?inviteCode=CRB_12345" (monospace font, truncated with full tooltip)
- Buttons: [Скопировать ссылку] (primary) + (Открыть на бирже ↗) (ghost)

CHART: "Rebate по бирже MEXC"
- Tabs: [7д] [30д] [90д]
- Area chart similar to dashboard but filtered for MEXC
- Shows last 30 days of rebate data

ACCRUALS HISTORY TABLE:
- Title: "История начислений"
- Columns: Дата | Тип | Объём торгов | Комиссия | Rebate | Статус
  Row 1: 04.02.2026 | Фьючерсы | $8,200 | $32.80 | +$13.12 | ✅ Начислен
  Row 2: 03.02.2026 | Спот | $3,100 | $15.50 | +$6.20 | ✅ Начислен
  Row 3: 03.02.2026 | Фьючерсы | $12,500 | $50.00 | +$20.00 | ✅ Начислен
  Row 4: 02.02.2026 | Фьючерсы | $5,600 | $22.40 | +$8.96 | ✅ Начислен
  Row 5: 01.02.2026 | Спот | $2,400 | $12.00 | +$4.80 | ⏳ Расчёт
- Pagination: "Показать ещё" (infinite scroll style)
- Show column headers with sort icons

All text in Russian. Desktop 1440px.
```

---

## Промпт 9: Withdrawal Form

```
Design the Withdrawal Form page for CryptoRebate.

Same sidebar (Выводы is active).

MAIN CONTENT:

Breadcrumbs: "Выводы > Новый вывод"

WITHDRAWAL FORM CARD (centered, max-width 560px, shadow-lg, radius-xl):
- Title: "Вывод средств" (h1, with Wallet icon)

- Balance display block (emerald-50 background, emerald border):
  "Доступно для вывода:"
  "$1,245.00 USDT" (large, bold, 30px)

- Field: "Сумма вывода" (required asterisk)
  Input: "$500" with "USDT" suffix
  Right side: "MAX" button (ghost, small)
  Helper: "Мин: $10 | Макс: $1,245"

- Field: "Сеть" (required)
  Radio buttons styled as cards:
  (●) TRC-20 (Tron) — "Комиссия ~$1" — recommended badge
  ( ) ERC-20 (Ethereum) — "Комиссия ~$5-15"

- Field: "Адрес кошелька" (required)
  Input: "TXyz1234567890abcdefghijklmnop" (monospace font JetBrains Mono)
  Below: "(Использовать сохранённый адрес)" link

- DETAILS SUMMARY (separator line above):
  Сумма:              $500.00
  Комиссия сети:      -$1.00
  Комиссия сервиса:   $0.00
  ─────────────────────────
  Вы получите:        $499.00 USDT (bold, emerald)

- CTA: "Отправить заявку" (full-width, primary gradient)

- Warning: "⚠️ Проверяйте адрес. Отправка на неверный адрес необратима." (small, yellow background)
- Info: "Обработка обычно занимает до 24 часов" (small, gray)

ALSO SHOW — Confirmation Modal (as a second frame):
- Overlay with centered modal (480px):
  Title: "Подтвердите вывод"
  Summary:
    Сумма: $500.00 USDT
    Сеть: TRC-20 (Tron)
    Адрес: TXyz1234...nop
    Вы получите: $499.00 USDT
  Warning: "⚠️ Проверьте адрес. Отправка необратима."
  Buttons: [Подтвердить вывод] (primary) + (Отмена) (ghost)

All text in Russian. Desktop 1440px.
```

---

## Промпт 10: Withdrawal History

```
Design the Withdrawal History page for CryptoRebate.

Same sidebar (Выводы active).

MAIN CONTENT:

Header row:
- Title: "История выводов" (h1)
- CTA: "Новый вывод +" (primary button)

Filter row:
- Status filter chips: (Все) (Ожидает) (Одобрена) (Обработка) (Завершён) (Отклонён) (Ошибка)
- Period dropdown: "Последние 30 дней" ▼

TABLE (full width):
Columns: Дата | Сумма | Сеть | Адрес | Статус

Row 1: 04.02 14:30 | $500.00 | TRC-20 | TXyz...mnop | ⏳ Ожидает (yellow badge)
Row 2: 01.02 10:15 | $300.00 | TRC-20 | TXyz...mnop | ✅ Завершён (green badge)
  → Expandable detail: TX Hash: a1b2c3d4...5678, Комиссия: $1.00, Получено: $299.00
Row 3: 25.01 18:45 | $200.00 | ERC-20 | 0xAb12...3456 | ✅ Завершён
Row 4: 20.01 09:00 | $100.00 | TRC-20 | TXyz...mnop | ❌ Отклонён (red badge)
  → Expandable: Причина: "Невалидный адрес кошелька"
Row 5: 15.01 12:20 | $450.00 | TRC-20 | TXyz...mnop | 🔄 Обработка (blue badge)
Row 6: 10.01 08:00 | $75.00  | TRC-20 | TXyz...mnop | ✅ Завершён
Row 7: 05.01 16:30 | $150.00 | TRC-20 | TXyz...mnop | ✅ Завершён

Show one row expanded to reveal detail info.
Address column: truncated, monospace JetBrains Mono.
Pagination: < 1 2 3 ... 10 >

All text in Russian. Desktop 1440px.
```

---

## Промпт 11: Settings Page

```
Design the Settings page for CryptoRebate with 3 tabs.

Same sidebar (Настройки active).

MAIN CONTENT:

Title: "Настройки" (h1)

Tab bar: [Профиль] [Кошелёк] [Уведомления] — Профиль active

SHOW ALL 3 TABS as separate variants:

TAB 1 — Профиль:
- Card (max-width 640px):
  Field: "Email" — "alex@trader.com" — readonly, with green checkmark "Подтверждён"
  Field: "Telegram" — "@alex_trader" — with Telegram icon + "(Отвязать)" link
  Field: "Язык интерфейса" — dropdown [Русский ▼]
  Field: "Часовой пояс" — dropdown [UTC+3 (Москва) ▼]
  CTA: "Сохранить изменения" (primary, disabled state since no changes)

TAB 2 — Кошелёк:
- Card:
  Title: "Кошелёк по умолчанию (USDT)"
  Field: "Сеть" — dropdown [TRC-20 (Tron) ▼]
  Field: "Адрес" — input with wallet address in monospace
  Info: "Смена кошелька: cooldown 48 часов после изменения"
  CTA: "Сохранить кошелёк"

TAB 3 — Уведомления:
- Card:
  Section "Каналы уведомлений":
    [✓] Email
    [✓] Telegram
  Section "Типы уведомлений":
    [✓] Начисление rebate
    [✓] Вывод обработан
    [✓] Вывод завершён
    [ ] Еженедельный отчёт
    [ ] Новости и акции
  CTA: "Сохранить настройки"

All text in Russian. Desktop 1440px.
```

---

## Промпт 12: Admin Dashboard

```
Design the Admin Dashboard for CryptoRebate admin panel.

LAYOUT: Admin sidebar (260px, darker shade #0F172A) + Main content.

ADMIN SIDEBAR:
- Top: Logo "CryptoRebate" + badge "Admin"
- Nav items (white text, Lucide icons):
  • 📊 Дашборд (ACTIVE)
  • 👥 Пользователи
  • 🏢 Биржи
  • 💳 Выплаты
  • 📈 Отчёты
  • ⚙️ Настройки
  — divider —
  • 🚪 Выход
- Active item: white bg with primary blue text

MAIN CONTENT:

Row 1 — Title: "Панель администратора" (h1)

Row 2 — KPI Cards (4 cards, bento grid):
Card 1: "Активных трейдеров" — "847" — "↑ +12% за 30 дней" (green) — sparkline
Card 2: "Торговый объём (30д)" — "$2.4M" — "↑ +8% vs прошлый месяц" — sparkline
Card 3: "Ожидает выплаты" — "$15,400" — "23 заявки" — yellow accent — clickable
Card 4: "Доход сервиса (30д)" — "$8,200" — "Маржа: 34%" — emerald accent

Row 3 — Two charts side by side:
Chart 1 (60% width): "Объём торгов по биржам"
  Pie/donut chart:
  MEXC 35% (blue), Bitget 22% (green), Bybit 18% (purple), BingX 12% (orange), OKX 8% (cyan), Прочие 5% (gray)
  Legend below with actual dollar amounts

Chart 2 (40% width): "Новые регистрации"
  Line chart, last 30 days
  Shows daily registration count (5-15 per day range)
  Total: "+342 за 30 дней"

Row 4 — Activity Feed:
- Title: "Последние события"
- Realtime-style feed with timestamps:
  • 👤 Новый трейдер: user_892 (TG) — 2 мин. назад
  • 💳 Заявка на вывод $500 от user_847 — 15 мин. назад
  • ⚠️ MEXC API: timeout при синхронизации — 1 час назад (RED highlight)
  • ✅ Выплата $300 USDT → TXyz...abc завершена — 2 часа назад
  • 👤 Новый трейдер: user_891 (Email) — 3 часа назад
  • 💰 Начисление rebate: $1,245 (MEXC sync) — 4 часа назад
  • ✅ Выплата $150 USDT → TXyz...def завершена — 5 часов назад

The admin panel should feel professional, data-dense, with a serious dark sidebar.
All text in Russian. Desktop 1440px.
```

---

## Промпт 13: Admin Exchanges Management

```
Design the Admin Exchanges management page for CryptoRebate.

Same admin sidebar (Биржи active).

MAIN CONTENT:

Header: "Управление биржами" (h1) + search input + "(Добавить биржу)" button (ghost)

TABLE (full width, with rich data):
Columns: Биржа | Статус | Rebate биржи | Доля трейдеру | Маржа | Активных трейдеров | Объём 30д | Действия

Row 1: [MEXC logo] MEXC | 🟢 Активна | 50% | 40% | 10% | 312 | $850K | [Редактировать] [Отключить]
Row 2: [Bitget] Bitget | 🟢 Активна | 45% | 35% | 10% | 245 | $620K | [Ред.] [Откл.]
Row 3: [BingX] BingX | 🟢 Активна | 40% | 30% | 10% | 189 | $340K | [Ред.] [Откл.]
Row 4: [Bybit] Bybit | 🟢 Активна | 40% | 30% | 10% | 278 | $520K | [Ред.] [Откл.]
Row 5: [OKX] OKX | 🟢 Активна | 35% | 25% | 10% | 156 | $280K | [Ред.] [Откл.]
Row 6: [Weex] Weex | 🔴 Выключена | 40% | 30% | 10% | 0 | $0 | [Ред.] [Активир.]
Row 7: [Binance] Binance | 🟢 Активна | 41% | 30% | 11% | 198 | $410K | [Ред.] [Откл.]
Row 8-11: ... similar rows for Bitmart, KuCoin, HTX, BloFin

Disabled row (Weex) should appear grayed out.

ALSO SHOW — Edit Modal (separate frame):
Modal title: "Настройки: MEXC"
Toggle: Статус [ON/OFF]
Fields:
  "Rebate от биржи (%)" — [50]
  "Доля трейдеру (%)" — [40]
  Auto-calculated: "Маржа сервиса: 10%"
  "Мин. сумма вывода ($)" — [10]
  "Период начисления" — [Ежедневно ▼]
  "API ключ" — [•••••••••••] with eye toggle
  "API secret" — [•••••••••••] with eye toggle
  "Реферальная ссылка (шаблон)" — [https://mexc.com/register?ref={CODE}]
Buttons: [Сохранить] + (Отмена)

"Показано 11 из 11 бирж" at bottom.
All text in Russian. Desktop 1440px.
```

---

## Промпт 14: Admin Payouts Queue

```
Design the Admin Payouts Queue page for CryptoRebate.

Same admin sidebar (Выплаты active).

MAIN CONTENT:

Header:
- Title: "Очередь выплат" (h1)
- Summary: "Ожидает: 23 заявки на $15,400"
- Bulk action buttons (right): [Одобрить выбранные] (primary) + (Отклонить выбранные) (danger ghost)

Filter chips: (Все) (Ожидает — 23) (Одобрено — 5) (Обработка — 3) (Завершено — 312) (Отклонено — 8) (Ошибка — 2)

TABLE with checkboxes:
[ ] Select all checkbox in header

Columns: ☐ | # | Трейдер | Сумма | Сеть | Адрес | Создана | Действия

Row 1: ☐ | 1 | user_847 (alex@trader.com) | $500.00 | TRC-20 | TXyz...mnop | 04.02 14:30 | [✓ Одобрить] [✗ Отклонить]
Row 2: ☐ | 2 | user_123 (maria@mail.ru) | $300.00 | TRC-20 | TXyz...qrst | 04.02 12:15 | [✓] [✗]
Row 3: ☐ | 3 | user_456 (@tg_user456) | $1,200.00 | ERC-20 | 0xAb12...7890 | 04.02 10:00 | [✓] [✗]
Row 4: ☐ | 4 | user_789 (ivan@crypto.com) | $50.00 | TRC-20 | TXyz...uvwx | 03.02 22:45 | [✓] [✗]
Row 5-8: ... more pending rows

Pagination: < 1 2 3 ... 5 >

ALSO SHOW — Approve Modal (separate frame):
Modal title: "Одобрить выплату"
Details:
  Трейдер: user_847 (alex@trader.com)
  Сумма: $500.00 USDT
  Сеть: TRC-20
  Адрес: TXyz1234567890abcdefghijklmnop (full, monospace)
  ---
  Баланс трейдера: $1,245.00
  Торговый объём (30д): $125,400
  Registered: 15.01.2026
Buttons: [Одобрить и отправить] (primary green) + (Отмена)

AND — Reject Modal (separate frame):
Modal title: "Отклонить заявку"
Details:
  Трейдер: user_847 | Сумма: $500.00 USDT
  Dropdown: "Причина отклонения" — [Невалидный адрес кошелька ▼]
  Textarea: "Комментарий" — optional
Buttons: [Отклонить] (danger red) + (Отмена)

All text in Russian. Desktop 1440px.
```

---

## Промпт 15: Admin Users

```
Design the Admin Users management page for CryptoRebate.

Same admin sidebar (Пользователи active).

MAIN CONTENT:

Header:
- Title: "Пользователи" (h1)
- Stats: "Всего: 1,247 | Активных (30д): 847"

Search bar: "Поиск по email, Telegram или ID..." (full width input with Search icon)

Filter row:
- "Статус": dropdown [Все ▼]
- "Биржа": dropdown [Все ▼]
- "Период регистрации": dropdown [Все ▼]

TABLE:
Columns: # | ID | Email/Telegram | Дата рег. | Активных бирж | Объём торгов | Rebate | Действия

Row 1: 1 | #847 | alex@trader.com / @alex_trader | 15.01.2026 | 5 бирж | $125K | $1,850 | [Подробнее]
Row 2: 2 | #123 | maria@mail.ru | 20.01.2026 | 2 биржи | $12K | $180 | [Подробнее]
Row 3: 3 | #456 | @tg_user456 | 25.01.2026 | 0 бирж — 🔴 Неактивен | $0 | $0 | [Подробнее]
Row 4: 4 | #789 | ivan@crypto.com / @ivan_btc | 28.01.2026 | 3 биржи | $45K | $520 | [Подробнее]
Row 5-10: ... more rows with varied data

Pagination: < 1 2 3 ... 50 >

ALSO SHOW — User Detail Sidebar (right panel, 400px, sliding from right):
Title: "Трейдер #847"

PROFILE:
  Email: alex@trader.com
  Telegram: @alex_trader
  Регистрация: 15.01.2026
  Последний вход: 04.02.2026, 14:30
  Статус: 🟢 Активен

EXCHANGES TABLE (mini):
  | Биржа | Статус | Объём | Rebate |
  | MEXC | 🟢 | $85K | $1,200 |
  | Bitget | 🟢 | $25K | $350 |
  | Bybit | 🟢 | $12K | $180 |
  | BingX | 🟡 | $3K | $45 |
  | OKX | 🟢 | $0.4K | $75 |

WITHDRAWALS SUMMARY:
  Всего выведено: $1,520
  Последний вывод: 01.02.2026, $300
  Текущий баланс: $1,245

ACTIONS:
  (Изменить доли) (Заблокировать) (Написать)

The detail sidebar overlays the right part of the table with a slight shadow.
All text in Russian. Desktop 1440px.
```

---

## Промпт 16: Mobile Responsive — Dashboard + Exchanges

```
Design the MOBILE version (375px width) of two CryptoRebate screens:

SCREEN 1 — Mobile Dashboard:
- Top bar: hamburger menu (left) + "CryptoRebate" logo (center) + avatar icon (right)
- KPI cards: horizontal scroll (2 visible at a time, swipeable)
  Card 1: "Баланс $1,245" with sparkline
  Card 2: "Заработано $4,320"
  Card 3: "5 бирж" (off-screen, swipe right)
  Card 4: "Ожидает $320"
- Chart: full-width area chart (simplified, no legend)
- Recent accruals as cards (vertical stack):
  +---------------------------+
  | [MEXC logo] MEXC  04.02  |
  | Фьючерсы       +$32.50   |
  | $12,340         ✅        |
  +---------------------------+
  +---------------------------+
  | [Bitget] Bitget   04.02  |
  | Спот            +$18.20   |
  | $8,150          ✅        |
  +---------------------------+

- Bottom navigation bar (fixed, 56px):
  [🏠 Дашборд] [🏢 Биржи] [💰 Выводы] [≡ Ещё]
  Дашборд is active (primary blue)

SCREEN 2 — Mobile Exchanges:
- Top bar same
- Search: full-width input
- Filter chips: horizontal scroll (Все | Подключённые | Не подключённые)
- Exchange cards (full-width, stacked):
  +-------------------------------+
  | [MEXC logo]  MEXC             |
  | Cashback: до 40%              |
  | 🟢 Подключена                 |
  | Объём: $85K | Rebate: $1,200  |
  | [Скопировать ссылку]          |
  | (Подробнее →)                 |
  +-------------------------------+
  +-------------------------------+
  | [Weex logo]  Weex             |
  | Cashback: до 25%              |
  | 🟡 Ожидание                   |
  | [Скопировать ссылку]          |
  +-------------------------------+
  +-------------------------------+
  | [Binance logo]  Binance       |
  | Cashback: до 20%              |
  | ⚪ Не подключена              |
  | [Подключить]                  |
  +-------------------------------+

- Same bottom navigation

Both screens should feel native-app quality with proper touch targets (min 44px).
All text in Russian. Show iPhone 14/15 frame.
```

---

## Промпт 17: Toast Notifications + States

```
Design a component sheet showing all notification and state patterns for CryptoRebate:

SECTION 1 — TOAST NOTIFICATIONS (top-right position):
4 variants:
  Success (green): "✅ Ссылка скопирована!" — auto-dismiss icon, 2s
  Success (green): "✅ Заявка на вывод создана" — 3s
  Error (red): "❌ Не удалось загрузить данные. Попробуйте снова." — dismiss button, 8s
  Warning (yellow): "⚠️ Синхронизация с MEXC не удалась. Retry через 5 мин." — 5s
  Info (blue): "ℹ️ Сессия истекла. Войдите заново." — persistent until action

Each toast: pill shape, shadow-xl, icon + text + close X button.
Position: top-right, stacked vertically with 8px gap.

SECTION 2 — STATUS BADGES:
  🟢 Подключена (green bg, green text)
  🟡 Ожидание (yellow bg, yellow text)
  ⚪ Не подключена (gray bg, gray text)
  🔵 Обработка (blue bg, blue text)
  🔴 Отклонён (red bg, red text)
  🔴 Ошибка (red bg, red text)
  ✅ Завершён (green bg, green text)
  ⏳ Расчёт (yellow bg, yellow text)

SECTION 3 — EMPTY STATES (3 examples):
  1. Dashboard (new user): illustration + "Добро пожаловать!" + "Подключите биржу и начните получать cashback" + [Подключить биржу →]
  2. History (no data): illustration + "Нет начислений" + "Начисления появятся после первой торговли" + [Как это работает? →]
  3. Search (no results): illustration + "Ничего не найдено" + "Попробуйте изменить запрос" + [Сбросить фильтры]

SECTION 4 — LOADING STATES:
  1. Skeleton: KPI card skeleton (pulsing gray blocks)
  2. Skeleton: Table skeleton (5 rows of pulsing bars)
  3. Button loading: "Обработка..." with spinner
  4. Page loading: centered spinner with "Загрузка..."

SECTION 5 — ERROR PAGES:
  404: Title "Страница не найдена" + "Такой страницы нет или она была перемещена" + [На главную →]
  500: Title "Что-то пошло не так" + "Мы уже разбираемся" + [Обновить] + (На главную →)
  Offline: Title "Нет соединения" + "Проверьте подключение к интернету" + [Попробовать снова]

Layout this as a component reference sheet, organized neatly.
All text in Russian.
```

---

## Инструкция по генерации

### Порядок генерации

1. **Промпт 1** — Landing Page (главная, описывает весь проект)
2. **Промпт 2** — Registration
3. **Промпт 3** — Login
4. **Промпт 4** — Onboarding (5 шагов)
5. **Промпт 5** — Trader Dashboard (с данными)
6. **Промпт 6** — Dashboard Empty State
7. **Промпт 7** — Exchanges Page (Grid view)
8. **Промпт 8** — Exchange Detail (MEXC)
9. **Промпт 9** — Withdrawal Form + Confirmation Modal
10. **Промпт 10** — Withdrawal History
11. **Промпт 11** — Settings (3 tabs)
12. **Промпт 12** — Admin Dashboard
13. **Промпт 13** — Admin Exchanges + Edit Modal
14. **Промпт 14** — Admin Payouts Queue + Approve/Reject Modals
15. **Промпт 15** — Admin Users + Detail Sidebar
16. **Промпт 16** — Mobile versions (Dashboard + Exchanges)
17. **Промпт 17** — Components & States reference

### Прототипирование (Prototyping)

После генерации всех экранов, связать их интерактивными переходами:

```
Landing → [Начать] → Register
Landing → [Войти] → Login
Register → [Зарегистрироваться] → Dashboard (Onboarding)
Login → [Войти] → Dashboard
Dashboard → Sidebar links → Exchanges, Withdrawals, History, Settings
Dashboard → [Подключить биржу] → Exchanges
Exchanges → [Подробнее] → Exchange Detail
Dashboard → [Вывести] → Withdrawal Form
Withdrawal Form → [Отправить] → Confirmation Modal → Withdrawal History
Settings → Tab switches
Admin Dashboard → Sidebar links → Admin pages
Admin Payouts → [Одобрить] → Approve Modal
Admin Payouts → [Отклонить] → Reject Modal
Admin Exchanges → [Редактировать] → Edit Modal
Admin Users → [Подробнее] → Detail Sidebar
```

### Моковые данные

Все данные реалистичны и консистентны между экранами:
- Трейдер "Alex": баланс $1,245, заработал $4,320, 5 бирж, основная MEXC
- Биржи: MEXC (40%), Bitget (35%), Bybit (30%), BingX (30%), OKX (20%) — подключены
- Weex (25%) — ожидание
- Binance, Bitmart, KuCoin, HTX, BloFin — не подключены
- Admin: 847 активных трейдеров, $2.4M объём, 23 заявки на $15,400

---

*Документ создан: Orchestrator Agent (UX + UI + Content) | Дата: 2026-02-04*
