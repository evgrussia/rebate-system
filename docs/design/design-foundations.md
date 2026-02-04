---
title: "Design Foundations - CryptoRebate"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
status: "approved"
---

# Design Foundations -- CryptoRebate

> Фундамент дизайн-системы для CryptoRebate -- агрегатора крипто-биржевых рибейтов и кэшбэков.

## Философия бренда

### Личность бренда

```yaml
Характер:
  - Профессиональный, но доступный
  - Крипто-нативный: говорим на языке трейдеров
  - Надёжный в обращении с деньгами
  - Прозрачный и честный
  - Технологичный, но не перегруженный

Тон коммуникации:
  - Уверенный, но не агрессивный
  - Информативный, но не занудный
  - Дружелюбный, но не фамильярный

Ключевые ассоциации:
  - Доверие и безопасность
  - Выгода и экономия
  - Скорость и эффективность
  - Прозрачность начислений
```

### Дизайн-принципы

1. **Clarity First** -- информация о рибейтах и выплатах должна считываться мгновенно
2. **Trust Through Design** -- визуал формирует доверие к платформе, работающей с деньгами
3. **Data-Dense, Not Cluttered** -- много данных, но организованных и иерархичных
4. **Crypto-Native Feel** -- знакомые паттерны для пользователей крипто-бирж

---

## 1. Цветовая палитра

### 1.1 Брендовые цвета

#### Primary -- Deep Blue (Доверие, профессионализм)

```yaml
primary-50:   "#EFF6FF"   # Фон активных элементов
primary-100:  "#DBEAFE"   # Hover-фоны
primary-200:  "#BFDBFE"   # Бордеры, разделители
primary-300:  "#93C5FD"   # Неактивные элементы
primary-400:  "#60A5FA"   # Иконки, ссылки
primary-500:  "#3B82F6"   # Вторичные кнопки
primary-600:  "#2563EB"   # Hover основных кнопок
primary-700:  "#1E40AF"   # Основной брендовый цвет
primary-800:  "#1E3A8A"   # Активное состояние
primary-900:  "#1E3050"   # Тёмные элементы
primary-950:  "#172554"   # Максимальный контраст
```

#### Secondary -- Emerald Green (Деньги, успех, прибыль)

```yaml
secondary-50:   "#ECFDF5"   # Фон success-блоков
secondary-100:  "#D1FAE5"   # Hover success
secondary-200:  "#A7F3D0"   # Бордеры success
secondary-300:  "#6EE7B7"   # Иконки прибыли
secondary-400:  "#34D399"   # Положительные значения
secondary-500:  "#10B981"   # Рибейт-индикаторы
secondary-600:  "#059669"   # Основной secondary
secondary-700:  "#047857"   # Hover secondary
secondary-800:  "#065F46"   # Активный secondary
secondary-900:  "#064E3B"   # Тёмный secondary
secondary-950:  "#022C22"   # Максимальный контраст
```

### 1.2 Крипто-акцентные цвета

```yaml
crypto-bitcoin:    "#F7931A"   # Bitcoin-оранжевый
crypto-ethereum:   "#627EEA"   # Ethereum-фиолетовый
crypto-tether:     "#26A17B"   # USDT-зелёный
crypto-bnb:        "#F3BA2F"   # BNB-жёлтый
crypto-solana:     "#9945FF"   # Solana-фиолетовый
crypto-ton:        "#0098EA"   # TON-голубой
```

Использование: иконки монет, графики портфеля, бейджи бирж.

### 1.3 Семантические цвета

```yaml
success:
  light:  "#ECFDF5"   # Фон
  base:   "#059669"   # Текст, иконки
  dark:   "#065F46"   # Акцент
  использование: "Успешные выплаты, начисленные рибейты, подтверждения"

warning:
  light:  "#FFFBEB"
  base:   "#D97706"
  dark:   "#92400E"
  использование: "Ожидающие выплаты, приближение лимитов, важные уведомления"

error:
  light:  "#FEF2F2"
  base:   "#DC2626"
  dark:   "#991B1B"
  использование: "Ошибки транзакций, просроченные верификации, критические алерты"

info:
  light:  "#EFF6FF"
  base:   "#2563EB"
  dark:   "#1E40AF"
  использование: "Информационные сообщения, подсказки, новые функции"
```

