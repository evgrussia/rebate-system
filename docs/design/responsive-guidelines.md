---
title: "Responsive Guidelines — CryptoRebate"
created_by: "UI Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Responsive Guidelines — CryptoRebate

## 1. Обзор

Данный документ определяет правила адаптивной верстки для всех продуктов CryptoRebate:

| Продукт | Технология | Приоритетные устройства |
|---------|-----------|------------------------|
| Web Dashboard (Trader) | React + Tailwind CSS | Desktop, Tablet, Mobile |
| Admin Panel | React + Tailwind CSS | Desktop, Tablet |
| Landing Page | React + Tailwind CSS | Mobile, Desktop, Tablet |
| Telegram Bot | Telegram Bot API | Mobile (нативный интерфейс) |

**Подход:** Mobile-first. Базовые стили пишутся для мобильных устройств, расширяются через медиа-запросы вверх.

---

## 2. Система брейкпоинтов

Используются стандартные брейкпоинты Tailwind CSS:

| Токен | Минимальная ширина | Целевые устройства | Tailwind-префикс |
|-------|--------------------|--------------------|-------------------|
| `sm` | 640px | Крупные телефоны (landscape) | `sm:` |
| `md` | 768px | Планшеты (portrait) | `md:` |
| `lg` | 1024px | Планшеты (landscape), мелкие ноутбуки | `lg:` |
| `xl` | 1280px | Ноутбуки, десктопы | `xl:` |
| `2xl` | 1536px | Большие мониторы | `2xl:` |

### Конфигурация Tailwind

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}
```

### Диапазоны устройств

```
< 640px       — Мобильные (base, без префикса)
640–767px     — sm: крупные мобильные
768–1023px    — md: планшеты
1024–1279px   — lg: малые десктопы
1280–1535px   — xl: десктопы
>= 1536px     — 2xl: большие экраны
```

---

## 3. Mobile-first подход

Все стили пишутся от мобильной версии и расширяются вверх. Это означает:

1. Базовые стили (без префикса) = стили для мобильных устройств
2. Каждый следующий брейкпоинт добавляет или переопределяет стили
3. Медиа-запросы используют `min-width`

### Пример принципа

```html
<!-- Mobile-first: base = 1 колонка, на md = 2, на lg = 3 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- элементы -->
</div>
```

### Антипаттерн (desktop-first)

```html
<!-- НЕПРАВИЛЬНО: не использовать desktop-first -->
<div class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
  <!-- Это технически работает, но нарушает принцип -->
</div>
```

---

## 4. Адаптация макетов по компонентам

### 4.1. Trader Dashboard — KPI-карточки

KPI-карточки показывают ключевые метрики: общий кэшбек, активные биржи, объем торгов, ожидающие выплаты.

| Брейкпоинт | Колонки | Поведение |
|------------|---------|-----------|
| base (< 640px) | 1 | Одна карточка на строку, полная ширина |
| sm (640px) | 2 | Две карточки в ряд |
| lg (1024px) | 4 | Все четыре карточки в один ряд |
| 2xl (1536px) | 4 | Увеличенные внутренние отступы |

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
  <!-- KPI Card: Общий кэшбек -->
  <div class="bg-white rounded-xl p-4 lg:p-6 shadow-sm">
    <span class="text-sm text-gray-500">Общий кэшбек</span>
    <p class="text-2xl lg:text-3xl font-bold text-green-600 mt-1">$12,450</p>
    <span class="text-xs text-green-500">+12.5% за месяц</span>
  </div>

  <!-- KPI Card: Активные биржи -->
  <div class="bg-white rounded-xl p-4 lg:p-6 shadow-sm">
    <span class="text-sm text-gray-500">Активные биржи</span>
    <p class="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">5</p>
    <span class="text-xs text-gray-400">из 12 доступных</span>
  </div>

  <!-- ... остальные карточки аналогично -->
</div>
```

