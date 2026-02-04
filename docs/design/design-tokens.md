---
title: "Design Tokens - CryptoRebate"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
status: "approved"
depends_on: "docs/design/design-foundations.md"
---

# Design Tokens -- CryptoRebate

> Экспортируемые дизайн-токены в формате CSS Custom Properties, JSON и Tailwind CSS config.
> Источник истины для всех значений -- `design-foundations.md`.

---

## 1. CSS Custom Properties

### 1.1 Цвета: Брендовые

```css
:root {
  /* ===== PRIMARY (Deep Blue) ===== */
  --color-primary-50:  #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-300: #93C5FD;
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-700: #1E40AF;
  --color-primary-800: #1E3A8A;
  --color-primary-900: #1E3050;
  --color-primary-950: #172554;

  /* ===== SECONDARY (Emerald Green) ===== */
  --color-secondary-50:  #ECFDF5;
  --color-secondary-100: #D1FAE5;
  --color-secondary-200: #A7F3D0;
  --color-secondary-300: #6EE7B7;
  --color-secondary-400: #34D399;
  --color-secondary-500: #10B981;
  --color-secondary-600: #059669;
  --color-secondary-700: #047857;
  --color-secondary-800: #065F46;
  --color-secondary-900: #064E3B;
  --color-secondary-950: #022C22;
}
```

### 1.2 Цвета: Крипто-акценты

```css
:root {
  /* ===== CRYPTO ACCENT ===== */
  --color-crypto-bitcoin:  #F7931A;
  --color-crypto-ethereum: #627EEA;
  --color-crypto-tether:   #26A17B;
  --color-crypto-bnb:      #F3BA2F;
  --color-crypto-solana:   #9945FF;
  --color-crypto-ton:      #0098EA;
}
```

### 1.3 Цвета: Семантические

```css
:root {
  /* ===== SUCCESS ===== */
  --color-success-light: #ECFDF5;
  --color-success-base:  #059669;
  --color-success-dark:  #065F46;

  /* ===== WARNING ===== */
  --color-warning-light: #FFFBEB;
  --color-warning-base:  #D97706;
  --color-warning-dark:  #92400E;

  /* ===== ERROR ===== */
  --color-error-light: #FEF2F2;
  --color-error-base:  #DC2626;
  --color-error-dark:  #991B1B;

  /* ===== INFO ===== */
  --color-info-light: #EFF6FF;
  --color-info-base:  #2563EB;
  --color-info-dark:  #1E40AF;
}
```

### 1.4 Цвета: Нейтральные

```css
:root {
  /* ===== NEUTRAL ===== */
  --color-neutral-0:   #FFFFFF;
  --color-neutral-50:  #F9FAFB;
  --color-neutral-100: #F3F4F6;
  --color-neutral-200: #E5E7EB;
  --color-neutral-300: #D1D5DB;
  --color-neutral-400: #9CA3AF;
  --color-neutral-500: #6B7280;
  --color-neutral-600: #4B5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1F2937;
  --color-neutral-900: #111827;
  --color-neutral-950: #030712;
}
```

### 1.5 Цвета: Dark Mode

```css
[data-theme="dark"] {
  /* ===== BACKGROUND ===== */
  --color-bg-primary:    #0F172A;
  --color-bg-secondary:  #1E293B;
  --color-bg-tertiary:   #334155;
  --color-bg-elevated:   #1E293B;

  /* ===== TEXT ===== */
  --color-text-primary:   #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-text-tertiary:  #64748B;
  --color-text-disabled:  #475569;

  /* ===== BORDERS ===== */
  --color-border-default: #334155;
  --color-border-subtle:  #1E293B;

  /* ===== BRAND (brighter on dark bg) ===== */
  --color-primary-brand:   #3B82F6;
  --color-secondary-brand: #10B981;
}
```

### 1.6 Типографика