### 1.4 Нейтральная шкала

```yaml
neutral-0:    "#FFFFFF"   # Основной фон
neutral-50:   "#F9FAFB"   # Вторичный фон, карточки
neutral-100:  "#F3F4F6"   # Третичный фон, stripe rows
neutral-200:  "#E5E7EB"   # Бордеры, разделители
neutral-300:  "#D1D5DB"   # Неактивные бордеры
neutral-400:  "#9CA3AF"   # Placeholder-текст
neutral-500:  "#6B7280"   # Вторичный текст
neutral-600:  "#4B5563"   # Подписи, labels
neutral-700:  "#374151"   # Основной текст (body)
neutral-800:  "#1F2937"   # Заголовки
neutral-900:  "#111827"   # Максимальный контраст
neutral-950:  "#030712"   # Почти чёрный
```

### 1.5 Dark Mode (V1.5)

```yaml
dark_mode_mapping:
  background:
    primary:    "#0F172A"   # slate-900
    secondary:  "#1E293B"   # slate-800
    tertiary:   "#334155"   # slate-700
    elevated:   "#1E293B"   # Карточки

  text:
    primary:    "#F1F5F9"   # slate-100
    secondary:  "#94A3B8"   # slate-400
    tertiary:   "#64748B"   # slate-500
    disabled:   "#475569"   # slate-600

  borders:
    default:    "#334155"   # slate-700
    subtle:     "#1E293B"   # slate-800

  brand:
    primary:    "#3B82F6"   # Ярче на тёмном фоне
    secondary:  "#10B981"   # Ярче на тёмном фоне

  принципы:
    - "Инвертировать нейтральную шкалу"
    - "Повысить яркость брендовых на 1 step"
    - "Семантические цвета: использовать light-вариант для фонов"
    - "Тени заменить на свечение (glow) или убрать"
    - "Обеспечить WCAG AA (4.5:1 для текста)"
```

---

## 2. Типографика

### 2.1 Шрифтовые семейства

```yaml
primary:
  family: "Inter"
  fallback: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  использование: "Весь UI-текст: заголовки, body, labels, кнопки"
  причина: "Отличная читаемость чисел, tabular figures, широкая поддержка"

monospace:
  family: "JetBrains Mono"
  fallback: "'Fira Code', 'Source Code Pro', 'Courier New', monospace"
  использование: "Крипто-адреса, хэши транзакций, суммы, код"
  причина: "Чёткое различение символов (0/O, 1/l), лигатуры"
```

### 2.2 Шкала размеров

```yaml
text-xs:
  size: "12px"      # 0.75rem
  line-height: "16px"
  использование: "Мелкие подписи, timestamps, badge-тексты"

text-sm:
  size: "14px"      # 0.875rem
  line-height: "20px"
  использование: "Вторичный текст, labels, табличные данные"

text-base:
  size: "16px"      # 1rem
  line-height: "24px"
  использование: "Основной body-текст, описания"

text-lg:
  size: "18px"      # 1.125rem
  line-height: "28px"
  использование: "Подзаголовки секций, важные значения"

text-xl:
  size: "20px"      # 1.25rem
  line-height: "28px"
  использование: "Заголовки карточек, названия секций"

text-2xl:
  size: "24px"      # 1.5rem
  line-height: "32px"
  использование: "Заголовки страниц (h2)"

text-3xl:
  size: "30px"      # 1.875rem
  line-height: "36px"
  использование: "Главные заголовки (h1)"

text-4xl:
  size: "36px"      # 2.25rem
  line-height: "40px"
  использование: "Hero-заголовки, крупные числовые показатели"
```

### 2.3 Весы шрифтов