### 4.2. Страница бирж (Exchanges)

Карточки бирж отображаются в адаптивной сетке.

| Брейкпоинт | Колонки | Поведение |
|------------|---------|-----------|
| base (< 640px) | 1 | Одна карточка на строку |
| sm (640px) | 2 | Две карточки в ряд |
| lg (1024px) | 3 | Три карточки в ряд |
| xl (1280px) | 3 | Увеличенные отступы, max-width контейнера |
| 2xl (1536px) | 4 | Четыре карточки (опционально) |

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
  <!-- Exchange Card -->
  <div class="bg-white rounded-xl border border-gray-200 overflow-hidden
              hover:shadow-md transition-shadow">
    <div class="p-4 lg:p-5">
      <div class="flex items-center gap-3">
        <img src="/exchanges/binance.svg"
             alt="Binance"
             class="w-10 h-10 lg:w-12 lg:h-12" />
        <div>
          <h3 class="font-semibold text-gray-900">Binance</h3>
          <span class="text-sm text-green-600">Кэшбек до 40%</span>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-100 px-4 py-3 bg-gray-50">
      <button class="w-full py-2 text-sm font-medium text-indigo-600
                     hover:text-indigo-700">
        Подключить
      </button>
    </div>
  </div>
</div>
```

### 4.3. Таблицы данных

Таблицы (история транзакций, реферальные выплаты, админ-данные) требуют особого подхода на мобильных.

**Стратегия:** горизонтальный скролл на планшетах, карточный вид на мобильных.

| Брейкпоинт | Подход |
|------------|--------|
| base (< 768px) | Карточный вид (каждая строка = карточка) |
| md (768px) | Горизонтальный скролл таблицы |
| lg (1024px) | Полноценная таблица |

```html
<!-- Десктопная таблица (скрыта на мобильных) -->
<div class="hidden md:block overflow-x-auto">
  <table class="w-full min-w-[600px]">
    <thead>
      <tr class="border-b border-gray-200">
        <th class="text-left py-3 px-4 text-sm font-medium text-gray-500">Дата</th>
        <th class="text-left py-3 px-4 text-sm font-medium text-gray-500">Биржа</th>
        <th class="text-right py-3 px-4 text-sm font-medium text-gray-500">Объем</th>
        <th class="text-right py-3 px-4 text-sm font-medium text-gray-500">Кэшбек</th>
        <th class="text-left py-3 px-4 text-sm font-medium text-gray-500">Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="py-3 px-4 text-sm">04.02.2026</td>
        <td class="py-3 px-4 text-sm">Binance</td>
        <td class="py-3 px-4 text-sm text-right">$45,200</td>
        <td class="py-3 px-4 text-sm text-right text-green-600">$180.80</td>
        <td class="py-3 px-4">
          <span class="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
            Зачислено
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Мобильный карточный вид (скрыт на десктопе) -->
<div class="md:hidden space-y-3">
  <div class="bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex justify-between items-start mb-2">
      <span class="text-sm font-medium text-gray-900">Binance</span>
      <span class="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
        Зачислено
      </span>
    </div>
    <div class="grid grid-cols-2 gap-2 text-sm">
      <div>
        <span class="text-gray-500">Дата</span>
        <p class="font-medium">04.02.2026</p>
      </div>
      <div>
        <span class="text-gray-500">Объем</span>
        <p class="font-medium">$45,200</p>
      </div>
      <div>
        <span class="text-gray-500">Кэшбек</span>
        <p class="font-medium text-green-600">$180.80</p>
      </div>
    </div>
  </div>