```css
:root {
  /* ===== FONT FAMILIES ===== */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Courier New', monospace;

  /* ===== FONT SIZES ===== */
  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg:   1.125rem;  /* 18px */
  --text-xl:   1.25rem;   /* 20px */
  --text-2xl:  1.5rem;    /* 24px */
  --text-3xl:  1.875rem;  /* 30px */
  --text-4xl:  2.25rem;   /* 36px */

  /* ===== LINE HEIGHTS ===== */
  --leading-xs:   1rem;      /* 16px */
  --leading-sm:   1.25rem;   /* 20px */
  --leading-base: 1.5rem;    /* 24px */
  --leading-lg:   1.75rem;   /* 28px */
  --leading-xl:   1.75rem;   /* 28px */
  --leading-2xl:  2rem;      /* 32px */
  --leading-3xl:  2.25rem;   /* 36px */
  --leading-4xl:  2.5rem;    /* 40px */

  /* ===== FONT WEIGHTS ===== */
  --font-regular:  400;
  --font-medium:   500;
  --font-semibold: 600;
  --font-bold:     700;

  /* ===== LETTER SPACING ===== */
  --tracking-tight:  -0.025em;
  --tracking-normal:  0em;
  --tracking-wide:    0.025em;
  --tracking-mono:    0.02em;

  /* ===== FONT FEATURES ===== */
  --font-numeric: 'tnum' on, 'lnum' on;
}
```

### 1.7 Отступы (Spacing)

```css
:root {
  /* ===== SPACING SCALE ===== */
  --space-0:   0;
  --space-1:   0.25rem;  /* 4px  */
  --space-2:   0.5rem;   /* 8px  */
  --space-3:   0.75rem;  /* 12px */
  --space-4:   1rem;     /* 16px */
  --space-5:   1.25rem;  /* 20px */
  --space-6:   1.5rem;   /* 24px */
  --space-8:   2rem;     /* 32px */
  --space-10:  2.5rem;   /* 40px */
  --space-12:  3rem;     /* 48px */
  --space-16:  4rem;     /* 64px */
}
```

### 1.8 Тени (Shadows)

```css
:root {
  /* ===== SHADOWS ===== */
  --shadow-sm:  0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
```

### 1.9 Скругления (Border Radius)

```css
:root {
  /* ===== BORDER RADIUS ===== */
  --radius-sm:   0.25rem;   /* 4px   */
  --radius-md:   0.5rem;    /* 8px   */
  --radius-lg:   0.75rem;   /* 12px  */
  --radius-xl:   1rem;      /* 16px  */
  --radius-full: 9999px;
}
```

### 1.10 Z-Index

```css
:root {
  /* ===== Z-INDEX SCALE ===== */
  --z-base:     0;
  --z-card:     1;
  --z-dropdown: 10;
  --z-sticky:   20;
  --z-overlay:  30;
  --z-modal:    40;
  --z-popover:  50;
  --z-toast:    60;
  --z-tooltip:  70;
  --z-max:      100;
}
```

### 1.11 Breakpoints

```css
:root {
  /* ===== BREAKPOINTS (для JS, CSS использует @media) ===== */
  --breakpoint-xs:  0;
  --breakpoint-sm:  640px;
  --breakpoint-md:  768px;
  --breakpoint-lg:  1024px;
  --breakpoint-xl:  1280px;
  --breakpoint-2xl: 1536px;
}

/* Media queries */
/* @media (min-width: 640px)  { ... }  -- sm  */
/* @media (min-width: 768px)  { ... }  -- md  */
/* @media (min-width: 1024px) { ... }  -- lg  */
/* @media (min-width: 1280px) { ... }  -- xl  */
/* @media (min-width: 1536px) { ... }  -- 2xl */
```

### 1.12 Переходы и анимации (Transitions)

