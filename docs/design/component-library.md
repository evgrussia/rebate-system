---
title: "Component Library — CryptoRebate"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Component Library: CryptoRebate

> Библиотека UI-компонентов для React-приложения

---

## Обзор

```yaml
Design System: CryptoRebate DS
Framework: React 18+
Styling: Tailwind CSS + CSS Modules (where needed)
Icons: Lucide React
Total Components: 32
Categories: 6
```

| Категория | Кол-во | Компоненты |
|-----------|--------|-----------|
| Inputs | 8 | Button, Input, Select, Checkbox, Toggle, Radio, Textarea, SearchInput |
| Display | 8 | Card, Badge, Avatar, Alert, Toast, Modal, Tooltip, Popover |
| Data | 5 | Table, KPICard, Chart, StatusBadge, ProgressBar |
| Navigation | 5 | Navbar, Sidebar, Tabs, Breadcrumb, Pagination |
| Layout | 4 | Container, Grid, Stack, Divider |
| Composite | 2 | ExchangeCard, WithdrawalForm |

---

## 1. Inputs

### Button

```yaml
Component: Button
File: components/ui/Button.tsx
```

**Variants:**

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| primary | brand-600 | white | none | Главное действие |
| secondary | transparent | brand-600 | brand-600 | Второстепенное |
| ghost | transparent | neutral-700 | none | Третичное |
| danger | red-600 | white | none | Удаление |
| success | green-600 | white | none | Подтверждение |

**Sizes:**

| Size | Height | Padding H | Font | Icon Size |
|------|--------|-----------|------|-----------|
| xs | 28px | 8px | 12px | 14px |
| sm | 32px | 12px | 14px | 16px |
| md | 40px | 16px | 14px | 18px |
| lg | 48px | 20px | 16px | 20px |

**States:**

| State | Visual Change |
|-------|--------------|
| default | Base styles |
| hover | Darken 10%, cursor pointer |
| active | Darken 15%, scale(0.98) |
| focus | Ring 2px brand-primary offset-2 |
| disabled | Opacity 50%, cursor not-allowed |
| loading | Spinner (16px) + text "Загрузка..." |

**Props:**

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
}
```

**Anatomy:**

```
┌───────────────────────────┐
│  [Icon]  Label  [Icon]    │
└───────────────────────────┘
```

---

### Input

```yaml
Component: Input
File: components/ui/Input.tsx
```

**Structure:**

```
┌──────────────────────────────────┐
│ Label *                           │
│ ┌──────────────────────────────┐ │
│ │ [icon]  Placeholder    [icon]│ │
│ └──────────────────────────────┘ │
│ Help text / Error message         │
└──────────────────────────────────┘
```

**States:**

| State | Border | Background | Ring |
|-------|--------|-----------|------|
| default | neutral-300 | white | none |
| hover | neutral-400 | white | none |
| focus | brand-600 | white | brand-100 2px |
| error | red-500 | red-50 | red-100 2px |
| disabled | neutral-200 | neutral-50 | none |
| filled | neutral-300 | white | none |

**Props:**

```typescript
interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  helperText?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}
```

---

### Select

```yaml
Component: Select
File: components/ui/Select.tsx
```

**Structure:**

```
┌──────────────────────────────┐
│ Label                         │
│ ┌──────────────────────┬───┐ │
│ │ Selected value       │ ▼ │ │
│ └──────────────────────┴───┘ │
│ ┌──────────────────────────┐ │  ← Dropdown (open)
│ │ ● Option 1              │ │
│ │   Option 2              │ │
│ │   Option 3              │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

Dropdown: max-height 240px, scroll. Animation: slide-down 200ms.

---

### Toggle

```yaml
Component: Toggle
File: components/ui/Toggle.tsx
Usage: Настройки уведомлений, вкл/выкл биржи (admin)
```

**Visual:**

```
OFF: [○─────]  neutral-300 background
ON:  [─────●]  brand-600 background
```

**Animation:** 300ms spring easing, thumb translate.

---

### SearchInput

```yaml
Component: SearchInput
File: components/ui/SearchInput.tsx
Usage: Admin — поиск пользователей, бирж
```

**Features:**
- Left icon: 🔍 (Search)
- Debounce: 300ms
- Clear button (×) при наличии текста
- Placeholder: "Поиск..."

---

## 2. Display

### Card

```yaml
Component: Card
File: components/ui/Card.tsx
```

**Variants:**

| Variant | Border | Shadow | Usage |
|---------|--------|--------|-------|
| default | neutral-200 | sm | Основная карточка |
| elevated | none | md | Приподнятая |
| outlined | neutral-300 | none | Только бордер |
| interactive | neutral-200 | sm→md on hover | Кликабельная |

**Props:**

```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive';
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: ReactNode;
}
```

---

### Badge / StatusBadge