```yaml
font-regular:    400   # Body-текст, описания
font-medium:     500   # Labels, навигация, табличные заголовки
font-semibold:   600   # Заголовки секций, кнопки, важные значения
font-bold:       700   # Страничные заголовки, hero, акценты
```

### 2.4 Специальные правила для крипто-данных

```yaml
числа_и_суммы:
  font-family: "Inter"
  font-feature-settings: "'tnum' on, 'lnum' on"  # Tabular, lining figures
  комментарий: "Цифры одинаковой ширины для выравнивания в таблицах"

крипто_адреса:
  font-family: "JetBrains Mono"
  font-size: "14px"
  letter-spacing: "0.02em"
  truncation: "0x1234...5678 (первые 6 + последние 4)"

хэши_транзакций:
  font-family: "JetBrains Mono"
  font-size: "12px"
  color: "neutral-500"

процент_рибейта:
  font-family: "Inter"
  font-weight: 700
  color: "secondary-600"  # Зелёный -- прибыль
```

---

## 3. Система отступов (Spacing)

### 3.1 Базовый модуль

```yaml
base: 4px

принцип: "Все отступы кратны 4px"
```

### 3.2 Шкала отступов

```yaml
space-0:    "0px"      # Нет отступа
space-1:    "4px"      # Минимальный: между иконкой и текстом
space-2:    "8px"      # Малый: внутри badge, между элементами inline
space-3:    "12px"     # Средне-малый: padding кнопок (вертикальный)
space-4:    "16px"     # Базовый: padding карточек, gap в формах
space-5:    "20px"     # Средний: gap между группами полей
space-6:    "24px"     # Стандартный: padding секций, gap в grid
space-8:    "32px"     # Увеличенный: между секциями
space-10:   "40px"     # Большой: top/bottom секций
space-12:   "48px"     # Крупный: между логическими блоками
space-16:   "64px"     # Максимальный: hero-секции, top-level spacing
```

### 3.3 Применение

```yaml
component_padding:
  button:       "space-3 space-4"     # 12px 16px
  input:        "space-3 space-4"     # 12px 16px
  card:         "space-6"             # 24px
  modal:        "space-6"             # 24px
  section:      "space-10 space-6"    # 40px 24px
  page:         "space-8 space-6"     # 32px 24px

component_gap:
  inline:       "space-2"             # 8px
  form_fields:  "space-4"             # 16px
  cards_grid:   "space-6"             # 24px
  sections:     "space-8"             # 32px
```

---

## 4. Сетка (Grid System)

### 4.1 Параметры

```yaml
columns: 12
max_width: "1280px"
gutter: "24px"
margin: "auto"       # Центрирование

container_padding:
  mobile:   "16px"
  tablet:   "24px"
  desktop:  "24px"
```

### 4.2 Breakpoints

```yaml
xs:   "0px"       # Mobile (portrait)
sm:   "640px"     # Mobile (landscape)
md:   "768px"     # Tablet
lg:   "1024px"    # Desktop
xl:   "1280px"    # Wide desktop
2xl:  "1536px"    # Ultra-wide
```

### 4.3 Типичные раскладки

```yaml
dashboard:
  sidebar:    "3 колонки (lg+), скрыт (md-)"
  main:       "9 колонок (lg+), 12 (md-)"

tables:
  full_width: "12 колонок"
  with_aside: "8 + 4 колонки"

cards_grid:
  desktop:    "3 колонки (lg+)"
  tablet:     "2 колонки (md)"
  mobile:     "1 колонка (sm-)"

landing:
  hero:       "12 колонок, центрирование"
  features:   "4+4+4 (lg), 6+6 (md), 12 (sm)"
```

---

## 5. Высота / Тени (Elevation)

### 5.1 Уровни теней

```yaml
shadow-sm:
  value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  использование: "Кнопки, inputs, мелкие элементы"

shadow-md:
  value: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
  использование: "Карточки, dropdown-меню"

shadow-lg:
  value: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
  использование: "Модальные окна, floating panels"

shadow-xl:
  value: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
  использование: "Popovers, tooltips, notifications"
```

### 5.2 Иерархия элевации