</div>
```

### 4.4. Навигация

| Брейкпоинт | Тип навигации | Описание |
|------------|---------------|----------|
| base (< 1024px) | Гамбургер-меню | Оверлейное меню, кнопка 44x44px |
| lg (1024px) | Горизонтальный top bar | Полноценная навигация в шапке |

```html
<!-- Навигация -->
<nav class="bg-white border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Логотип -->
      <div class="flex-shrink-0">
        <img src="/logo.svg" alt="CryptoRebate"
             class="h-8 w-auto" />
      </div>

      <!-- Десктопное меню -->
      <div class="hidden lg:flex items-center gap-6">
        <a href="/dashboard" class="text-sm font-medium text-gray-900
                                    hover:text-indigo-600">Дашборд</a>
        <a href="/exchanges" class="text-sm font-medium text-gray-500
                                    hover:text-indigo-600">Биржи</a>
        <a href="/referral" class="text-sm font-medium text-gray-500
                                   hover:text-indigo-600">Рефералы</a>
        <a href="/withdraw" class="text-sm font-medium text-gray-500
                                   hover:text-indigo-600">Вывод</a>
      </div>

      <!-- Гамбургер (мобильный) -->
      <button class="lg:hidden p-2 rounded-md text-gray-500
                     hover:text-gray-700 hover:bg-gray-100
                     min-w-[44px] min-h-[44px]
                     flex items-center justify-center"
              aria-label="Открыть меню">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Мобильное оверлейное меню -->
  <div class="lg:hidden" id="mobile-menu">
    <div class="px-4 py-3 space-y-1">
      <a href="/dashboard" class="block py-3 px-3 rounded-md text-base font-medium
                                  text-gray-900 hover:bg-gray-50
                                  min-h-[44px] flex items-center">
        Дашборд
      </a>
      <a href="/exchanges" class="block py-3 px-3 rounded-md text-base font-medium
                                  text-gray-500 hover:bg-gray-50
                                  min-h-[44px] flex items-center">
        Биржи
      </a>
      <!-- ... остальные пункты -->
    </div>
  </div>
</nav>
```

### 4.5. Форма вывода средств (Withdrawal)

Форма вывода всегда отображается в одну колонку для предотвращения ошибок при заполнении финансовых данных.

| Брейкпоинт | Поведение |
|------------|-----------|
| Все | Одна колонка, max-width: 480px |
| base (< 640px) | Полная ширина экрана с отступами |
| sm+ (640px) | Центрированная форма с max-width |

```html
<div class="max-w-lg mx-auto px-4 sm:px-6 py-6">
  <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Вывод средств</h2>

  <form class="space-y-5">
    <!-- Выбор валюты -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Валюта</label>
      <select class="w-full rounded-lg border border-gray-300 px-4 py-3
                     text-base focus:ring-2 focus:ring-indigo-500
                     min-h-[44px]">
        <option>USDT (TRC-20)</option>
        <option>USDT (ERC-20)</option>
        <option>BTC</option>
      </select>
    </div>

    <!-- Сумма -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Сумма</label>
      <input type="number"
             class="w-full rounded-lg border border-gray-300 px-4 py-3
                    text-base focus:ring-2 focus:ring-indigo-500
                    min-h-[44px]"
             placeholder="0.00" />
      <p class="mt-1 text-sm text-gray-500">Доступно: $1,240.50</p>
    </div>

    <!-- Адрес кошелька -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Адрес кошелька
      </label>
      <input type="text"
             class="w-full rounded-lg border border-gray-300 px-4 py-3
                    text-base font-mono focus:ring-2 focus:ring-indigo-500
                    min-h-[44px]"
             placeholder="T..." />
    </div>

    <!-- Кнопка отправки -->
    <button type="submit"
            class="w-full bg-indigo-600 text-white font-medium
                   rounded-lg py-3 px-4
                   hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2
                   focus:ring-indigo-500
                   min-h-[48px] text-base">
      Вывести средства
    </button>
  </form>
