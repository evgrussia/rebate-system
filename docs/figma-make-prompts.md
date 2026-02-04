# Figma Make Prompts — CryptoRebate Full Concept

> Промпты для генерации полного концепт-прототипа CryptoRebate в Figma Make.
> Каждый промпт — отдельный экран. Генерировать последовательно.

---

## Общие инструкции для всех экранов

Перед генерацией каждого экрана добавляй этот контекст:

```
Design system context for ALL screens:

Brand: CryptoRebate — crypto exchange rebate/cashback aggregator service.
Style: Ultra-modern 2026 fintech/crypto SaaS. Clean, data-rich, professional.
Design trends 2026: glassmorphism subtle accents, bento grid layouts, large typography hierarchy, micro-gradients, soft shadows, 3D subtle icons, generous whitespace, fluid rounded corners (12-16px), dark/light contrast sections.

Colors:
- Primary: Deep Blue #1E40AF (trust, finance)
- Secondary: Emerald Green #059669 (money, profit, success)
- Background: #FFFFFF (main), #F9FAFB (secondary), #F3F4F6 (cards stripe)
- Text: #111827 (headings), #374151 (body), #6B7280 (secondary), #9CA3AF (placeholder)
- Borders: #E5E7EB
- Success: #059669, Warning: #D97706, Error: #DC2626, Info: #2563EB
- Crypto accents: Bitcoin #F7931A, Ethereum #627EEA, USDT #26A17B, BNB #F3BA2F, TON #0098EA

Typography:
- UI: Inter (all weights 400-700)
- Monospace: JetBrains Mono (for crypto addresses, hashes, amounts)
- Hero: 36-48px bold, H1: 30px bold, H2: 24px semibold, H3: 20px semibold
- Body: 16px regular, Small: 14px, XS: 12px

Spacing: 4px base grid. Card padding: 24px. Section gap: 32-48px.
Border radius: buttons 8px, cards 12px, modals 16px, avatars full circle.
Shadows: cards — 0 4px 6px rgba(0,0,0,0.1), modals — 0 10px 15px rgba(0,0,0,0.1).
Icons: Lucide icon style (thin stroke, rounded caps, 20px default).

Language: Russian (primary interface). All UI text in Russian.
Grid: 12 columns, max-width 1280px, gutter 24px.
```

---

## PROMPT 1: Landing Page — Hero + Header