```yaml
Component: StatusBadge
File: components/ui/StatusBadge.tsx
Usage: Статусы бирж, выплат, синхронизации
```

**Variants:**

| Status | Background | Text | Dot |
|--------|-----------|------|-----|
| success | green-50 | green-700 | green-500 |
| warning | amber-50 | amber-700 | amber-500 |
| error | red-50 | red-700 | red-500 |
| info | blue-50 | blue-700 | blue-500 |
| neutral | neutral-100 | neutral-600 | neutral-400 |

**Visual:**

```
┌──────────────────┐
│ ● Status Text    │
└──────────────────┘
```

**Sizes:** sm (20px h), md (24px h), lg (28px h)

---

### Alert

```yaml
Component: Alert
File: components/ui/Alert.tsx
```

**Variants:** success, warning, error, info

**Structure:**

```
┌─────────────────────────────────────────┐
│ [Icon]  Title                     [×]   │
│         Description text                 │
│         [Action Button]                  │
└─────────────────────────────────────────┘
```

---

### Toast

```yaml
Component: Toast (via ToastProvider)
File: components/ui/Toast.tsx
Usage: Feedback на user actions
```

**Position:** Top-right (desktop), Top-center (mobile)
**Max stack:** 3
**Auto-dismiss:** Success 3s, Warning 4s, Error — manual only

**API:**

```typescript
const { toast } = useToast();
toast.success("Ссылка скопирована!");
toast.error("Не удалось вывести средства");
toast.warning("Проверьте адрес кошелька");
toast.info("Синхронизация запущена");
```

---

### Modal

```yaml
Component: Modal
File: components/ui/Modal.tsx
```

**Sizes:** sm (400px), md (560px), lg (720px), full (90vw)

**Features:**
- Backdrop: black/50, click-to-close (настраиваемо)
- Focus trap
- Escape to close
- Animation: fade-in + scale from 95% (200ms)
- Scroll: внутренний scroll при overflow

**Structure:**

```
┌──────────────────────────────────┐
│  Title                     [×]   │
├──────────────────────────────────┤
│                                  │
│  Content                         │
│                                  │
├──────────────────────────────────┤
│          [Cancel] [Confirm]      │
└──────────────────────────────────┘
```

---

### Tooltip

```yaml
Component: Tooltip
File: components/ui/Tooltip.tsx
Usage: Пояснения к иконкам, сокращённым текстам
```

**Behavior:** Hover trigger, 300ms delay, fade-in 150ms
**Position:** auto (top preferred), flip if overflows
**Max width:** 240px

---

## 3. Data Components

### KPICard

```yaml
Component: KPICard
File: components/data/KPICard.tsx
Usage: Dashboard — баланс, всего заработано, бирж, pending
```

**Structure:**

```
┌────────────────────────────┐
│  [Icon]                     │
│  Label                      │
│  $1,234.56          ↑ 12%  │
│  ▓▓▓▓▓▓▓░░░ sparkline     │
└────────────────────────────┘
```

**Props:**

```typescript
interface KPICardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: { value: number; direction: 'up' | 'down' };
  sparklineData?: number[];
  onClick?: () => void;
  isLoading?: boolean;
}
```

**Loading state:** Skeleton (pulsating blocks matching layout)

---

### Table

```yaml
Component: Table
File: components/data/Table.tsx
Usage: История, админ-списки, биржи
```

**Features:**
- Sortable columns (click header)
- Pagination (20 per page)
- Row hover highlight
- Row click → callback
- Responsive: horizontal scroll или card view
- Loading: 5 skeleton rows
- Empty: illustration + message + CTA

**Props:**

```typescript
interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  emptyCTA?: { label: string; onClick: () => void };
  onRowClick?: (row: T) => void;
  sortable?: boolean;
  pagination?: { page: number; pageSize: number; total: number };
  onPageChange?: (page: number) => void;
}
```

---

### Chart (RebateChart)

```yaml
Component: RebateChart
File: components/data/RebateChart.tsx
Library: Recharts
Usage: Dashboard — график rebate за период
```

**Features:**
- Line chart (primary) or Bar chart (per exchange)
- Period selector: 7d, 30d, 90d, All
- Hover tooltip
- Responsive
- Loading: skeleton
- Empty: "Нет данных за этот период"

---

### ProgressBar

```yaml
Component: ProgressBar
File: components/ui/ProgressBar.tsx
Usage: Sync progress, пароль strength
```

**Visual:**

```
┌──────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 65%  │
└──────────────────────────────┘
```

**Colors:** brand (default), green (success), red (danger), amber (warning)

---

## 4. Navigation

### Navbar

```yaml
Component: Navbar
File: components/navigation/Navbar.tsx
Usage: Top navigation bar в Trader ЛК
```

**Structure (Desktop):**

```
┌──────────────────────────────────────────────────────┐
│  [Logo]    Дашборд  Биржи  Выводы  История   [👤 ▼] │
└──────────────────────────────────────────────────────┘
```