</div>
```

### 4.6. Admin Panel — Сайдбар

| Брейкпоинт | Состояние сайдбара | Описание |
|------------|-------------------|----------|
| base (< 1024px) | Оверлей | Скрыт, открывается по нажатию гамбургера, оверлей с затемнением |
| lg (1024px) | Свернутый | Только иконки, ширина 64px |
| xl (1280px) | Полный | Иконки + текст, ширина 256px |

```html
<div class="flex h-screen">
  <!-- Overlay фон (только мобильный) -->
  <div class="fixed inset-0 bg-black/50 z-40 lg:hidden"
       id="sidebar-overlay"></div>

  <!-- Сайдбар -->
  <aside class="fixed inset-y-0 left-0 z-50
                w-64 bg-gray-900 text-white
                transform -translate-x-full lg:translate-x-0
                lg:static lg:w-16 xl:w-64
                transition-all duration-200">
    <!-- Логотип -->
    <div class="h-16 flex items-center px-4 xl:px-6 border-b border-gray-800">
      <img src="/logo-white.svg" alt="CryptoRebate"
           class="h-8 w-auto hidden xl:block" />
      <img src="/logo-icon.svg" alt="CR"
           class="h-8 w-8 xl:hidden" />
    </div>

    <!-- Навигация -->
    <nav class="mt-4 px-2 space-y-1">
      <a href="/admin/dashboard"
         class="flex items-center gap-3 px-3 py-2.5
                rounded-lg hover:bg-gray-800 transition-colors
                min-h-[44px]">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor"
             viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"/>
        </svg>
        <span class="text-sm font-medium hidden xl:inline lg:hidden">
          Дашборд
        </span>
        <!-- На мобильном оверлее текст виден (w-64) -->
        <span class="text-sm font-medium lg:hidden">Дашборд</span>
      </a>

      <!-- ... остальные пункты меню аналогично -->
    </nav>
  </aside>

  <!-- Основной контент -->
  <main class="flex-1 overflow-y-auto bg-gray-50 lg:ml-0">
    <!-- Содержимое страницы -->
  </main>
</div>
```

---

## 5. Touch-цели (Touch Targets)

### Минимальные размеры

| Элемент | Минимальный размер | Класс Tailwind |
|---------|-------------------|----------------|
| Кнопки | 44 x 44px | `min-w-[44px] min-h-[44px]` |
| Ссылки в навигации | 44px высота | `min-h-[44px]` |
| Иконки-кнопки | 44 x 44px | `p-2.5` (при иконке 24px) |
| Поля ввода | 44px высота | `py-3` (при стандартном шрифте) |
| Чекбоксы / радио | 44 x 44px (зона нажатия) | Обёртка с padding |
| Элементы списка | 44px минимальная высота | `min-h-[44px]` |

### Отступы между интерактивными элементами

```yaml
Минимальный отступ: 8px
Рекомендуемый отступ: 12px
Для критических действий (удаление, вывод средств): 16px
```

### Пример увеличения зоны нажатия

```html
<!-- Иконка-кнопка с достаточной зоной -->
<button class="relative p-2.5 rounded-lg hover:bg-gray-100
               min-w-[44px] min-h-[44px]
               flex items-center justify-center"
        aria-label="Закрыть">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round"
          stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
  </svg>
</button>

<!-- Чекбокс с увеличенной зоной нажатия -->
<label class="flex items-center gap-3 py-2 cursor-pointer min-h-[44px]">
  <input type="checkbox"
         class="w-5 h-5 rounded border-gray-300
                text-indigo-600 focus:ring-indigo-500" />
  <span class="text-sm text-gray-700">Запомнить адрес кошелька</span>