```
Design a stunning 2026-style landing page for CryptoRebate — a crypto exchange rebate/cashback aggregator.

PAGE STRUCTURE — Full scrollable landing page with these sections:

=== HEADER (sticky, top) ===
- Left: Logo "CryptoRebate" with a stylized "C" icon mark combining a coin and return arrow, colored Deep Blue #1E40AF
- Center nav links: "Как работает" | "Биржи" | "Калькулятор" | "FAQ"
- Right: ghost button "Войти", primary button "Начать" (blue #1E40AF background, white text, 8px radius)
- Header: white background, subtle bottom border #E5E7EB, height 64px
- On scroll: add subtle shadow and backdrop-blur effect

=== HERO SECTION (90vh height) ===
- Large headline (48px bold Inter): "Получай cashback с каждой сделки на 11 криптобиржах"
- Subheading (18px regular, #6B7280): "Зарегистрируйся один раз — получай до 40% возврата торговых комиссий на Bybit, Binance, OKX, MEXC и ещё 7 биржах. Вывод в USDT."
- Two buttons: Primary "Получить cashback →" (large, blue #1E40AF, white text, 48px height), Secondary "Узнать больше ↓" (ghost, #374151 text)
- Three trust badges below buttons in a row: "✓ Без KYC" | "✓ 11 бирж" | "✓ Вывод в USDT" — each with a checkmark icon, #059669 colored
- Right side or background: subtle 3D illustration of floating crypto coins (BTC, ETH, USDT) with soft glow effects and gradient mesh background transitioning from light blue to white
- Decorative: subtle grid pattern or dot matrix in background with very low opacity

=== HOW IT WORKS (3 steps) ===
- Section title: "Как это работает" (24px semibold, centered)
- Subtitle: "Три простых шага до cashback" (16px, #6B7280)
- 3 cards in a row (bento grid style), each with:
  Card 1: Icon (link/chain), number "1", title "Зарегистрируйтесь", description "Создайте аккаунт за 30 секунд. Через email или Telegram."
  Card 2: Icon (exchange/building), number "2", title "Подключите биржу", description "Перейдите на биржу по нашей реферальной ссылке и начните торговать."
  Card 3: Icon (wallet/coins), number "3", title "Получайте cashback", description "Rebate начисляется автоматически. Выводите в USDT на ваш кошелёк."
- Cards: white background, 12px radius, subtle shadow, 24px padding, green accent line on top of each card
- Connecting line or arrow between cards (subtle dashed line)

=== SUPPORTED EXCHANGES ===
- Section title: "11 бирж — одна платформа" (24px semibold, centered)
- Subtitle: "Все биржи доступны сразу после регистрации"
- Grid of 11 exchange logos with names in a flowing row or 4+4+3 grid:
  MEXC (rate: до 50%), Bitget (до 50%), BingX (до 45%), Weex (до 40%), Bybit (до 40%), Binance (до 40%), Bitmart (до 50%), OKX (до 40%), KuCoin (до 40%), HTX (до 50%), BloFin (до 40%)
- Each exchange: logo placeholder (rounded square 48x48, brand color), name below, small badge "до X%" in green
- On hover concept: slight scale up and shadow increase

=== REBATE CALCULATOR ===
- Section title: "Калькулятор cashback" (24px semibold, centered)
- Subtitle: "Узнайте, сколько вы можете экономить каждый месяц"
- Interactive calculator card (large, centered, elevated shadow, 16px radius):
  - Input: "Ваш месячный объём торгов" with placeholder "$50,000" and dollar sign prefix
  - Dropdown: "Биржа" with value "MEXC" shown
  - Slider bar below the input (green gradient track)
  - Results block (green-tinted background #ECFDF5, 12px radius):
    - "Ваш cashback:" in large green text
    - "~$150 / мес" (30px bold, #059669)
    - "~$1,800 / год" (18px, #047857)
  - CTA button: "Начать получать cashback →" (full width, blue)

=== BENEFITS SECTION ===
- Section title: "Почему CryptoRebate" (24px semibold, centered)
- 2x3 bento grid of benefit cards:
  1. Icon: shield — "Без KYC" / "Мы не требуем верификацию — идентификация через биржу"
  2. Icon: zap — "Автоматические начисления" / "Rebate рассчитывается и начисляется без вашего участия"
  3. Icon: globe — "Глобальный сервис" / "Работаем по всему миру — СНГ, Азия, Европа, Латинская Америка"
  4. Icon: bar-chart — "Прозрачная статистика" / "Видите точные данные: объёмы, комиссии, начисленный rebate"
  5. Icon: smartphone — "Web + Telegram" / "Полноценный личный кабинет в браузере и в Telegram-боте"
  6. Icon: trending-up — "До 40% возврата" / "Возвращаем максимальную долю партнёрских комиссий"
- Cards: white, 12px radius, icon at top in a colored circle (48px), title bold, description #6B7280

=== FUTURE FEATURES PREVIEW ===
- Section title: "Скоро в CryptoRebate" (24px semibold, centered)
- Subtitle: "Мы постоянно развиваемся"
- Horizontal scroll or row of feature preview cards with "Скоро" badge:
  1. "📱 Мобильное приложение" / "iOS и Android"
  2. "📊 Расширенная аналитика" / "Графики доходности, сравнение бирж"
  3. "⭐ VIP-программа" / "Увеличенные ставки для крупных трейдеров"
  4. "🔌 API для партнёров" / "Интеграция CryptoRebate в ваши сервисы"
  5. "🤖 AI-рекомендации" / "Подбор оптимальной биржи и стратегии"
- Each card: light gray background, "Скоро" badge in top-right (amber/yellow), subtle dashed border

=== TESTIMONIALS ===
- Section title: "Трейдеры уже экономят" (24px semibold, centered)
- 3 testimonial cards in a row:
  Card 1: Avatar placeholder, "Экономлю $200 в месяц на комиссиях. Жалею что не узнал раньше." — Алексей, MEXC + Bybit, ★★★★★
  Card 2: Avatar placeholder, "Простое подключение, всё прозрачно. Вижу каждую копейку." — Мария, Bybit, ★★★★★
  Card 3: Avatar placeholder, "Вывожу каждую неделю. Комиссия минимальная, всё моментально." — Дмитрий, OKX + BingX, ★★★★☆
- Cards: white, 12px radius, shadow, quote marks icon, star rating in gold #F59E0B

=== HOW REBATE WORKS (detailed) ===
- Section title: "Как рассчитывается rebate" (24px semibold, centered)
- Visual formula explanation:
  - Step diagram showing: "Вы торгуете" → "Биржа берёт комиссию" → "Биржа делится комиссией с нами" → "Мы возвращаем вам до 80%"
  - Example calculation card:
    "Объём сделки: $10,000"
    "Комиссия биржи: 0.1% = $10"
    "Партнёрская комиссия: 50% = $5"
    "Ваш rebate (60% доли): $3.00"
  - Styled as a flow/pipeline with arrows, using brand colors

=== FAQ ===
- Section title: "Частые вопросы" (24px semibold, centered)
- Accordion list (6 items, first expanded):
  1. "Что такое rebate / cashback?" — expanded with answer text
  2. "Как начать получать cashback?"
  3. "Какие биржи поддерживаются?"
  4. "Как вывести заработанное?"
  5. "Есть ли минимальная сумма вывода?"
  6. "Это легально?"
- Style: clean accordion with chevron icons, #F9FAFB background on expanded, 8px radius

=== FINAL CTA ===
- Large centered block with gradient background (blue to dark blue):
  - "Готовы экономить на комиссиях?" (30px bold, white)
  - "Присоединяйтесь к тысячам трейдеров" (16px, white/80%)
  - Big button: "Зарегистрироваться бесплатно →" (white background, blue text, 48px height, 8px radius)
  - Below: "Бесплатно. Навсегда. Без скрытых платежей."

=== FOOTER ===
- Dark background (#111827)
- Logo "CryptoRebate" in white
- 4 columns: Продукт (Как работает, Биржи, Калькулятор, FAQ), Компания (О нас, Блог, Контакты), Юридическое (Политика конфиденциальности, Условия использования), Социальные сети (Telegram, Twitter/X, Discord)
- Bottom: "© 2026 CryptoRebate. Все права защищены."
- Subtle separator line above copyright

Desktop 1280px wide. Modern, premium feel. Lots of whitespace. Smooth section transitions.
```

---

## PROMPT 2: Registration Page

```
Design a registration page for CryptoRebate crypto cashback platform.

URL: /register
Layout: Centered card on a subtle gradient background (very light blue to white).

=== LEFT SIDE (or full-width on mobile) — Registration Form Card ===
Card: white background, 16px radius, large shadow, max-width 480px, centered.
Padding: 40px.

Content:
- Logo "CryptoRebate" at top center (small, 32px height)
- Title: "Зарегистрироваться" (24px semibold, centered)
- Subtitle: "Создайте аккаунт и начните получать cashback" (14px, #6B7280, centered)

- Divider with two auth method tabs:
  Tab 1 (active): "Email" — with envelope icon
  Tab 2: "Telegram" — with Telegram icon
  Tabs: underline style, active = blue #1E40AF

- Email tab content (shown):
  Field 1: Label "Email", input with placeholder "name@example.com", mail icon left
  Field 2: Label "Пароль", input type password, eye icon right to toggle visibility
  Helper text: "Минимум 8 символов, 1 цифра, 1 буква" (12px, #9CA3AF)
  Field 3: Label "Повторите пароль", input type password

  Checkbox: "Я принимаю условия использования и политику конфиденциальности" (14px, with links in blue)

  Button: "Зарегистрироваться" — full width, height 48px, blue #1E40AF, white text, 8px radius

  Below button: "Уже есть аккаунт? Войти" — link text, "Войти" in blue

- Telegram tab concept (shown as alternative):
  Large Telegram icon (48px)
  Text: "Войдите через Telegram для быстрой регистрации"
  Button: "Войти через Telegram" — Telegram blue (#0088CC), white text, Telegram icon left

=== VALIDATION STATES (show inline) ===
- Email field with error: red border, text below "Этот email уже зарегистрирован. Войти?" with "Войти" as link
- Password field with strength indicator: colored bar below (red → yellow → green)
- Password mismatch: red border on confirm field, text "Пароли не совпадают"

=== DECORATIVE ===
- Right side or background: subtle illustration of growing chart/coins
- Trust badges below card: "🔒 Данные зашифрованы" | "✓ Без KYC" | "11 бирж"

Desktop 1280px. Clean, trustworthy, minimal. Inter font. The form should feel secure and professional — this is a financial service.
```