**Structure (Mobile):**

```
┌──────────────────────────────────┐
│  [☰]    [Logo]           [👤]   │
└──────────────────────────────────┘
  ↓ (hamburger open)
┌──────────────────────────────────┐
│  Дашборд                         │
│  Биржи                           │
│  Выводы                          │
│  История                         │
│  Настройки                       │
│  ─────────                       │
│  Выйти                           │
└──────────────────────────────────┘
```

---

### Sidebar (Admin)

```yaml
Component: AdminSidebar
File: components/navigation/AdminSidebar.tsx
```

**Structure:**

```
┌──────────────────┐
│  [Logo] Admin    │
│ ─────────────── │
│  📊 Дашборд     │  ← active: brand bg
│  👥 Пользователи│
│  💱 Биржи       │
│  💰 Выплаты     │
│  ⚙️ Настройки   │
│                  │
│                  │
│ ─────────────── │
│  [◀] Свернуть   │
└──────────────────┘
```

**Collapsed:** icons only (64px width), tooltip on hover

---

### Tabs

```yaml
Component: Tabs
File: components/navigation/Tabs.tsx
Usage: Exchange detail (Спот / Фьючерсы), History (Начисления / Выводы)
```

**Visual:**

```
┌──────────┬──────────┬──────────┐
│  Tab 1   │  Tab 2   │  Tab 3   │
│ (active) │          │          │
└──────────┴──────────┴──────────┘
│  Tab content                    │
```

Active: brand-600 underline (2px), bold text.
Animation: underline slides (200ms).

---

### Pagination

```yaml
Component: Pagination
File: components/navigation/Pagination.tsx
```

**Structure:**

```
[◀ Prev]  1  2  [3]  4  5  ...  20  [Next ▶]
```

Show: current ± 2, first, last, ellipsis.

---

## 5. Layout

### Container

```yaml
max-width: 1280px
padding: 16px (mobile), 24px (tablet), 32px (desktop)
margin: 0 auto
```

### Grid

```yaml
Columns: 12
Gap: 16px (mobile), 24px (desktop)
Breakpoints: sm(640), md(768), lg(1024), xl(1280)
```

### Stack

```yaml
Variants: vertical (default), horizontal
Gap: configurable (4, 8, 12, 16, 24, 32)
Align: start, center, end, stretch
```

---

## 6. Composite (Domain-Specific)

### ExchangeCard

```yaml
Component: ExchangeCard
File: components/domain/ExchangeCard.tsx
Usage: /exchanges page — карточка биржи
```

**Structure:**

```
┌────────────────────────────────────────┐
│  [Logo]  Exchange Name    [● Active]   │
│                                        │
│  Affiliate Rate: 50%                   │
│  Ваша доля: 60%                        │
│  Тип: API / Manual                     │
│                                        │
│  ┌────────────────────────────────┐    │
│  │   Ваш rebate: $45.67          │    │
│  │   Объём: $12,340              │    │
│  └────────────────────────────────┘    │
│                                        │
│  [Копировать ссылку]  [Подробнее →]    │
└────────────────────────────────────────┘
```

**States:**
- not_connected: CTA "Подключиться"
- pending: Badge "Ожидание подтверждения"
- connected: Stats + "Копировать ссылку"

---

### WithdrawalForm

```yaml
Component: WithdrawalForm
File: components/domain/WithdrawalForm.tsx
Usage: /withdrawals — форма вывода средств
```

**Fields:**
1. Amount (CurrencyInput) + MAX button
2. Wallet Address (Input with paste detection)
3. Network (Radio: TRC-20 / ERC-20)
4. Summary: Amount, Fee, You receive
5. CTA: "Вывести средства" (с confirmation modal)

**Validation:** inline, all fields required, see UF-007.

---

## 7. Компоненты — Матрица состояний

| Компонент | Default | Hover | Focus | Loading | Empty | Error | Disabled |
|-----------|---------|-------|-------|---------|-------|-------|----------|
| Button | ✅ | ✅ | ✅ | ✅ | — | — | ✅ |
| Input | ✅ | ✅ | ✅ | — | — | ✅ | ✅ |
| Card | ✅ | ✅ | — | ✅ | — | — | — |
| Table | ✅ | ✅ (row) | — | ✅ | ✅ | ✅ | — |
| KPICard | ✅ | ✅ | — | ✅ | ✅ | — | — |
| Chart | ✅ | ✅ (tooltip) | — | ✅ | ✅ | ✅ | — |
| Modal | ✅ | — | ✅ (trap) | ✅ | — | — | — |
| StatusBadge | ✅ | — | — | — | — | — | — |
| Toast | ✅ | ✅ (dismiss) | — | — | — | — | — |

---

*Документ создан: UI Agent | Дата: 2026-02-04*