</label>
```

---

## 6. Типографическая шкала

### Базовые размеры по брейкпоинтам

| Элемент | base | sm | md | lg | xl |
|---------|------|----|----|----|-----|
| Основной текст | 14px | 14px | 14px | 16px | 16px |
| Заголовок H1 | 24px | 28px | 30px | 36px | 36px |
| Заголовок H2 | 20px | 22px | 24px | 28px | 30px |
| Заголовок H3 | 18px | 18px | 20px | 22px | 24px |
| Мелкий текст | 12px | 12px | 12px | 14px | 14px |
| Подписи (caption) | 11px | 11px | 12px | 12px | 12px |
| KPI числа | 24px | 28px | 28px | 36px | 40px |

### Tailwind-классы типографики

```html
<!-- H1: Заголовок страницы -->
<h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
  Мой дашборд
</h1>

<!-- H2: Заголовок секции -->
<h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
  История транзакций
</h2>

<!-- H3: Подзаголовок -->
<h3 class="text-lg lg:text-xl font-semibold text-gray-900">
  Последние начисления
</h3>

<!-- Основной текст -->
<p class="text-sm lg:text-base text-gray-600">
  Описание или информационный текст.
</p>

<!-- KPI числовое значение -->
<span class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
  $12,450
</span>

<!-- Мелкий текст / подписи -->
<span class="text-xs lg:text-sm text-gray-500">
  Последнее обновление: 5 мин назад
</span>
```

### Межстрочный интервал

```yaml
Заголовки: leading-tight (1.25)
Основной текст: leading-normal (1.5) или leading-relaxed (1.625)
Мелкий текст: leading-normal (1.5)
KPI: leading-none (1)
```

---

## 7. Изображения и ассеты

### Адаптивные изображения

```html
<!-- Логотип: адаптивный размер -->
<img src="/logo.svg" alt="CryptoRebate"
     class="h-6 sm:h-7 lg:h-8 w-auto" />

<!-- Логотип биржи -->
<img src="/exchanges/binance.svg" alt="Binance"
     class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
            rounded-lg object-contain" />

<!-- Иллюстрация на Landing Page -->
<img src="/hero-illustration.webp"
     srcset="/hero-illustration-sm.webp 640w,
             /hero-illustration-md.webp 1024w,
             /hero-illustration-lg.webp 1536w"
     sizes="(max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
     alt="CryptoRebate платформа"
     class="w-full h-auto rounded-xl"
     loading="lazy" />
```

### Размеры логотипов

| Контекст | Размер (base) | Размер (lg+) | Формат |
|----------|--------------|-------------|--------|
| Навигация | 24px (h-6) | 32px (h-8) | SVG |
| Мобильное меню | 28px (h-7) | — | SVG |
| Landing hero | 32px (h-8) | 40px (h-10) | SVG |
| Footer | 20px (h-5) | 24px (h-6) | SVG |
| Favicon | 32x32px | 32x32px | ICO/PNG |
| OG Image | — | 1200x630px | PNG/JPG |

### Иконки бирж

```yaml
Формат: SVG (предпочтительно) или PNG с 2x retina
Размеры:
  - В списке: 32x32px (base), 40x40px (lg)
  - В карточке: 40x40px (base), 48x48px (lg)
  - В деталях: 48x48px (base), 64x64px (lg)
Скругление: rounded-lg (8px)
Фон: белый с border для светлых иконок
```

### Правила оптимизации

```yaml
Форматы:
  - Иконки и логотипы: SVG
  - Фотографии: WebP с JPEG fallback
  - Иллюстрации: SVG или WebP
  - Скриншоты: WebP

Lazy loading:
  - Все изображения ниже первого экрана: loading="lazy"
  - Изображения первого экрана: loading="eager" (по умолчанию)

Placeholder:
  - Использовать skeleton-анимацию при загрузке
  - aspect-ratio для предотвращения layout shift
```

---

## 8. Примеры сеток

### 8.1. Стандартная контентная сетка

```html
<!-- Контейнер с адаптивными отступами -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Контент -->
</div>
```

### 8.2. Сетка карточек: поведение по брейкпоинтам

```html
<!--
  base:  1 колонка  |  [████████████]
  sm:    2 колонки   |  [█████] [█████]
  lg:    3 колонки   |  [███] [███] [███]
  xl:    4 колонки   |  [██] [██] [██] [██]