---

## PROMPT 3: Login Page

```
Design a login page for CryptoRebate crypto cashback platform.

URL: /login
Layout: Same style as registration — centered card on light gradient background.

Card: white, 16px radius, shadow, max-width 440px, padding 40px.

Content:
- Logo "CryptoRebate" at top center
- Title: "Войти" (24px semibold)
- Subtitle: "Рады видеть вас снова" (14px, #6B7280)

- Auth method tabs: "Email" (active) | "Telegram"

- Email form:
  Field 1: "Email" — input with placeholder "name@example.com"
  Field 2: "Пароль" — password input with eye toggle
  Right-aligned link below password: "Забыли пароль?" (#2563EB, 14px)

  Button: "Войти" — full width, blue #1E40AF, 48px height

  Below: "Нет аккаунта? Зарегистрироваться" — link

- Error state shown:
  Alert banner at top of form (red-tinted background #FEF2F2, red border-left):
  "Неверный email или пароль"

- Telegram tab: same as registration page

Desktop 1280px. Minimal, clean, professional.
```

---

## PROMPT 4: Onboarding Flow (5 steps)

```
Design a 5-step onboarding wizard for CryptoRebate, shown as a modal overlay on the dashboard.

Background: dashboard (blurred/dimmed), modal overlay in center.
Modal: white, 16px radius, max-width 560px, padding 32px, large shadow.

=== Step indicator at top ===
Progress dots: 5 circles, filled for completed steps (blue), current step larger, future steps gray outline.
Step 1: filled blue, Step 2-5: gray.

=== STEP 1: Welcome ===
- Large friendly illustration (abstract, celebrating figure or rocket)
- Title: "Добро пожаловать в CryptoRebate!" (24px bold)
- Subtitle: "Начните получать cashback с торговых комиссий на 11 биржах" (16px, #6B7280)
- Buttons: Primary "Начать →" (blue, full width), Ghost "Пропустить" (text only, gray, below)

=== STEP 2: How it works ===
Step 2 active on progress dots.
- Title: "Как это работает" (24px semibold)
- 3 vertical steps with icons and connectors:
  🔗 "Подключитесь" — "Скопируйте реферальную ссылку и зарегистрируйтесь на бирже"
  📈 "Торгуйте" — "Торгуйте как обычно — мы автоматически считаем ваш rebate"
  💰 "Получайте" — "Выводите cashback в криптовалюте на ваш кошелёк"
- Each step: icon in colored circle (48px), title bold, description #6B7280
- Vertical line connecting the three steps
- Button: "Далее →"

=== STEP 3: Choose exchange ===
Step 3 active.
- Title: "Выберите вашу первую биржу" (24px semibold)
- Subtitle: "Вы сможете подключить все 11 позже"
- Grid of 11 exchange cards (3 columns):
  Each: logo (40x40 rounded square), exchange name, "до X% cashback" in green badge
  Selectable: click adds blue border highlight and checkmark
  Show MEXC, Bitget, BingX, Weex, Bybit, Binance, Bitmart, OKX, KuCoin, HTX, BloFin
- "Bybit" shown as selected (blue border, checkmark overlay)
- Button: "Далее →"

=== STEP 4: Copy link ===
Step 4 active.
- Title: "Скопируйте ссылку" (24px semibold)
- Subtitle: "Перейдите по ней и зарегистрируйтесь на Bybit"
- Large referral link display box:
  Background: #F3F4F6, 8px radius, padding 16px
  Link text in JetBrains Mono: "https://www.bybit.com/invite?ref=CRYPT0R3B8"
  Copy button right-aligned: icon + "Копировать"
  After copy state: green checkmark + "Скопировано!"
- Instruction text: "1. Скопируйте ссылку выше 2. Перейдите на биржу 3. Зарегистрируйтесь по этой ссылке"
- Button: "Я зарегистрировался →"

=== STEP 5: Done ===
Step 5 active (all dots filled).
- Celebration illustration (confetti, check mark, trophy)
- Title: "Отлично! Вы всё настроили" (24px bold)
- Subtitle: "Начинайте торговать — мы будем считать ваш cashback автоматически" (16px, #6B7280)
- Stats preview: "Ваша биржа: Bybit" | "Ставка: до 40% cashback"
- Button: "Перейти в дашборд →" (blue, full width, 48px)

Desktop 1280px. Friendly, encouraging, clear progress.
```

---

## PROMPT 5: Trader Dashboard (Main)

