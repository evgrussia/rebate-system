---
title: "Business Model Canvas — CryptoRebate"
created_by: "Business-Analyst Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Business Model Canvas: CryptoRebate

> Визуальное описание бизнес-модели по методологии Alexander Osterwalder

---

## Canvas Overview

```
┌──────────────────┬──────────────────┬──────────────────┬──────────────────┬──────────────────┐
│                  │                  │                  │                  │                  │
│  KEY PARTNERS    │  KEY ACTIVITIES  │  VALUE           │  CUSTOMER        │  CUSTOMER        │
│                  │                  │  PROPOSITIONS    │  RELATIONSHIPS   │  SEGMENTS        │
│  - 11 крипто-    │  - Интеграция    │                  │                  │                  │
│    бирж          │    с биржами     │  Для трейдеров:  │  - Self-service  │  - Active        │
│  - Инфлюенсеры   │  - Расчёт и     │  Cashback с      │    ЛК (web+TG)   │    Traders       │
│  - Платёжные     │    выплата       │  комиссий на     │  - Push/TG       │    ($10-500K/мес)│
│    провайдеры    │    rebate        │  11+ биржах в    │    уведомления   │  - Newcomers     │
│  - Hosting       │  - Привлечение   │  одном ЛК        │  - Support       │    ($0.5-10K/мес)│
│    providers     │    трейдеров     │                  │    (TG + email)  │  - Pro/Prop      │
│                  │  - Мониторинг    │  Для бизнеса:    │  - Индивид.      │    ($500K-5M/мес)│
│                  │    и reconcile   │  Маржа от        │    условия       │                  │
│                  │                  │  affiliate       │    (для Pro)     │                  │
├──────────────────┴──────────────────┤  commissions     ├──────────────────┴──────────────────┤
│                                     │                  │                                     │
│  KEY RESOURCES                      │                  │  CHANNELS                           │
│                                     │                  │                                     │
│  - Exchange adapter platform        │                  │  - Web ЛК (React)                   │
│  - Rebate Calculator engine         │                  │  - Telegram Bot (полный ЛК)         │
│  - Пользовательская база            │                  │  - Landing Page (SEO)               │
│  - Affiliate agreements (11 бирж)   │                  │  - Инфлюенсеры (TG, YouTube, X)     │
│  - Brand & Trust                    │                  │  - Контент-маркетинг                │
│                                     │                  │                                     │
├─────────────────────────────────────┴──────────────────┴─────────────────────────────────────┤
│                                                                                              │
│  COST STRUCTURE                                        REVENUE STREAMS                       │
│                                                                                              │
│  - Серверная инфраструктура ($200-500/мес)              - Маржа = Gross Rebate - Trader       │
│  - Разработка и поддержка ($0 founder-dev)                Payout (5-70% от affiliate rebate) │
│  - Маркетинг / привлечение ($5-15 CAC)                 - Avg. margin $4.32/трейдер/мес       │
│  - Выплаты трейдерам (50-95% от gross rebate)          - Scale: $4.3K/мес при 1K трейдеров   │
│  - Транзакционные расходы (blockchain fees)             - Scale: $21.6K/мес при 5K трейдеров  │
│                                                                                              │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Customer Segments (Сегменты клиентов)

### Segment A: Active Crypto Traders (Основной)

```yaml
Размер: ~500K-2M глобально
Объём торгов: $10K - $500K / мес
Биржи: 2-5 одновременно
Возраст: 22-40
География: Global (СНГ, Азия, Европа — приоритет)
Каналы: Telegram, Twitter/X, Discord, YouTube
Характеристика: Торгуют ежедневно, чувствительны к комиссиям
Willingness to pay: Бесплатно (мы зарабатываем на марже)
```

### Segment B: Newcomers (Начинающие)

```yaml
Размер: ~5-20M глобально (входящий поток)
Объём торгов: $500 - $10K / мес
Биржи: 1-2
Мотивация: "Ничего не стоит попробовать"
Ценность: Ещё не зарегистрированы на биржах → идеальны для ref-ссылок
```

### Segment C: Professional / Prop Traders

```yaml
Размер: ~10-50K глобально
Объём торгов: $500K - $5M+ / мес
Мотивация: Каждый процент = тысячи долларов
Требования: API, индивидуальные условия, VIP ставки
```

---

## 2. Value Propositions (Ценностные предложения)

### Для трейдеров

| # | Ценность | Описание |
|---|----------|----------|
| VP-1 | **Cashback с комиссий** | Возврат 30-95% affiliate commission от каждой сделки |
| VP-2 | **11 бирж в одном ЛК** | Единая точка для управления rebate на всех биржах |
| VP-3 | **Прозрачная статистика** | Real-time дашборд: объёмы, комиссии, начисления |
| VP-4 | **Простота** | Зарегистрируйся → скопируй ссылку → торгуй → получай |
| VP-5 | **Telegram ЛК** | Полноценный кабинет в TG — удобно для крипто-аудитории |
| VP-6 | **Быстрые выплаты** | Auto-approve < $100, вывод в криптовалюте |

### Для бизнеса (инвесторы/партнёры)

| # | Ценность | Описание |
|---|----------|----------|
| VP-B1 | **Масштабируемая модель** | Маржа растёт линейно с количеством трейдеров |
| VP-B2 | **Низкий CAC** | $5 целевой CAC через контент + инфлюенсеров |
| VP-B3 | **Высокий LTV/CAC** | 6.2x — здоровая unit economics |
| VP-B4 | **Незанятая ниша** | Нет доминирующего игрока в крипто-rebate агрегации |

---

## 3. Channels (Каналы)

### Каналы привлечения (Acquisition)

| # | Канал | Тип | Приоритет | CAC |
|---|-------|-----|-----------|-----|
| CH-1 | **Telegram-бот + каналы** | Owned + Earned | P0 | $2-5 |
| CH-2 | **SEO / Landing Page** | Owned | P0 | $3-8 |
| CH-3 | **Инфлюенсеры (TG, YT, X)** | Paid/Earned | P0 | $5-15 |
| CH-4 | **Контент-маркетинг** (гайды, калькулятор) | Owned | P1 | $1-3 |
| CH-5 | **Крипто-форумы и Reddit** | Earned | P1 | $2-5 |
| CH-6 | **Реклама (Telegram Ads, Twitter)** | Paid | P2 | $10-25 |

### Каналы доставки ценности (Delivery)

| # | Канал | Описание |
|---|-------|----------|
| CH-D1 | **Web ЛК** (React) | Полный дашборд, статистика, вывод |
| CH-D2 | **Telegram Bot** | Полноценный ЛК внутри Telegram |
| CH-D3 | **Email / TG уведомления** | Начисления, статусы выводов, алерты |

---

## 4. Customer Relationships (Отношения с клиентами)

| Тип | Описание | Инструмент |
|-----|----------|------------|
| **Self-service** | Трейдер самостоятельно управляет аккаунтом | Web ЛК + TG Bot |
| **Automated** | Автоматический расчёт и уведомления о rebate | Celery + Push |
| **Personal (VIP)** | Индивидуальные условия для Pro-трейдеров | Admin + Telegram-чат |
| **Community** | Крипто-чаты, Discord/TG каналы | Telegram канал CryptoRebate |

### Retention Mechanisms

```yaml
- Уведомление о первом начислении (Aha Moment)
- Регулярные push о начислениях ("Вам начислено $X.XX")
- Прогрессивная шкала доли (больше объёмов → выше % rebate)
- Удобный вывод с auto-approve
- Подключение дополнительных бирж (больше бирж → больше rebate)
```

---

## 5. Revenue Streams (Потоки дохода)

### Основной поток: Маржа от affiliate commissions

```yaml
Формула:
  Net_Revenue = Gross_Rebate − Trader_Payout

  Gross_Rebate = Trading_Volume × Exchange_Fee × Affiliate_Rate
  Trader_Payout = Gross_Rebate × Trader_Share_Pct (30-95%)
  Service_Margin = Gross_Rebate × (1 − Trader_Share_Pct) = 5-70%