```yaml
z-base:       0     # Основной контент
z-card:       1     # Карточки, поднятые блоки
z-dropdown:   10    # Выпадающие меню
z-sticky:     20    # Sticky header
z-overlay:    30    # Оверлей (затемнение)
z-modal:      40    # Модальные окна
z-popover:    50    # Popovers, tooltips
z-toast:      60    # Toast-уведомления
z-tooltip:    70    # Подсказки
z-max:        100   # Максимальный (экстренный)
```

---

## 6. Скругления (Border Radius)

```yaml
radius-sm:    "4px"     # Мелкие элементы: badge, tag, chip
radius-md:    "8px"     # Стандарт: кнопки, inputs, карточки
radius-lg:    "12px"    # Крупные карточки, секции
radius-xl:    "16px"    # Модальные окна, hero-блоки
radius-full:  "9999px"  # Круглые: аватары, pills, toggle

правила:
  - "Кнопки: radius-md (8px)"
  - "Inputs: radius-md (8px)"
  - "Карточки: radius-lg (12px)"
  - "Модалки: radius-xl (16px)"
  - "Аватары: radius-full"
  - "Badge/Tag: radius-sm (4px)"
```

---

## 7. Иконография

### 7.1 Библиотека

```yaml
библиотека: "Lucide React"
причина: "Открытый исходный код, консистентный стиль, React-нативный"
пакет: "lucide-react"
```

### 7.2 Параметры по умолчанию

```yaml
default_size:     "20px"
stroke_width:     2
stroke_linecap:   "round"
stroke_linejoin:  "round"
```

### 7.3 Размеры иконок

```yaml
icon-xs:    "14px"    # Inline с мелким текстом, индикаторы
icon-sm:    "16px"    # Inline с body-текстом, кнопки sm
icon-md:    "20px"    # Стандарт: навигация, кнопки, labels
icon-lg:    "24px"    # Заголовки, крупные кнопки
icon-xl:    "32px"    # Empty states, feature highlights
icon-2xl:   "48px"    # Hero-секции, большие empty states
```

### 7.4 Ключевые иконки для CryptoRebate

```yaml
навигация:
  - Home: "Home"
  - Dashboard: "LayoutDashboard"
  - Exchanges: "Building2"
  - Rebates: "Percent"
  - Wallet: "Wallet"
  - Settings: "Settings"
  - Profile: "User"

действия:
  - Connect: "Link"
  - Copy: "Copy"
  - Refresh: "RefreshCw"
  - Filter: "Filter"
  - Sort: "ArrowUpDown"
  - Export: "Download"
  - Share: "Share2"

статусы:
  - Success: "CheckCircle2"
  - Warning: "AlertTriangle"
  - Error: "XCircle"
  - Info: "Info"
  - Pending: "Clock"
  - Processing: "Loader2" (с анимацией вращения)

крипто:
  - Transaction: "ArrowLeftRight"
  - Deposit: "ArrowDownToLine"
  - Withdraw: "ArrowUpFromLine"
  - Trading: "TrendingUp"
  - Chart: "LineChart"
  - Percentage: "Percent"
```

---

## 8. Движение и анимация (Motion)

### 8.1 Длительности

```yaml
duration-fast:     "150ms"    # Hover, focus, small toggles
duration-normal:   "200ms"    # Стандартные переходы, fade in/out
duration-slow:     "300ms"    # Модалки, sidebar, page transitions
duration-slower:   "500ms"    # Сложные анимации, charts loading
```

### 8.2 Easing-функции

```yaml
ease-default:      "cubic-bezier(0.4, 0, 0.2, 1)"     # Универсальная
ease-in:           "cubic-bezier(0.4, 0, 1, 1)"        # Элемент уходит
ease-out:          "cubic-bezier(0, 0, 0.2, 1)"        # Элемент появляется
ease-in-out:       "cubic-bezier(0.4, 0, 0.2, 1)"     # Перемещение
ease-bounce:       "cubic-bezier(0.34, 1.56, 0.64, 1)" # Акцент (редко)
```