```
Design the main trader dashboard for CryptoRebate — a crypto rebate/cashback platform.

URL: /dashboard
Layout: Top navigation bar + main content area. No sidebar for trader (sidebar is admin only).

=== TOP NAVIGATION BAR ===
Height: 64px, white background, bottom border #E5E7EB, sticky.
- Left: Logo "CryptoRebate" (clickable, goes to dashboard)
- Center: Nav links with icons —
  "Дашборд" (LayoutDashboard icon, ACTIVE — blue text, blue underline 2px),
  "Биржи" (Building2 icon),
  "Выводы" (Wallet icon),
  "История" (Clock icon)
- Right: User avatar circle (32px, initials "АТ" on blue background) + dropdown chevron
  Dropdown shown: "Настройки", divider, "Выйти из аккаунта" (red text)

=== MAIN CONTENT ===
Max-width 1280px, centered, padding 32px top, 24px sides.

--- KPI CARDS ROW (4 cards) ---
4 cards in a row, equal width, 12px radius, white bg, subtle shadow, padding 24px:

Card 1: Icon (Wallet, blue circle bg), Label "Доступный баланс", Value "$1,247.83" (30px bold, #111827), Trend "↑ 12.4% за месяц" (green #059669, 14px), Mini sparkline chart (green line, 7 points)

Card 2: Icon (TrendingUp, green circle bg), Label "Всего заработано", Value "$4,582.19" (30px bold), Trend "↑ 8.2%", Sparkline (green)

Card 3: Icon (Building2, blue circle bg), Label "Активных бирж", Value "5 из 11" (30px bold), Trend: no trend, Small text: "MEXC, Bybit, OKX, BingX, Weex"

Card 4: Icon (Clock, amber circle bg), Label "В ожидании", Value "$87.34" (30px bold, #D97706), Trend: no trend, Small text: "Расчёт в течение 24ч"

--- CHART SECTION ---
White card, 12px radius, shadow, padding 24px.
Header: "Динамика rebate" (18px semibold) + Period selector pills right-aligned: [7д] [30д] [90д] [Всё] — "30д" active (blue bg, white text, others gray bg)
Chart: Line chart showing rebate earnings over 30 days.
- X axis: dates (Feb 1 — Feb 4, with ticks)
- Y axis: dollar amounts ($0 — $80)
- Line: blue #1E40AF gradient fill below
- Hover tooltip shown on one point: "3 фев 2026 — $67.42"
- Green area fill under the line with low opacity

--- RECENT ACCRUALS TABLE ---
White card, 12px radius, shadow, padding 24px.
Header row: "Последние начисления" (18px semibold) left + "Показать все →" link right (blue text)

Table with columns: Дата | Биржа | Объём торгов | Комиссия | Rebate | Статус

5 rows of mock data:
Row 1: "03.02.2026" | [Bybit logo mini] "Bybit" | "$12,340.00" | "$12.34" | "$4.32" (green bold) | ✅ Badge "Начислен" (green bg)
Row 2: "03.02.2026" | [BingX logo] "BingX" | "$8,150.00" | "$8.15" | "$2.93" (green) | ✅ "Начислен"
Row 3: "02.02.2026" | [OKX logo] "OKX" | "$5,200.00" | "$5.20" | "$1.87" (green) | ✅ "Начислен"
Row 4: "02.02.2026" | [MEXC logo] "MEXC" | "$15,780.00" | "$15.78" | "$7.89" (green) | ✅ "Начислен"
Row 5: "01.02.2026" | [Weex logo] "Weex" | "$3,400.00" | "$3.40" | "$1.02" | ⏳ Badge "Расчёт" (amber bg)

Table: striped rows (#F9FAFB alternate), hover highlight, header #6B7280 text semibold 14px, body 14px regular.
Numbers in tabular figures (monospace alignment).

--- QUICK ACTIONS ---
Below table, 2 buttons side by side:
"Вывести средства →" (primary blue button) | "Подключить новую биржу →" (secondary outline button)

Desktop 1280px. Data-dense but organized. Professional fintech dashboard feel. All amounts use dollar sign and 2 decimal places. Russian language for all UI text.
```

---

## PROMPT 6: Exchanges Page

```
Design the exchanges page for CryptoRebate trader dashboard.

URL: /exchanges
Same top navigation as dashboard, with "Биржи" nav item now active (blue underline).

=== PAGE HEADER ===
Title: "Ваши биржи" (30px bold)
Subtitle: "Управляйте подключёнными биржами и реферальными ссылками" (16px, #6B7280)
Right side: Filter pills: "Все" (active, blue), "Подключённые", "Доступные"

=== EXCHANGE CARDS GRID ===
3 columns grid, gap 24px. 11 exchange cards total.

Each CONNECTED exchange card (show 5 as connected):
- White card, 12px radius, shadow, padding 24px
- Top row: Exchange logo (48x48, rounded 8px) + Exchange name (18px semibold) + Status badge "● Подключена" (green dot + green text, green-50 bg pill)
- Stats block (gray bg #F9FAFB, 8px radius, padding 16px):
  - "Ваш rebate: $456.78" (18px semibold, green #059669)
  - "Объём: $45,230" (14px, #6B7280)
  - "Ставка: 60% от 50%" (14px)
- Bottom: two buttons — "Копировать ссылку" (primary, with copy icon) | "Подробнее →" (ghost link)

Connected exchanges mock data:
1. MEXC — rebate $456.78, volume $45,230, rate 60% of 50%, connected
2. Bybit — rebate $328.15, volume $32,800, rate 60% of 40%, connected
3. OKX — rebate $187.42, volume $18,700, rate 60% of 40%, connected
4. BingX — rebate $234.56, volume $23,400, rate 60% of 45%, connected
5. Weex — rebate $89.12, volume $8,900, rate 60% of 40%, connected

Each NOT CONNECTED exchange card (6 remaining):
- White card, 12px radius, shadow, padding 24px
- Top: Logo + Name + Badge "Доступна" (gray pill)
- Info: "Affiliate rate: до X%" | "Тип: API / Manual"
- Dashed border bottom area: "Подключите эту биржу и начните получать cashback"
- Button: "Подключиться →" (secondary outline blue button, full width)

Not connected: Binance (40%), Bitmart (50%), KuCoin (40%), HTX (50%), BloFin (40%), one shown with "Скоро" badge for future exchange

Toast notification shown in top-right: "✓ Ссылка скопирована!" (green background, white text, 3px green left border)

Desktop 1280px. Cards should feel like a marketplace/catalog of exchanges.
```

---

## PROMPT 7: Exchange Detail Page

```
Design the exchange detail page for CryptoRebate showing detailed stats for one exchange (Bybit).

URL: /exchanges/bybit
Same top navigation. Breadcrumb below nav: "Биржи > Bybit"

=== EXCHANGE HEADER ===
Left: Large Bybit logo (64x64) + "Bybit" (30px bold) + Status "● Подключена" badge (green)
Right: "Копировать реферальную ссылку" button (primary blue, copy icon)

=== STATS CARDS ROW (4 cards) ===
Card 1: "Ваш rebate" / "$328.15" (green, bold) / "↑ 15% за месяц"
Card 2: "Объём торгов" / "$32,800" / "За последние 30 дней"
Card 3: "Комиссии" / "$32.80" / "Всего уплачено бирже"
Card 4: "Ваша ставка" / "60%" / "от 40% affiliate rate"

=== REFERRAL LINK SECTION ===
Card with:
- Title: "Ваша реферальная ссылка"
- Link display: gray background box, JetBrains Mono font: "https://www.bybit.com/invite?ref=CRYPT0R3B8"
- Copy button: "Копировать" with clipboard icon
- Instruction: "Перейдите по ссылке и зарегистрируйте новый аккаунт на Bybit для получения cashback"

=== TABS: Спот | Фьючерсы ===
Two tabs, "Спот" active (blue underline, semibold).
Tab underline slides animation concept.

=== ACCRUALS HISTORY TABLE ===
Title: "История начислений" (18px semibold) + Date range picker right
Table columns: Дата | Тип | Объём | Комиссия | Rebate | Статус

8 rows of mock data with dates from Jan 25 to Feb 3, 2026:
Mix of "Спот" and "Фьючерсы" types, various amounts, all with ✅ "Начислен" status
Last row: ⏳ "Расчёт" status (amber)

=== EXCHANGE INFO CARD ===
Side card or bottom card with exchange details:
- "О бирже Bybit"
- Affiliate rate: 40%
- Ваша доля: 60%
- Тип синхронизации: API (автоматическая)
- Интервал обновления: каждые 4 часа
- Последнее обновление: "3 фев 2026, 14:30"
- Минимальный вывод: $10
- Срок реферала: 1080 дней

Desktop 1280px. Detailed, data-rich, professional financial dashboard.
```