Средние показатели:
  Avg. Trading Volume / trader:    $30,000 / мес
  Avg. Exchange Fee:               0.08%
  Avg. Affiliate Rate:             45%
  Avg. Gross Rebate / trader:      $10.80 / мес
  Avg. Trader Share:               60%
  Avg. Service Margin / trader:    $4.32 / мес
```

### Потенциальные дополнительные потоки (V2.0+)

| # | Поток | Описание | Горизонт |
|---|-------|----------|----------|
| RS-2 | Premium подписка | Расширенная аналитика, VIP ставки | V2.0 |
| RS-3 | Affiliate / Referral fee | Комиссия за привлечение пользователей другими пользователями | V1.5 |
| RS-4 | White-label | Продажа платформы другим affiliate-маркетологам | V2.0+ |

---

## 6. Key Resources (Ключевые ресурсы)

| # | Ресурс | Тип | Описание |
|---|--------|-----|----------|
| KR-1 | **Exchange Adapter Platform** | Technical | Unified интеграция с 11 биржами (4 API + 7 manual) |
| KR-2 | **Rebate Calculator Engine** | Technical | Автоматический расчёт с учётом 23 бизнес-правил |
| KR-3 | **Affiliate Agreements** | Legal/Business | Действующие партнёрские соглашения с 11 биржами |
| KR-4 | **Пользовательская база** | Network Effect | Больше трейдеров → лучше условия от бирж |
| KR-5 | **Brand & Trust** | Intangible | Репутация надёжного сервиса в крипто-сообществе |
| KR-6 | **Данные торговых паттернов** | Data Asset | Аналитика по объёмам, поведению, предпочтениям |

---

## 7. Key Activities (Ключевые деятельности)

| # | Активность | Частота | Ответственный |
|---|-----------|---------|---------------|
| KA-1 | **Интеграция с биржами** (API, адаптеры, синхронизация) | Постоянно | Dev Team |
| KA-2 | **Расчёт и выплата rebate** | Автоматически (каждые 4-6ч) | Backend (Celery) |
| KA-3 | **Привлечение трейдеров** | Постоянно | Marketing |
| KA-4 | **Мониторинг условий бирж** (ставки, API изменения) | Еженедельно | Ops / Admin |
| KA-5 | **Reconciliation** (сверка данных с биржами) | Еженедельно | Finance / Admin |
| KA-6 | **Поддержка пользователей** | Постоянно | Support |
| KA-7 | **Развитие продукта** (новые фичи, улучшения) | Постоянно | Product + Dev |

---

## 8. Key Partnerships (Ключевые партнёрства)

| # | Партнёр | Тип | Ценность для нас | Ценность для партнёра |
|---|---------|-----|-------------------|----------------------|
| KP-1 | **11 криптобирж** | Supplier / Revenue source | Affiliate commissions, данные | Новые трейдеры, объёмы |
| KP-2 | **Крипто-инфлюенсеры** | Distribution | Трафик трейдеров | Монетизация аудитории |
| KP-3 | **Hosting провайдеры** | Infrastructure | VPS, CDN, Database | Оплата |
| KP-4 | **Blockchain networks** | Infrastructure | Транзакции выплат (USDT TRC-20, ERC-20) | Gas fees |

### Тип отношений с биржами

```yaml
Tier 1 (API-интеграция, глубокое партнёрство):
  - BingX (Broker API, sourceKey)
  - Bybit (OpenAPI V5, Broker ID)
  - OKX (Broker Program, Tag)
  - Weex (Affiliate API)