-->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-4 sm:gap-5 lg:gap-6">
  <div class="bg-white rounded-xl p-4 shadow-sm">Карточка 1</div>
  <div class="bg-white rounded-xl p-4 shadow-sm">Карточка 2</div>
  <div class="bg-white rounded-xl p-4 shadow-sm">Карточка 3</div>
  <div class="bg-white rounded-xl p-4 shadow-sm">Карточка 4</div>
</div>
```

### 8.3. Сетка с боковой панелью (Dashboard)

```html
<!--
  base:  Сайдбар скрыт, контент на всю ширину
  lg:    Свернутый сайдбар (64px) + контент
  xl:    Полный сайдбар (256px) + контент
-->
<div class="flex min-h-screen">
  <!-- Сайдбар: см. раздел 4.6 -->
  <aside class="hidden lg:block lg:w-16 xl:w-64 flex-shrink-0">
    <!-- ... -->
  </aside>

  <!-- Основной контент -->
  <main class="flex-1 min-w-0">
    <div class="p-4 sm:p-6 lg:p-8">
      <!-- Сетка дашборда -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- KPI блок: вся ширина -->
        <div class="lg:col-span-12">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- KPI карточки -->
          </div>
        </div>

        <!-- График: 8 колонок на десктопе -->
        <div class="lg:col-span-8">
          <div class="bg-white rounded-xl p-4 lg:p-6 shadow-sm">
            <!-- График -->
          </div>
        </div>

        <!-- Боковая информация: 4 колонки на десктопе -->
        <div class="lg:col-span-4">
          <div class="bg-white rounded-xl p-4 lg:p-6 shadow-sm">
            <!-- Последние транзакции -->
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
```

### 8.4. Двухколоночный лейаут (Landing Page секция)

```html
<!--
  base:  Стек (текст сверху, изображение снизу)
  lg:    Две колонки (текст слева, изображение справа)
-->
<section class="py-12 sm:py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <!-- Текстовый блок -->
      <div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Максимальный кэшбек с каждой сделки
        </h2>
        <p class="mt-4 text-base lg:text-lg text-gray-600 leading-relaxed">
          Подключите биржевой аккаунт и получайте возврат комиссий автоматически.
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/register"
             class="inline-flex items-center justify-center
                    px-6 py-3 rounded-lg bg-indigo-600 text-white
                    font-medium hover:bg-indigo-700
                    min-h-[48px] text-base">
            Начать бесплатно
          </a>
          <a href="/how-it-works"
             class="inline-flex items-center justify-center
                    px-6 py-3 rounded-lg border border-gray-300
                    text-gray-700 font-medium hover:bg-gray-50
                    min-h-[48px] text-base">
            Как это работает
          </a>
        </div>
      </div>

      <!-- Изображение -->
      <div class="order-first lg:order-last">
        <img src="/hero.webp" alt="CryptoRebate дашборд"
             class="w-full h-auto rounded-xl shadow-lg"
             loading="eager" />
      </div>
    </div>
  </div>
</section>
```

### 8.5. Визуальная схема поведения колонок

```
БРЕЙКПОИНТ:    base (<640)     sm (640)        lg (1024)       xl (1280)

KPI Cards:     [████████████]  [█████] [█████]  [██] [██] [██] [██]
               [████████████]  [█████] [█████]  (4 в ряд)
               [████████████]
               [████████████]

Exchanges:     [████████████]  [█████] [█████]  [███] [███] [███]
               [████████████]  [█████] [█████]  [███] [███] [███]
               [████████████]
               [████████████]

Dashboard:     [████████████]  [████████████]   [████████] [████]
(график +      [████████████]  [████████████]   (8/12 + 4/12)
транзакции)