```css
:root {
  /* ===== DURATIONS ===== */
  --duration-fast:   150ms;
  --duration-normal: 200ms;
  --duration-slow:   300ms;
  --duration-slower: 500ms;

  /* ===== EASINGS ===== */
  --ease-default:  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce:   cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ===== TRANSITION PRESETS ===== */
  --transition-fast:   all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:   all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-colors: color, background-color, border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== REDUCED MOTION ===== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 1.13 Сетка (Grid)

```css
:root {
  /* ===== GRID ===== */
  --grid-columns: 12;
  --grid-max-width: 1280px;
  --grid-gutter: 1.5rem;  /* 24px */

  /* ===== CONTAINER ===== */
  --container-padding-mobile:  1rem;    /* 16px */
  --container-padding-tablet:  1.5rem;  /* 24px */
  --container-padding-desktop: 1.5rem;  /* 24px */
}
```

---

## 2. JSON-токены

### 2.1 Полный набор токенов (JSON)

```json
{
  "color": {
    "primary": {
      "50":  { "value": "#EFF6FF" },
      "100": { "value": "#DBEAFE" },
      "200": { "value": "#BFDBFE" },
      "300": { "value": "#93C5FD" },
      "400": { "value": "#60A5FA" },
      "500": { "value": "#3B82F6" },
      "600": { "value": "#2563EB" },
      "700": { "value": "#1E40AF" },
      "800": { "value": "#1E3A8A" },
      "900": { "value": "#1E3050" },
      "950": { "value": "#172554" }
    },
    "secondary": {
      "50":  { "value": "#ECFDF5" },
      "100": { "value": "#D1FAE5" },
      "200": { "value": "#A7F3D0" },
      "300": { "value": "#6EE7B7" },
      "400": { "value": "#34D399" },
      "500": { "value": "#10B981" },
      "600": { "value": "#059669" },
      "700": { "value": "#047857" },
      "800": { "value": "#065F46" },
      "900": { "value": "#064E3B" },
      "950": { "value": "#022C22" }
    },
    "neutral": {
      "0":   { "value": "#FFFFFF" },
      "50":  { "value": "#F9FAFB" },
      "100": { "value": "#F3F4F6" },
      "200": { "value": "#E5E7EB" },
      "300": { "value": "#D1D5DB" },
      "400": { "value": "#9CA3AF" },
      "500": { "value": "#6B7280" },
      "600": { "value": "#4B5563" },
      "700": { "value": "#374151" },
      "800": { "value": "#1F2937" },
      "900": { "value": "#111827" },
      "950": { "value": "#030712" }
    },
    "crypto": {
      "bitcoin":  { "value": "#F7931A" },
      "ethereum": { "value": "#627EEA" },
      "tether":   { "value": "#26A17B" },
      "bnb":      { "value": "#F3BA2F" },
      "solana":   { "value": "#9945FF" },
      "ton":      { "value": "#0098EA" }
    },
    "semantic": {
      "success": {
        "light": { "value": "#ECFDF5" },
        "base":  { "value": "#059669" },
        "dark":  { "value": "#065F46" }
      },
      "warning": {
        "light": { "value": "#FFFBEB" },
        "base":  { "value": "#D97706" },
        "dark":  { "value": "#92400E" }
      },
      "error": {
        "light": { "value": "#FEF2F2" },
        "base":  { "value": "#DC2626" },
        "dark":  { "value": "#991B1B" }
      },
      "info": {
        "light": { "value": "#EFF6FF" },
        "base":  { "value": "#2563EB" },
        "dark":  { "value": "#1E40AF" }
      }
    }
  },
  "typography": {
    "fontFamily": {
      "primary": { "value": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" },
      "mono":    { "value": "'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Courier New', monospace" }
    },
    "fontSize": {
      "xs":   { "value": "0.75rem" },
      "sm":   { "value": "0.875rem" },
      "base": { "value": "1rem" },
      "lg":   { "value": "1.125rem" },
      "xl":   { "value": "1.25rem" },
      "2xl":  { "value": "1.5rem" },
      "3xl":  { "value": "1.875rem" },
      "4xl":  { "value": "2.25rem" }
    },
    "lineHeight": {
      "xs":   { "value": "1rem" },
      "sm":   { "value": "1.25rem" },
      "base": { "value": "1.5rem" },
      "lg":   { "value": "1.75rem" },
      "xl":   { "value": "1.75rem" },
      "2xl":  { "value": "2rem" },
      "3xl":  { "value": "2.25rem" },
      "4xl":  { "value": "2.5rem" }
    },
    "fontWeight": {
      "regular":  { "value": 400 },
      "medium":   { "value": 500 },
      "semibold": { "value": 600 },
      "bold":     { "value": 700 }
    }
  },
  "spacing": {
    "0":  { "value": "0" },
    "1":  { "value": "0.25rem" },
    "2":  { "value": "0.5rem" },
    "3":  { "value": "0.75rem" },
    "4":  { "value": "1rem" },
    "5":  { "value": "1.25rem" },
    "6":  { "value": "1.5rem" },
    "8":  { "value": "2rem" },
    "10": { "value": "2.5rem" },
    "12": { "value": "3rem" },
    "16": { "value": "4rem" }
  },
  "shadow": {
    "sm": { "value": "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
    "md": { "value": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" },
    "lg": { "value": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)" },
    "xl": { "value": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }
  },
  "borderRadius": {
    "sm":   { "value": "0.25rem" },
    "md":   { "value": "0.5rem" },
    "lg":   { "value": "0.75rem" },
    "xl":   { "value": "1rem" },
    "full": { "value": "9999px" }
  },
  "zIndex": {
    "base":     { "value": 0 },
    "card":     { "value": 1 },
    "dropdown": { "value": 10 },
    "sticky":   { "value": 20 },
    "overlay":  { "value": 30 },
    "modal":    { "value": 40 },
    "popover":  { "value": 50 },
    "toast":    { "value": 60 },
    "tooltip":  { "value": 70 },
    "max":      { "value": 100 }
  },
  "breakpoint": {
    "xs":  { "value": "0" },
    "sm":  { "value": "640px" },
    "md":  { "value": "768px" },
    "lg":  { "value": "1024px" },
    "xl":  { "value": "1280px" },
    "2xl": { "value": "1536px" }
  },
  "transition": {
    "duration": {
      "fast":   { "value": "150ms" },
      "normal": { "value": "200ms" },
      "slow":   { "value": "300ms" },
      "slower": { "value": "500ms" }
    },
    "easing": {
      "default":  { "value": "cubic-bezier(0.4, 0, 0.2, 1)" },
      "in":       { "value": "cubic-bezier(0.4, 0, 1, 1)" },
      "out":      { "value": "cubic-bezier(0, 0, 0.2, 1)" },
      "in-out":   { "value": "cubic-bezier(0.4, 0, 0.2, 1)" },
      "bounce":   { "value": "cubic-bezier(0.34, 1.56, 0.64, 1)" }
    }
  }
}
```

---

## 3. YAML-токены

### 3.1 Компактный формат (YAML)

```yaml
tokens:
  color:
    primary:
      50: "#EFF6FF"
      100: "#DBEAFE"
      200: "#BFDBFE"
      300: "#93C5FD"
      400: "#60A5FA"
      500: "#3B82F6"
      600: "#2563EB"
      700: "#1E40AF"
      800: "#1E3A8A"
      900: "#1E3050"
      950: "#172554"

    secondary:
      50: "#ECFDF5"
      100: "#D1FAE5"
      200: "#A7F3D0"
      300: "#6EE7B7"
      400: "#34D399"
      500: "#10B981"
      600: "#059669"
      700: "#047857"
      800: "#065F46"
      900: "#064E3B"
      950: "#022C22"

    neutral:
      0: "#FFFFFF"
      50: "#F9FAFB"
      100: "#F3F4F6"
      200: "#E5E7EB"
      300: "#D1D5DB"
      400: "#9CA3AF"
      500: "#6B7280"
      600: "#4B5563"
      700: "#374151"
      800: "#1F2937"
      900: "#111827"
      950: "#030712"

    crypto:
      bitcoin: "#F7931A"
      ethereum: "#627EEA"
      tether: "#26A17B"
      bnb: "#F3BA2F"
      solana: "#9945FF"
      ton: "#0098EA"

    semantic:
      success: { light: "#ECFDF5", base: "#059669", dark: "#065F46" }
      warning: { light: "#FFFBEB", base: "#D97706", dark: "#92400E" }
      error:   { light: "#FEF2F2", base: "#DC2626", dark: "#991B1B" }
      info:    { light: "#EFF6FF", base: "#2563EB", dark: "#1E40AF" }

  typography:
    font_family:
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      mono: "'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Courier New', monospace"

    font_size:
      xs: "0.75rem"
      sm: "0.875rem"
      base: "1rem"
      lg: "1.125rem"
      xl: "1.25rem"
      2xl: "1.5rem"
      3xl: "1.875rem"
      4xl: "2.25rem"

    line_height:
      xs: "1rem"
      sm: "1.25rem"
      base: "1.5rem"
      lg: "1.75rem"
      xl: "1.75rem"
      2xl: "2rem"
      3xl: "2.25rem"
      4xl: "2.5rem"

    font_weight:
      regular: 400
      medium: 500
      semibold: 600
      bold: 700

  spacing:
    0: "0"
    1: "0.25rem"
    2: "0.5rem"
    3: "0.75rem"
    4: "1rem"
    5: "1.25rem"
    6: "1.5rem"
    8: "2rem"
    10: "2.5rem"
    12: "3rem"
    16: "4rem"

  shadow:
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"

  border_radius:
    sm: "0.25rem"
    md: "0.5rem"
    lg: "0.75rem"
    xl: "1rem"
    full: "9999px"

  z_index:
    base: 0
    card: 1
    dropdown: 10
    sticky: 20
    overlay: 30
    modal: 40
    popover: 50
    toast: 60
    tooltip: 70
    max: 100

  breakpoint:
    xs: "0"
    sm: "640px"
    md: "768px"
    lg: "1024px"
    xl: "1280px"
    2xl: "1536px"

  transition:
    duration:
      fast: "150ms"
      normal: "200ms"
      slow: "300ms"
      slower: "500ms"
    easing:
      default: "cubic-bezier(0.4, 0, 0.2, 1)"
      in: "cubic-bezier(0.4, 0, 1, 1)"
      out: "cubic-bezier(0, 0, 0.2, 1)"
      in-out: "cubic-bezier(0.4, 0, 0.2, 1)"
      bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)"
```

---

## 4. Tailwind CSS Config

### 4.1 Фрагмент конфигурации `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Переключение через data-theme или class
  theme: {
    extend: {
      // ===== COLORS =====
      colors: {
        primary: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1E3050',
          950: '#172554',
          DEFAULT: '#1E40AF',
        },
        secondary: {
          50:  '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
          DEFAULT: '#059669',
        },
        neutral: {
          0:   '#FFFFFF',
          50:  '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        crypto: {
          bitcoin:  '#F7931A',
          ethereum: '#627EEA',
          tether:   '#26A17B',
          bnb:      '#F3BA2F',
          solana:   '#9945FF',
          ton:      '#0098EA',
        },
        success: {
          light: '#ECFDF5',
          DEFAULT: '#059669',
          dark: '#065F46',
        },
        warning: {
          light: '#FFFBEB',
          DEFAULT: '#D97706',
          dark: '#92400E',
        },
        error: {
          light: '#FEF2F2',
          DEFAULT: '#DC2626',
          dark: '#991B1B',
        },
        info: {
          light: '#EFF6FF',
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
        },
      },

      // ===== FONT FAMILY =====
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Courier New', 'monospace'],
      },

      // ===== FONT SIZE =====
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1rem' }],
        'sm':   ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem',     { lineHeight: '1.5rem' }],
        'lg':   ['1.125rem', { lineHeight: '1.75rem' }],
        'xl':   ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl':  ['1.5rem',   { lineHeight: '2rem' }],
        '3xl':  ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl':  ['2.25rem',  { lineHeight: '2.5rem' }],
      },

      // ===== SPACING (extends default) =====
      spacing: {
        '0':  '0',
        '1':  '0.25rem',
        '2':  '0.5rem',
        '3':  '0.75rem',
        '4':  '1rem',
        '5':  '1.25rem',
        '6':  '1.5rem',
        '8':  '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
      },

      // ===== BORDER RADIUS =====
      borderRadius: {
        'sm':   '0.25rem',
        'md':   '0.5rem',
        'lg':   '0.75rem',
        'xl':   '1rem',
        'full': '9999px',
      },

      // ===== BOX SHADOW =====
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },

      // ===== Z-INDEX =====
      zIndex: {
        'base':     '0',
        'card':     '1',
        'dropdown': '10',
        'sticky':   '20',
        'overlay':  '30',
        'modal':    '40',
        'popover':  '50',
        'toast':    '60',
        'tooltip':  '70',
        'max':      '100',
      },

      // ===== MAX WIDTH (container) =====
      maxWidth: {
        'container': '1280px',
      },

      // ===== TRANSITION =====
      transitionDuration: {
        'fast':   '150ms',
        'normal': '200ms',
        'slow':   '300ms',
        'slower': '500ms',
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in':      'cubic-bezier(0.4, 0, 1, 1)',
        'out':     'cubic-bezier(0, 0, 0.2, 1)',
        'in-out':  'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // ===== GRID =====
      gridTemplateColumns: {
        'layout-sidebar': '240px 1fr',
        'layout-sidebar-lg': '280px 1fr',
      },
    },

    // ===== SCREENS (breakpoints) =====
    screens: {
      'xs':  '0px',
      'sm':  '640px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

export default config;
```

---

## 5. Утилитарные CSS-классы

### 5.1 Типографика для крипто-данных

```css
/* Числа с фиксированной шириной (для таблиц) */
.font-tabular {
  font-feature-settings: 'tnum' on, 'lnum' on;
}

/* Крипто-адрес */
.crypto-address {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-mono);
  color: var(--color-neutral-600);
}