---

## PROMPT 8: Withdrawal Page (Form + History)

```
Design the withdrawals page for CryptoRebate with withdrawal form and history.

URL: /withdrawals
Same top navigation, "Выводы" active.

=== TWO-COLUMN LAYOUT ===
Left (7 cols): Withdrawal Form
Right (5 cols): Recent Withdrawals

=== LEFT: WITHDRAWAL FORM ===
White card, 12px radius, shadow, padding 32px.

Title: "Вывод средств" (24px semibold) with Wallet icon
Available balance: "Доступный баланс: $1,247.83" (16px, green badge area)

Form fields:
1. "Сумма" — input with "$" prefix, placeholder "100.00", "USDT" suffix badge
   Helper: "Минимум $10. Доступно: $1,247.83"
   [MAX] button right-aligned (small ghost button, blue text)

2. "Адрес кошелька" — input with placeholder "TRC-20 адрес (начинается с T)"
   Warning text below: "⚠️ Проверяйте адрес. Отправка на неверный адрес необратима." (amber #D97706 text, 12px)

3. "Сеть" — radio buttons:
   (●) TRC-20 — "Комиссия ~$1" (recommended badge)
   ( ) ERC-20 — "Комиссия ~$5-15"

Divider line.

Summary block (gray bg #F9FAFB):
  "Сумма:" — "$100.00"
  "Комиссия сети:" — "~$1.00"
  "Вы получите:" — "$99.00 USDT" (18px semibold, green)

Button: "Вывести средства" — full width, blue #1E40AF, 48px height, wallet icon left

=== RIGHT: WITHDRAWAL HISTORY ===
White card, 12px radius, shadow, padding 24px.

Title: "История выводов" (18px semibold)

List of recent withdrawals (card-style, not table):
Item 1: "$250.00 USDT" | "TRC-20" | "01.02.2026" | ✅ "Выполнен" badge green | "TX: 8f3a...2d1e" (mono, blue link)
Item 2: "$150.00 USDT" | "TRC-20" | "25.01.2026" | ✅ "Выполнен" | TX link
Item 3: "$87.50 USDT" | "TRC-20" | "18.01.2026" | ✅ "Выполнен" | TX link
Item 4: "$100.00 USDT" | "ERC-20" | "10.01.2026" | ✅ "Выполнен" | TX link

Each item: white background, 8px radius, border #E5E7EB, padding 16px, small gap between items.
TX hash in JetBrains Mono, truncated, blue link color.

=== CONFIRMATION MODAL (overlay concept) ===
Show as a semi-transparent overlay concept:
Modal: white, 16px radius, shadow-xl, max-width 440px, centered.
Title: "Подтвердите вывод" (20px semibold)
Content:
  "Сумма: $100.00 USDT"
  "Адрес: T...x4f2a" (JetBrains Mono)
  "Сеть: TRC-20"
  "Комиссия сети: ~$1.00"
  "Вы получите: $99.00 USDT" (green, bold)
Warning: "⚠️ Проверьте адрес. Отправка на неверный адрес необратима." (amber bg alert)
Buttons: "Отмена" (ghost) | "Подтвердить вывод" (primary blue)
Backdrop: black 50% opacity.

Desktop 1280px. Clean form, clear summary, trustworthy confirmation flow.
```

---

## PROMPT 9: Settings Page

```
Design the settings page for CryptoRebate trader dashboard.

URL: /settings
Same top navigation. No nav item highlighted (settings accessed from user dropdown).

=== PAGE LAYOUT ===
Left sidebar (3 cols): Settings navigation
Right content (9 cols): Active settings section

=== LEFT: SETTINGS NAV ===
White card, 12px radius, padding 16px.
Vertical nav items:
- "Профиль" (active — blue bg, white text, 8px radius)
- "Безопасность"
- "Уведомления"
- "Кошелёк"
Divider
- "Выйти из аккаунта" (red text)

=== RIGHT: PROFILE SECTION (active) ===
White card, 12px radius, shadow, padding 32px.
Title: "Профиль" (24px semibold)

Form fields:
1. "Email" — input showing "alextrader@gmail.com", disabled/readonly with lock icon
   Helper: "Используется для входа и уведомлений"

2. "Telegram" — shows "@alextrader" with Telegram icon, green "Привязан" badge
   Button: "Отвязать" (small ghost red)
   OR if not linked: "Привязать Telegram" button (outline blue)

3. "Язык" — Select dropdown: "Русский" selected, options: Русский, English

4. "Кошелёк по умолчанию" — input showing "TJHt...4f2a" in JetBrains Mono
   Helper: "Смена кошелька: cooldown 48 часов"
   Last changed: "Последнее изменение: 15 янв 2026"

Button: "Сохранить изменения" (primary blue, disabled until changes made — shown as 50% opacity)

=== SECURITY SECTION (show as separate concept) ===
Title: "Безопасность"
- "Смена пароля" section:
  Field: "Текущий пароль"
  Field: "Новый пароль" (with strength bar below)
  Field: "Подтверждение пароля"
  Button: "Изменить пароль"
- "Активные сессии" section:
  List: Browser + location + date, with "Завершить" button each
  Current session highlighted: "Эта сессия" badge

=== NOTIFICATIONS SECTION (show as concept) ===
Title: "Уведомления"
Toggle switches list:
- "Начисления rebate" — Toggle ON (green)
- "Выводы средств" — Toggle ON
- "Новости сервиса" — Toggle OFF (gray)
- "Канал:" — Radio: Email | Telegram | Оба
Each toggle: label left, toggle switch right, description below in gray

Desktop 1280px. Clean settings layout, organized sections.
```