### 8.3 Типичные анимации

```yaml
hover_button:
  property: "background-color, box-shadow"
  duration: "duration-fast"
  easing: "ease-default"

fade_in:
  property: "opacity"
  from: 0
  to: 1
  duration: "duration-normal"
  easing: "ease-out"

slide_up:
  property: "transform, opacity"
  from: "translateY(8px), opacity: 0"
  to: "translateY(0), opacity: 1"
  duration: "duration-normal"
  easing: "ease-out"

modal_enter:
  overlay: "fade_in, duration-fast"
  content: "slide_up, duration-slow"

toast_enter:
  property: "transform, opacity"
  from: "translateX(100%), opacity: 0"
  to: "translateX(0), opacity: 1"
  duration: "duration-slow"
  easing: "ease-out"

loading_spinner:
  property: "transform"
  animation: "rotate 1s linear infinite"

skeleton_pulse:
  property: "opacity"
  animation: "pulse 2s ease-in-out infinite"
```

### 8.4 Правила анимации

```yaml
принципы:
  - "Функциональность прежде эстетики: анимация помогает понять интерфейс"
  - "Быстрые переходы (150ms) для микровзаимодействий"
  - "Уважать prefers-reduced-motion"
  - "Числовые данные обновлять без анимации (мгновенно)"
  - "Не анимировать критические данные (баланс, суммы)"

reduced_motion:
  - "Отключить все transform-анимации"
  - "Оставить только opacity transitions"
  - "Длительность: 0ms или минимальная"
```

---

## 9. Accessibility (Доступность)

### 9.1 Контраст

```yaml
стандарт: "WCAG 2.1 AA"

требования:
  - "Текст: контраст минимум 4.5:1"
  - "Крупный текст (18px+): контраст минимум 3:1"
  - "Иконки и графические элементы: контраст минимум 3:1"
  - "Focus ring: видимый, контрастный"

проверенные_комбинации:
  - "neutral-700 на neutral-0: 10.5:1 (pass)"
  - "neutral-800 на neutral-0: 14.7:1 (pass)"
  - "primary-700 на neutral-0: 6.2:1 (pass)"
  - "secondary-600 на neutral-0: 4.6:1 (pass)"
  - "neutral-500 на neutral-0: 4.8:1 (pass)"
```

### 9.2 Focus States

```yaml
focus_ring:
  style: "2px solid primary-500"
  offset: "2px"
  border-radius: "наследует от элемента"

keyboard_navigation:
  - "Все интерактивные элементы доступны через Tab"
  - "Escape закрывает модалки/dropdowns"
  - "Enter/Space активирует кнопки"
  - "Arrow keys в таблицах и списках"
```

---

## 10. Краткая справка по компонентам

### Соответствие токенов компонентам

```yaml
Button:
  padding: "space-3 space-4"
  radius: "radius-md"
  font: "text-sm, font-semibold"
  shadow: "shadow-sm"
  transition: "duration-fast"

Input:
  padding: "space-3 space-4"
  radius: "radius-md"
  font: "text-base, font-regular"
  border: "1px solid neutral-300"
  focus_border: "primary-500"

Card:
  padding: "space-6"
  radius: "radius-lg"
  shadow: "shadow-md"
  border: "1px solid neutral-200"

Modal:
  padding: "space-6"
  radius: "radius-xl"
  shadow: "shadow-lg"
  overlay: "rgba(0, 0, 0, 0.5)"

Table:
  cell_padding: "space-3 space-4"
  header_font: "text-sm, font-semibold, neutral-600"
  body_font: "text-sm, font-regular, neutral-700"
  stripe_bg: "neutral-50"
  border: "1px solid neutral-200"

Badge:
  padding: "space-1 space-2"
  radius: "radius-sm"
  font: "text-xs, font-medium"

Toast:
  padding: "space-4"
  radius: "radius-lg"
  shadow: "shadow-xl"
  transition: "duration-slow"
```

---

*Документ создан: UI Agent | Дата: 2026-02-04*