/* Хэш транзакции */
.tx-hash {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-neutral-500);
}

/* Процент рибейта */
.rebate-percent {
  font-family: var(--font-primary);
  font-weight: var(--font-bold);
  color: var(--color-secondary-600);
}

/* Сумма (с tabular nums) */
.amount {
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  font-feature-settings: 'tnum' on, 'lnum' on;
}

/* Положительная сумма */
.amount-positive {
  color: var(--color-success-base);
}

/* Отрицательная сумма */
.amount-negative {
  color: var(--color-error-base);
}
```

### 5.2 Focus Ring

```css
/* Стандартный focus ring */
.focus-ring {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Focus ring для тёмного фона */
.focus-ring-light {
  outline: 2px solid var(--color-primary-300);
  outline-offset: 2px;
}
```

---

## 6. Таблица соответствия токенов

### 6.1 Быстрая справка: CSS var -- Tailwind class -- JSON path

```
| CSS Variable             | Tailwind Class     | JSON Path                    |
|--------------------------|--------------------|------------------------------|
| --color-primary-700      | bg-primary-700     | color.primary.700            |
| --color-secondary-600    | text-secondary-600 | color.secondary.600          |
| --color-neutral-50       | bg-neutral-50      | color.neutral.50             |
| --color-success-base     | text-success        | color.semantic.success.base  |
| --color-crypto-bitcoin   | text-crypto-bitcoin | color.crypto.bitcoin         |
| --text-base              | text-base           | typography.fontSize.base     |
| --font-semibold          | font-semibold       | typography.fontWeight.semibold|
| --space-4                | p-4                 | spacing.4                    |
| --shadow-md              | shadow-md           | shadow.md                    |
| --radius-md              | rounded-md          | borderRadius.md              |
| --z-modal                | z-modal             | zIndex.modal                 |
| --duration-fast           | duration-fast       | transition.duration.fast     |
```

---

## 7. Интеграция токенов

### 7.1 Установка шрифтов

```html
<!-- В head: Google Fonts (Inter + JetBrains Mono) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### 7.2 Подключение иконок

```bash
# Установка Lucide React
npm install lucide-react
```

```tsx
// Использование
import { Wallet, Percent, TrendingUp, CheckCircle2 } from 'lucide-react';

// Размеры через props
<Wallet size={20} strokeWidth={2} />
<Percent size={24} strokeWidth={2} className="text-secondary-600" />
```

### 7.3 Подключение CSS-токенов

```css
/* globals.css или tokens.css */
@import url('./design-tokens.css');

/* Базовые стили */
body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-base);
  color: var(--color-neutral-700);
  background-color: var(--color-neutral-0);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--color-neutral-800);
  font-weight: var(--font-bold);
}
```

---

*Документ создан: UI Agent | Дата: 2026-02-04*