---

## PROMPT 10: Admin Dashboard

```
Design the admin dashboard for CryptoRebate admin panel.

URL: /admin
Layout: Left sidebar (collapsible) + top bar + main content.

=== LEFT SIDEBAR ===
Width: 240px, height: full viewport, white bg, right border #E5E7EB.
Top: Logo "CryptoRebate" + "Admin" badge (blue pill)
Divider.
Nav items with icons:
- "📊 Дашборд" — ACTIVE (blue bg, white text, 8px radius)
- "👥 Пользователи"
- "💱 Биржи"
- "💰 Выплаты"
- "⚙️ Настройки"
Bottom: Collapse button "◀ Свернуть" + admin avatar "АД" + "Администратор"

=== TOP BAR ===
Height: 64px, white bg, bottom border.
Left: Breadcrumb "Admin > Дашборд"
Right: Notification bell (with red dot badge "3"), admin name dropdown

=== MAIN CONTENT ===
Padding: 32px.

--- KPI CARDS (5 cards row) ---
Card 1: "Всего пользователей" / "1,247" / "↑ 48 за неделю" (green) / users icon
Card 2: "Активных трейдеров" / "387" / "31% от зарегистрированных" / chart icon
Card 3: "Trading Volume (30д)" / "$2,145,890" / "↑ 18.3%" (green) / trending icon
Card 4: "Gross Rebate (30д)" / "$12,874" / margin "$4,506" in green below / dollar icon
Card 5: "Pending Payouts" / "12 заявок" / "$2,340 сумма" (amber) / clock icon, AMBER colored

--- TWO-COLUMN SECTION ---
Left (8 cols): Revenue Chart
Right (4 cols): Exchange Sync Status

Revenue Chart card:
- Title: "Доход и выплаты" + period selector [7д] [30д] [90д]
- Stacked bar chart or grouped bars:
  - Blue bars: Gross rebate from exchanges
  - Green bars: Trader payouts
  - Implied margin between them
  - X axis: dates, Y axis: dollar amounts
  - Legend: "Gross Rebate" (blue) | "Payouts" (green) | "Margin" (purple)

Exchange Sync Status card:
- Title: "Статус бирж"
- List of 11 exchanges with sync status:
  MEXC — 🟢 "Синхронизировано" — "2ч назад"
  Bitget — 🟢 "Синхронизировано" — "1ч назад"
  BingX — 🟢 "Синхронизировано" — "3ч назад"
  Weex — 🟢 "Синхронизировано" — "4ч назад"
  Bybit — 🟡 "Синхронизация..." — progress bar 65%
  Binance — 🟢 "Синхронизировано" — "2ч назад"
  Bitmart — 🔴 "Ошибка" — "Retry через 15 мин" (red text)
  OKX — 🟢 "Синхронизировано" — "1ч назад"
  KuCoin — 🟢 "Синхронизировано" — "5ч назад"
  HTX — 🔴 "API ключ невалиден" — "Проверьте настройки" (red)
  BloFin — 🟢 "Синхронизировано" — "3ч назад"

--- RECENT PAYOUTS TABLE ---
Title: "Последние заявки на вывод" + "Все заявки →" link
Table: ID | Пользователь | Сумма | Адрес | Статус | Действия

Row 1: #1247 | alextrader@gmail.com | $250.00 | T...4f2a | ⏳ "Ожидает" amber | [Одобрить] [Отклонить]
Row 2: #1246 | maria@mail.ru | $87.50 | T...8b3c | ⏳ "Ожидает" | [Одобрить] [Отклонить]
Row 3: #1245 | dmitry@proton.me | $500.00 | T...2e7f | 🔄 "Обработка" blue | —
Row 4: #1244 | ivan@gmail.com | $100.00 | T...9a1d | ✅ "Выполнен" green | —
Row 5: #1243 | trader_pro@mail.com | $75.00 | T...5c2b | ✅ "Выполнен" | —

Action buttons: "Одобрить" (small green), "Отклонить" (small red outline)

--- BOTTOM ROW ---
Two small cards:
Left: "Топ-5 трейдеров по объёму" — mini leaderboard list
Right: "Системные алерты" — 3 alerts (2 warnings about sync, 1 info about new users)

Desktop 1280px. Data-dense admin dashboard, professional, lots of metrics and actionable items.
```

---

## PROMPT 11: Admin — Exchanges Management

```
Design the admin exchanges management page for CryptoRebate.

URL: /admin/exchanges
Same admin sidebar, "💱 Биржи" active.

=== PAGE HEADER ===
Title: "Управление биржами" (30px bold)
Right: Button "Добавить биржу +" (primary blue, plus icon)

=== EXCHANGES TABLE ===
Full-width white card, 12px radius, shadow, padding 24px.

Table columns: # | Биржа | Тип | Affiliate Rate | Trader Share | Трейдеров | Объём (30д) | Статус | Sync | Действия

11 rows:
1. MEXC | Manual | 50% | 60% | 245 | $456,780 | 🟢 Active | ✅ 2ч назад | [⚙️] [🔄]
2. Bitget | Manual | 50% | 60% | 198 | $387,200 | 🟢 Active | ✅ 1ч | [⚙️] [🔄]
3. BingX | API | 45% | 60% | 167 | $312,400 | 🟢 Active | ✅ 3ч | [⚙️] [🔄]
4. Weex | API | 40% | 60% | 89 | $145,600 | 🟢 Active | ✅ 4ч | [⚙️] [🔄]
5. Bybit | API | 40% | 60% | 312 | $523,890 | 🟢 Active | 🔄 Sync... | [⚙️] [🔄]
6. Binance | Manual | 40% | 55% | 156 | $289,100 | 🟢 Active | ✅ 2ч | [⚙️] [🔄]
7. Bitmart | Manual | 50% | 65% | 34 | $45,600 | 🟢 Active | ✅ 6ч | [⚙️] [🔄]
8. OKX | API | 40% | 60% | 201 | $398,700 | 🟢 Active | ✅ 1ч | [⚙️] [🔄]
9. KuCoin | Manual | 40% | 60% | 78 | $98,400 | 🟡 Paused | — | [⚙️] [▶️]
10. HTX | Manual | 50% | 60% | 45 | $67,800 | 🔴 Error | ❌ Failed | [⚙️] [🔄]
11. BloFin | Manual | 40% | 60% | 23 | $34,500 | 🟢 Active | ✅ 3ч | [⚙️] [🔄]

Table features: sortable columns, row hover, status color badges.
Action icons: ⚙️ = configure, 🔄 = force sync, ▶️ = resume

=== EXCHANGE CONFIG MODAL (overlay) ===
Show config modal for MEXC:
Modal: white, 16px radius, 720px width, padding 32px.
Title: "⚙️ Настройка биржи: MEXC"

Sections:
"Основные":
  - Название: "MEXC" (readonly)
  - Статус: Toggle switch ON "Active"
  - Тип API: Select "Manual"

"Ставки":
  - Affiliate Rate: input "50" with "%" suffix
  - Trader Share: input "60" with "%" suffix, helper "30-95%. Изменение не ретроактивно"
  - Spot Fee Rate: input "0.10" with "%"
  - Futures Fee Rate: input "0.04" with "%"

"Выплаты":
  - Мин. вывод: input "$10"
  - Частота: Select "Daily"
  - Валюта: "USDT" (readonly)

"Лимиты":
  - Sync interval: input "4" hours
  - Referral duration: input "1080" days

Buttons: "Тест подключения" (outline), "Сохранить" (primary blue)

Desktop 1280px. Admin-style data management, clear configuration options.
```