Withdrawal:    [████████████]  [████████████]   [████████████]
               (всегда одна    (центрировано,   (центрировано,
                колонка)        max-w-lg)        max-w-lg)
```

---

## 9. Специфичные паттерны

### Модальные окна

```html
<!-- Модальное окно: адаптивная ширина -->
<div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
  <!-- Оверлей -->
  <div class="fixed inset-0 bg-black/50"></div>

  <!-- Контент модалки -->
  <div class="relative bg-white
              w-full sm:max-w-md sm:rounded-xl
              rounded-t-xl sm:rounded-xl
              max-h-[90vh] overflow-y-auto
              p-4 sm:p-6">
    <!-- На мобильных: прижато к низу, округлено сверху -->
    <!-- На десктопе: центрировано, округлено полностью -->
  </div>
</div>
```

### Уведомления / Toast

```html
<!-- Toast: позиция зависит от устройства -->
<div class="fixed z-50
            bottom-4 left-4 right-4
            sm:bottom-6 sm:left-auto sm:right-6 sm:w-96">
  <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-4
              flex items-start gap-3">
    <!-- Содержимое -->
  </div>
</div>
```

### Bottom Sheet (только мобильные)

```html
<!-- Bottom Sheet для действий на мобильных -->
<div class="fixed inset-x-0 bottom-0 z-50 sm:hidden">
  <div class="bg-white rounded-t-2xl shadow-xl p-4 pb-safe">
    <div class="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
    <div class="space-y-2">
      <button class="w-full text-left px-4 py-3 rounded-lg
                     hover:bg-gray-50 min-h-[44px]
                     flex items-center gap-3">
        Подробнее
      </button>
      <button class="w-full text-left px-4 py-3 rounded-lg
                     hover:bg-gray-50 min-h-[44px]
                     flex items-center gap-3 text-red-600">
        Отключить биржу
      </button>
    </div>
  </div>
</div>
```

---

## 10. Telegram Bot — особенности

Telegram Bot использует нативный UI Telegram, но есть WebApp-вставки:

```yaml
Telegram WebApp:
  Ширина: фиксирована клиентом Telegram
  Высота: управляется через Telegram.WebApp.expand()
  Темная тема: поддержка через CSS-переменные Telegram
  Шрифты: системные (не загружать кастомные)
  Кнопки: использовать Telegram.WebApp.MainButton

Рекомендации:
  - Макет всегда одноколоночный
  - Минимальный padding: 16px
  - Размер шрифта: не менее 14px
  - Touch-цели: не менее 44x44px
  - Цвета: наследовать из Telegram.WebApp.themeParams
```

---

## 11. Чеклист тестирования

### Мобильные устройства (< 640px)

```yaml
Визуальная проверка:
  [ ] Все элементы умещаются на экране без горизонтального скролла
  [ ] Текст читаемый, не менее 14px
  [ ] Кнопки и ссылки не менее 44x44px
  [ ] Навигация через гамбургер-меню работает
  [ ] Формы заполняются удобно (нет перекрытия клавиатурой)
  [ ] Модальные окна отображаются как bottom sheet
  [ ] Таблицы в карточном виде
  [ ] Изображения масштабируются корректно

Функциональная проверка:
  [ ] Свайпы не конфликтуют с навигацией браузера
  [ ] Фиксированные элементы не перекрывают контент
  [ ] Safe area учтена (для устройств с notch)
  [ ] Landscape ориентация не ломает макет

Устройства для тестирования:
  - iPhone SE (375px) — минимальная ширина
  - iPhone 14 (390px) — стандартная ширина
  - iPhone 14 Pro Max (430px) — крупный экран
  - Samsung Galaxy S21 (360px) — Android
  - Pixel 7 (412px) — Android
