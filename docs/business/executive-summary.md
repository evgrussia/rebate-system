---
title: "Executive Summary — CryptoRebate"
created_by: "Product Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Executive Summary: CryptoRebate

> Краткое описание бизнеса для инвесторов, партнёров и стейкхолдеров

---

## Elevator Pitch

> **CryptoRebate** — это агрегатор rebate-программ 11 криптовалютных бирж, который позволяет трейдерам получать cashback с торговых комиссий через единый личный кабинет (web + Telegram). Сервис зарабатывает на марже между affiliate commission от бирж и выплатой трейдерам.

---

## 1. Проблема

Криптотрейдеры ежемесячно платят значительные суммы в виде торговых комиссий. При активной торговле на нескольких биржах расходы могут составлять сотни и тысячи долларов.

**Ключевые болевые точки:**

- **Не знают о rebate** — большинство трейдеров не используют affiliate-программы бирж
- **Нет единой точки** — для получения rebate на каждой бирже нужно отдельно разбираться
- **Непрозрачность** — трейдеры не видят, сколько переплачивают комиссий
- **Сложность** — affiliate-программы ориентированы на маркетологов, а не на трейдеров

---

## 2. Решение

**CryptoRebate** объединяет affiliate-программы 11 криптобирж в одном сервисе:

```
Трейдер регистрируется → Получает реферальные ссылки для 11 бирж →
→ Торгует как обычно → Автоматически получает cashback с комиссий →
→ Выводит заработанное в криптовалюте
```

**Ключевые преимущества:**
- **11 бирж** в одном кабинете (MEXC, Bitget, BingX, Weex, Bybit, Binance, Bitmart, OKX, KuCoin, HTX, BloFin)
- **Telegram-бот** как полноценный личный кабинет — уникально на рынке
- **Cashback 30-95%** от affiliate commission (настраиваемо)
- **Прозрачная статистика** в реальном времени
- **Быстрые выплаты** в криптовалюте (auto-approve < $100)

---

## 3. Рынок

```yaml
TAM (Total Addressable Market):
  Глобальные комиссии CEX:     $10-30B / год
  Affiliate commissions (45%):  $4-15B / год

SAM (Serviceable):
  11 целевых бирж, доступные трейдеры: $400M - $2.2B / год

SOM (Obtainable):
  Year 1: $40K - $1.1M
  Year 3: $400K - $11M
```

**Рыночная динамика:**
- Крипторынок растёт 15-25% YoY
- 500M+ крипто-пользователей глобально
- Telegram Mini Apps бум — наш TG-бот в тренде
- Нет доминирующего игрока в нише крипто-rebate агрегации

---

## 4. Бизнес-модель

### Как мы зарабатываем

```
Биржа платит нам affiliate commission (40-70% от комиссий трейдера)
    → Мы выплачиваем трейдеру 50-95% от полученного
    → Оставшиеся 5-50% — наша маржа
```

### Unit Economics

| Метрика | Значение |
|---------|----------|
| Avg. Trading Volume / trader | $30,000 / мес |
| Avg. Gross Rebate / trader | $10.80 / мес |
| Service Margin / trader | $4.32 / мес |
| CAC (Cost of Acquisition) | $5.00 |
| LTV (Lifetime Value) | $23.90 |
| **LTV/CAC** | **4.8x** |
| Payback Period | 1.5 мес |
| Breakeven | 116 активных трейдеров |

---

## 5. Конкуренция

| Параметр | CryptoRebate | PaybackFX | FxCosmo | HighFxRebates |
|----------|-------------|-----------|---------|---------------|
| Крипто-биржи | **11** | ~6 | 6 | ~3 |
| Telegram ЛК | **Да** | Нет | Нет | Нет |
| Crypto-only | **Да** | Нет (Forex+) | Да | Нет (Forex+) |
| Real-time дашборд | **Да** | Частично | Нет | Нет |
| Авто-выплаты | **Да** | Частично | Нет | Нет |

**Наши differentiators:** 11 бирж, TG-бот ЛК, crypto-only фокус, прозрачность.

---

## 6. Финансовые прогнозы (Base Case)

| Показатель | M6 | M12 | M18 | M24 |
|-----------|-----|------|------|------|
| Active Traders | 103 | 530 | 2,097 | 8,047 |
| MRR | $1,112 | $5,724 | $22,648 | $86,908 |
| Monthly Profit | -$351 | +$165 | +$2,969 | +$14,903 |

```yaml
Breakeven:          Месяц 11
Year 1 Net P&L:    -$1,894 (инвестиционная фаза)
Year 2 Net P&L:    +$61,713
Cumulative (24m):   +$59,819
```

---

## 7. Технологический стек

| Компонент | Технология |
|-----------|-----------|
| Frontend | React |
| Backend | Django / Python |
| Database | PostgreSQL |
| Bot | Telegram Bot API (python-telegram-bot) |
| Tasks | Celery + Redis |
| Analytics | Amplitude + Grafana + Sentry |
| Hosting | VPS (Ubuntu 24.04) |

**Архитектурные решения:**
- Unified Exchange Adapter Pattern — единый интерфейс для 11 бирж
- 4 биржи с API-интеграцией (BingX, Bybit, OKX, Weex) + 7 manual/CSV
- JWT-аутентификация + Telegram OAuth
- Auto-approve payouts < $100

---

## 8. Roadmap

```
M1-M3: MVP
  └── 11 бирж, Web ЛК, TG Bot, Admin Panel
       Rebate Calculator, Payout Engine

M4-M5: V1.0 Stable
  └── Polish UX, Landing Page, SEO, i18n (RU+EN)

M6-M8: V1.5 Growth
  └── VIP программа, расширенная аналитика, новые биржи

M9-M12: V2.0 Scale
  └── Mobile App, Public API, White-label
```

---

## 9. Команда

```yaml
Founder/Developer:
  Роль: Full-stack разработка, продуктовые решения, бизнес-стратегия
  Навыки: React, Django/Python, PostgreSQL, Telegram Bot API
  Commitment: Full-time

Запланированный найм:
  M4: Frontend developer (part-time)
  M8: Growth marketer
  M12: Support specialist
```

---

## 10. Запрос инвестиций

### Вариант A: Bootstrap

```yaml
Требуется: $6,000 (собственные средства)
Runway: 12 месяцев до breakeven
Pros: 100% equity, полный контроль
Cons: Медленный рост (12 нед MVP)
```

### Вариант B: Angel Round

```yaml
Требуется: $50,000
Использование:
  - Наём разработчика (6 мес):   $24,000
  - Маркетинг:                    $15,000
  - Инфраструктура:               $6,000
  - Legal:                        $3,000
  - Buffer:                       $2,000

Equity: 10-15%
Valuation: $350K-$500K pre-money
Expected outcome: 5,000 traders, $25K/мес profit к M12
```

---

## 11. Ключевые риски и митигация

| Риск | Митигация |
|------|----------|
| Биржи меняют ставки | Диверсификация (11 бирж), мониторинг, гибкие адаптеры |
| Регуляторные ограничения | Юридический мониторинг, geo-блокировка если нужно |
| Низкий retention | UX-оптимизация, быстрые выплаты, уведомления, Aha Moment |
| Конкуренты | Speed to market, TG-бот differentiator, data moat |

---

## Контакты

```yaml
Проект: CryptoRebate
Статус: Pre-launch (Discovery phase complete)
Website: [В разработке]
Telegram: [В разработке]
```

---

*Документ создан: Product Agent | Дата: 2026-02-04*