---

## PROMPT 12: Admin — Payouts Queue

```
Design the admin payouts management page for CryptoRebate.

URL: /admin/payouts
Same admin sidebar, "💰 Выплаты" active.

=== PAGE HEADER ===
Title: "Управление выплатами" (30px bold)
Stats row:
  "Ожидают: 12" (amber badge) | "Сегодня одобрено: 8" | "Сумма в очереди: $2,340" | "Выплачено за месяц: $18,945"

=== FILTER TABS ===
Tabs: "Все" | "Ожидают" (active, blue + badge "12") | "Одобрены" | "В обработке" | "Выполнены" | "Отклонены"

=== PAYOUTS TABLE ===
Full-width table in white card.
Columns: ID | Дата | Пользователь | Email | Сумма | Кошелёк | Сеть | Статус | Действия

12 rows for "Ожидают" tab:
Rows show various users requesting withdrawals between $10-$500, TRC-20 mostly, all with ⏳ "Ожидает" status.
Example rows:
#1247 | 03.02 14:32 | Алексей Т. | alex@gmail.com | $250.00 | T...4f2a | TRC-20 | ⏳ Ожидает | [✅ Одобрить] [❌ Отклонить] [👁 Подробности]
#1246 | 03.02 12:15 | Мария К. | maria@mail.ru | $87.50 | T...8b3c | TRC-20 | ⏳ Ожидает | [✅] [❌] [👁]

Action buttons: Green "Одобрить", Red outline "Отклонить", Gray "Подробности"

=== BULK ACTIONS BAR ===
When rows selected (show 3 checkboxes checked):
Bottom sticky bar: "Выбрано: 3 заявки на $437.50" | [Одобрить выбранные] [Отклонить выбранные]

=== REJECTION MODAL ===
Show overlay concept:
Modal: white, 440px, 16px radius.
Title: "Отклонить вывод?"
Content: "Пользователь: maria@mail.ru" / "Сумма: $87.50 USDT" / "Адрес: T...8b3c"
Required field: "Причина отклонения" — textarea placeholder "Укажите причину..."
Buttons: "Отмена" (ghost) | "Отклонить" (red button)

=== PAYOUT DETAIL PANEL ===
Show side panel concept (slides from right, 480px width):
User info: avatar, name, email, registered date, total volume, total rebate
Payout details: amount, wallet, network, fee, net amount, request date
User history: 5 previous successful payouts
Risk indicators: "✅ Подтверждённый трейдер" | "✅ Объём > $10K" | "✅ Кошелёк не менялся 30+ дней"
Actions: "Одобрить" (big green) | "Отклонить" (red outline)

Desktop 1280px. Admin workflow optimized for reviewing and processing payouts efficiently.
```

---

## PROMPT 13: Admin — Users Management

```
Design the admin users management page for CryptoRebate.

URL: /admin/users
Same admin sidebar, "👥 Пользователи" active.

=== PAGE HEADER ===
Title: "Пользователи" (30px bold)
Right: Search input "Поиск по имени или email..." with search icon, 320px width
Below: Stats: "Всего: 1,247" | "Активных: 387" | "Новых сегодня: 12"

=== FILTERS ROW ===
Filter pills: "Все" (active) | "Активные" | "Неактивные" | "Замороженные"
Sort: "Сортировка: Дата регистрации ▼" dropdown

=== USERS TABLE ===
Full-width table.
Columns: # | Пользователь | Email | Telegram | Бирж | Объём (30д) | Rebate | Баланс | Статус | Действия

10 rows of mock data:
#1 | [Avatar АТ] Алексей Т. | alex@gmail.com | @alextrader | 5 | $32,800 | $328.15 | $247.83 | 🟢 Активный | [👁]
#2 | [Avatar МК] Мария К. | maria@mail.ru | @mariakr | 3 | $18,700 | $187.42 | $87.50 | 🟢 Активный | [👁]
#3 | [Avatar ДП] Дмитрий П. | dmitry@proton.me | — | 2 | $5,200 | $52.00 | $12.34 | 🟢 Активный | [👁]
... (more rows)
Row with frozen user: [Avatar ИС] Иван С. | ivan@mail.com | @ivans | 1 | $0 | $0 | $0 | 🔴 Заморожен | [👁]

Pagination: "Показано 1-20 из 1,247" + pagination controls [◀ 1 2 3 ... 63 ▶]

=== USER DETAIL MODAL/PAGE ===
Show as a large modal or slide panel (720px):

Header: Avatar (64px), Name "Алексей Т.", Email "alex@gmail.com", Telegram "@alextrader"
Status: 🟢 "Активный" badge + "Зарегистрирован: 15 янв 2026"

KPI cards (4 mini cards):
"Объём торгов" $32,800 | "Rebate всего" $328.15 | "Баланс" $247.83 | "Выводов" 4

Tab navigation: "Биржи" | "Начисления" | "Выводы" | "Активность"

"Биржи" tab (active):
Mini table: Биржа | Статус | Объём | Rebate | Дата подключения
5 rows for connected exchanges

Admin actions at bottom:
"Изменить trader share" (input + save) | "Заморозить аккаунт" (red outline button, danger)

Desktop 1280px. Admin user management with search, filtering, and detailed user profiles.
```