```

### Планшеты (640px — 1023px)

```yaml
Визуальная проверка:
  [ ] Сетки корректно переключаются (2 колонки)
  [ ] Навигация: гамбургер или горизонтальная (по брейкпоинту)
  [ ] Таблицы с горизонтальным скроллом работают
  [ ] Модальные окна центрированы
  [ ] Формы не растянуты на всю ширину (max-width)
  [ ] Боковая панель Admin: оверлейная

Ориентация:
  [ ] Portrait: проверить при md (768px)
  [ ] Landscape: проверить при lg (1024px)

Устройства для тестирования:
  - iPad Mini (768px) — portrait
  - iPad Air (820px) — portrait
  - iPad Pro 11" (834px) — portrait
  - iPad Air landscape (1180px) — landscape
```

### Десктоп (1024px+)

```yaml
Визуальная проверка:
  [ ] Полноценная горизонтальная навигация
  [ ] Сетки: 3-4 колонки для карточек
  [ ] Таблицы полноразмерные
  [ ] Admin сайдбар: свернутый (lg) или полный (xl)
  [ ] Максимальная ширина контейнера (max-w-7xl) работает
  [ ] Типографика увеличена для больших экранов
  [ ] Hover-эффекты работают

Разрешения для тестирования:
  - 1024 x 768 — малый десктоп
  - 1280 x 800 — ноутбук
  - 1440 x 900 — стандартный десктоп
  - 1920 x 1080 — Full HD
  - 2560 x 1440 — 2K / большие мониторы
```

### Кросс-браузерное тестирование

```yaml
Обязательные браузеры:
  - Chrome (последние 2 версии)
  - Firefox (последние 2 версии)
  - Safari (последние 2 версии, включая iOS Safari)
  - Edge (последняя версия)

Дополнительно:
  - Samsung Internet (для Android)
  - Telegram WebView (для Telegram WebApp)
```

### Проверка производительности

```yaml
Метрики:
  [ ] LCP (Largest Contentful Paint) < 2.5s на мобильных
  [ ] CLS (Cumulative Layout Shift) < 0.1
  [ ] FID (First Input Delay) < 100ms
  [ ] Нет layout shift при загрузке изображений
  [ ] Нет FOUC (Flash of Unstyled Content)

Инструменты:
  - Chrome DevTools (Device Mode)
  - Lighthouse
  - PageSpeed Insights
  - BrowserStack / Sauce Labs
```

---

## 12. Утилитарные классы Tailwind

### Часто используемые адаптивные паттерны

```html
<!-- Скрытие/показ по брейкпоинтам -->
<div class="hidden lg:block">Только десктоп</div>
<div class="lg:hidden">Только мобильный/планшет</div>
<div class="hidden sm:block lg:hidden">Только планшет</div>

<!-- Адаптивные отступы -->
<div class="p-4 sm:p-6 lg:p-8">
  <!-- Увеличивающиеся padding -->
</div>

<!-- Адаптивный flex-direction -->
<div class="flex flex-col sm:flex-row gap-4">
  <!-- Вертикальный стек на мобильных, горизонтальный на sm+ -->
</div>

<!-- Адаптивный текст по центру/левому краю -->
<div class="text-center lg:text-left">
  <!-- Центрировано на мобильных, по левому краю на десктопе -->
</div>

<!-- Адаптивная ширина -->
<div class="w-full sm:w-auto">
  <!-- Полная ширина на мобильных, авто на sm+ -->
</div>

<!-- Фиксированный нижний бар (мобильный) -->
<div class="fixed bottom-0 inset-x-0 bg-white border-t p-4
            sm:hidden safe-area-inset-bottom">
  <button class="w-full py-3 bg-indigo-600 text-white rounded-lg
                 min-h-[48px]">
    Действие
  </button>
</div>
```

### Safe Area для мобильных устройств

```css
/* Добавить в глобальные стили */
.safe-area-inset-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

.safe-area-inset-top {
  padding-top: env(safe-area-inset-top, 0px);
}
```

---

*Документ создан: UI Agent | Дата: 2026-02-04*