Tier 2 (Dashboard + Semi-auto):
  - MEXC (affiliate portal)
  - Bitget (affiliate dashboard)
  - Binance (affiliate dashboard)

Tier 3 (Manual / CSV):
  - KuCoin, HTX, Bitmart, BloFin
```

---

## 9. Cost Structure (Структура затрат)

### Фиксированные затраты

| # | Статья | Сумма/мес | Примечание |
|---|--------|-----------|------------|
| FC-1 | **Серверы** (VPS, DB, CDN) | $200-500 | Масштабируется с нагрузкой |
| FC-2 | **Домен + SSL** | $10-20 | Годовая подписка |
| FC-3 | **Мониторинг** (Grafana, Sentry) | $0-50 | Self-hosted + free tiers |
| FC-4 | **Analytics** (Amplitude) | $0-100 | Free tier до 10M events |
| | **ИТОГО фиксированные** | **$210-670** | |

### Переменные затраты

| # | Статья | Per unit | Примечание |
|---|--------|----------|------------|
| VC-1 | **Выплаты трейдерам** | 50-95% gross rebate | Основная статья |
| VC-2 | **Blockchain fees** (withdrawals) | $0.5-2 / tx | USDT TRC-20 дешевле |
| VC-3 | **Маркетинг / CAC** | $5-15 / трейдер | Инфлюенсеры, контент |
| VC-4 | **Support** | $0.1-0.5 / трейдер/мес | При автоматизации |

### Breakeven Analysis

```yaml
Фиксированные затраты:     ~$500 / мес
Маржа per trader:           $4.32 / мес
Breakeven:                  $500 / $4.32 = 116 активных трейдеров