---

## PROMPT 14: History Page (Accruals + Payouts tabs)

```
Design the history page for CryptoRebate trader dashboard with two tabs.

URL: /history
Same top navigation, "История" active.

=== PAGE HEADER ===
Title: "История" (30px bold)

=== TABS ===
Two tabs: "Начисления" (active, blue underline) | "Выводы"

=== ACCRUALS TAB (active) ===

--- Filters Row ---
Left: Select "Биржа: Все" dropdown | Select "Период: 30 дней" dropdown | Select "Статус: Все" dropdown
Right: "Экспорт CSV" button (ghost, download icon)

--- Summary Cards ---
3 mini cards in a row:
"Всего начислено: $4,582.19" | "За этот месяц: $967.42" | "Среднее в день: $32.25"

--- Accruals Table ---
Columns: Дата | Биржа | Тип | Объём торгов | Комиссия | Rebate | Статус

20 rows of mock data spanning January-February 2026:
Various exchanges (MEXC, Bybit, OKX, BingX, Weex), types (Спот, Фьючерсы),
amounts ranging from $1.02 to $15.67 rebate,
statuses: mostly ✅ "Начислен", few ⏳ "Расчёт"

Numbers right-aligned, monospace digits.
Pagination: "Показано 1-20 из 156" + page controls

=== PAYOUTS TAB (concept) ===
Similar table with columns: Дата | Сумма | Кошелёк | Сеть | TX Hash | Статус
TX Hash in JetBrains Mono, truncated, blue link
Statuses: ✅ Выполнен, ⏳ Ожидает, 🔄 Обработка

Desktop 1280px. Clean tabular data, good filtering, export capability.
```

---

## PROMPT 15: Error, Empty, and Loading States

```
Design a reference sheet of all UI states for CryptoRebate platform:

=== EMPTY STATES (4 variants) ===

1. Dashboard Empty (new user):
White card, centered content:
- Illustration: abstract friendly graphic (person with chart going up)
- Title: "Добро пожаловать!" (20px semibold)
- Description: "Подключите биржу и начните получать cashback с комиссий" (14px, #6B7280)
- Button: "Подключить биржу →" (primary blue)

2. Exchanges Empty:
- Illustration: exchange buildings
- Title: "Выберите биржу"
- Description: "Подключитесь к одной из 11 бирж и начните торговать с cashback"
- Button: "Выбрать биржу →"

3. History Empty:
- Illustration: empty list
- Title: "Нет начислений"
- Description: "Начисления появятся после вашей первой торговли на подключённой бирже"
- Link: "Как это работает? →"

4. Search No Results:
- Illustration: magnifying glass with X
- Title: "Ничего не найдено"
- Description: "Попробуйте изменить запрос"
- Button: "Сбросить фильтры"

=== LOADING STATES ===

1. Dashboard Loading:
- 4 KPI card skeletons (gray pulsing blocks matching card layout)
- Chart skeleton (gray rectangle with subtle pulse animation)
- Table skeleton (5 rows of gray bars)

2. Button Loading:
- Blue button with white spinner (16px) + text "Обработка..."
- Button disabled state (50% opacity)

3. Full Page Loading:
- Centered: CryptoRebate logo + spinner below
- Text: "Загрузка..."

=== ERROR STATES ===

1. 404 Page:
- Large "404" text (80px bold, #E5E7EB)
- Title: "Страница не найдена" (24px)
- Description: "Такой страницы нет или она была перемещена"
- Button: "На главную →"

2. 500 Page:
- Illustration: broken gear
- Title: "Что-то пошло не так" (24px)
- Description: "Мы уже разбираемся. Попробуйте обновить страницу."
- Two buttons: "Обновить" (primary) | "На главную →" (ghost)

3. Network Error:
- Illustration: disconnected cable
- Title: "Нет соединения"
- Description: "Проверьте подключение к интернету"
- Button: "Попробовать снова"

4. Inline Form Error:
- Input field with red border (#DC2626)
- Red error text below: "Минимальная сумма — $10"
- Red background tint on input (#FEF2F2)

=== TOAST NOTIFICATIONS (4 types) ===
Top-right positioned, 320px wide, 12px radius, shadow-xl:
1. Success: Green left border, checkmark icon, "Ссылка скопирована!"
2. Error: Red left border, X icon, "Не удалось вывести средства"
3. Warning: Amber left border, alert icon, "Проверьте адрес кошелька"
4. Info: Blue left border, info icon, "Синхронизация запущена"

Desktop 1280px. Reference sheet showing all possible UI states, consistent styling.
```

---

## Порядок генерации

1. **Prompt 1** — Landing Page (самый важный, showcase всего проекта)
2. **Prompt 2** — Registration
3. **Prompt 3** — Login
4. **Prompt 4** — Onboarding
5. **Prompt 5** — Trader Dashboard
6. **Prompt 6** — Exchanges Page
7. **Prompt 7** — Exchange Detail
8. **Prompt 8** — Withdrawal Page
9. **Prompt 9** — Settings
10. **Prompt 10** — Admin Dashboard
11. **Prompt 11** — Admin Exchanges
12. **Prompt 12** — Admin Payouts
13. **Prompt 13** — Admin Users
14. **Prompt 14** — History Page
15. **Prompt 15** — States Reference Sheet

---

## Навигационная карта прототипа

```
Landing Page (/) ─────┬──→ Registration (/register) ──→ Onboarding ──→ Dashboard
                      ├──→ Login (/login) ──→ Dashboard
                      └──→ Scroll sections

Trader Dashboard ─────┬──→ Exchanges ──→ Exchange Detail
    (/dashboard)      ├──→ Withdrawals (form + history)
                      ├──→ History (accruals + payouts tabs)
                      └──→ Settings (profile, security, notifications)

Admin Panel ──────────┬──→ Admin Dashboard
    (/admin)          ├──→ Admin Exchanges (config modal)
                      ├──→ Admin Payouts (approve/reject)
                      └──→ Admin Users (detail modal)
```

---

*Документ создан: Orchestrator Agent (UX + UI + Content agents) | Дата: 2026-02-04*