Timeline to breakeven:
  Месяц 3 (запуск):     ~50 трейдеров   → -$284/мес
  Месяц 5:              ~150 трейдеров  → +$148/мес ← BREAKEVEN
  Месяц 8:              ~500 трейдеров  → +$1,660/мес
  Месяц 12:             ~1,500 трейдеров → +$5,980/мес
```

---

## 10. Competitive Advantages (Конкурентные преимущества)

### Unfair Advantages

```yaml
1. Количество бирж: 11 (конкуренты: 3-6)
2. Telegram ЛК: Единственный сервис с полным ЛК в TG
3. Crypto-only фокус: Не размываемся на Forex
4. Global + RU: Двуязычный (конкуренты — EN only)
5. Прозрачность: Real-time дашборд с полной статистикой
```

### Moat Strategy

```
Время →

Phase 1 (0-6 мес):  Speed to market + Feature differentiation
                     11 бирж + TG Bot → уникальное предложение

Phase 2 (6-12 мес): Network effects + Data moat
                     Больше трейдеров → лучше условия → больше трейдеров

Phase 3 (12+ мес):  Brand + Switching costs
                     Репутация + накопленная статистика + привычка
```

---

## 11. Key Metrics (Ключевые метрики)

| Метрика | Target (6 мес) | Target (12 мес) |
|---------|-----------------|------------------|
| Active Traders | 500 | 2,000 |
| Monthly TVV (Total Trading Volume) | $15M | $60M |
| Monthly Gross Revenue | $5,400 | $21,600 |
| Monthly Net Profit | $2,400 | $14,600 |
| LTV/CAC | > 5x | > 6x |
| D30 Retention | > 40% | > 50% |
| NPS | > 40 | > 50 |

---

## 12. Risks & Mitigations (summary)

| Риск | Вероятность | Impact | Mitigation |
|------|------------|--------|------------|
| Биржа меняет ставки | Высокая | Средний | Мониторинг + диверсификация 11 бирж |
| Биржа закрывает affiliate | Низкая | Высокий | Multi-exchange, быстрое переключение |
| Регуляторные ограничения | Средняя | Высокий | Юридический мониторинг, гео-ограничения |
| Конкуренты копируют модель | Средняя | Средний | Speed to market, brand, data moat |
| Низкий retention | Средняя | Высокий | UX, быстрые выплаты, уведомления |

---

*Документ создан: Business-Analyst Agent | Дата: 2026-02-04*
