---
title: "Financial Model — CryptoRebate"
created_by: "Business-Analyst Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Financial Model: CryptoRebate

> Детальная финансовая модель с прогнозами на 24 месяца

---

## 1. Допущения (Assumptions)

### 1.1 Рыночные допущения

```yaml
Macro:
  crypto_market_growth_yoy: 15-25%          # Рост объёмов торгов на CEX
  avg_cex_daily_volume: "$50-80B"           # Глобальный дневной объём
  affiliate_market_share: "40-50%"           # Доля affiliate от общих комиссий

Target Market (SAM):
  total_addressable_traders: "500K-2M"       # Active crypto traders глобально
  achievable_market_share_y1: "0.01-0.05%"   # Реалистичная доля Y1
  achievable_market_share_y2: "0.05-0.2%"    # Реалистичная доля Y2
```

### 1.2 Продуктовые допущения

```yaml
Per Trader (средние значения):
  avg_trading_volume_month: $30,000          # Средний объём торгов
  avg_exchange_fee_rate: 0.08%               # Средняя комиссия (maker+taker)
  avg_affiliate_commission_rate: 45%         # Средний % affiliate от комиссии
  avg_trader_share: 60%                      # Средняя доля трейдера
  avg_gross_rebate_per_trader: $10.80        # Валовый rebate с трейдера
  avg_service_margin_per_trader: $4.32       # Маржа сервиса с трейдера

Growth:
  monthly_signup_rate_initial: 30            # Новых регистраций/мес (первые 3 мес)
  monthly_signup_growth_rate: 25%            # Рост регистраций MoM
  signup_to_active_conversion: 65%           # Конверсия из регистрации в активного
  monthly_churn_rate: 8%                     # Ежемесячный отток

Payouts:
  avg_withdrawal_per_trader: $35/мес         # Средний вывод
  blockchain_fee_per_tx: $1.00               # Средняя fee (TRC-20)
  avg_withdrawals_per_trader_month: 0.8      # Среднее кол-во выводов/мес
```

### 1.3 Затратные допущения

```yaml
Fixed Costs (monthly):
  hosting_infrastructure: $300               # VPS, DB, CDN
  monitoring_tools: $30                      # Grafana, Sentry (self-hosted)
  analytics: $0                              # Amplitude free tier
  domain_ssl: $15                            # Домен + SSL
  misc: $55                                  # Разное
  total_fixed: $400                          # Стартовые фиксированные

Variable Costs:
  cac_per_trader: $5                         # Стоимость привлечения
  blockchain_fee: $1.00                      # Per withdrawal transaction
  support_per_trader_month: $0.20            # Поддержка (автоматизированная)

Scaling Fixed Costs:                         # Рост фиксированных при масштабе
  at_500_traders: $600                       # Больше нагрузки на сервер
  at_1000_traders: $1,000                    # Dedicated DB, доп. инфра
  at_3000_traders: $1,800                    # Больше мощностей, наём
  at_5000_traders: $2,500                    # Полная инфраструктура
```

---

## 2. Unit Economics

### 2.1 Per Trader Economics

```
┌─────────────────────────────────────────────────────────────┐
│                    UNIT ECONOMICS                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Trading Volume / month:           $30,000                  │
│  × Exchange Fee Rate:              × 0.08%                  │
│  = Total Fees Paid:                = $24.00                 │
│                                                             │
│  × Affiliate Commission Rate:      × 45%                   │
│  = Gross Rebate (наш доход):       = $10.80                │
│                                                             │
│  − Trader Share (60%):             − $6.48                  │
│  = Service Margin:                 = $4.32 / мес / трейдер  │
│                                                             │
│  − Variable Cost per trader:       − $0.20 (support)        │
│  − Blockchain fee (0.8 tx × $1):   − $0.80                  │
│  = Net Margin per trader:          = $3.32 / мес            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CAC:                $5.00                                  │
│  Monthly net margin: $3.32                                  │
│  Payback period:     1.5 месяца                             │
│                                                             │
│  Avg. lifetime:      12 мес (при 8% monthly churn)          │
│  Effective retention multiplier: 0.60                       │
│  LTV = $3.32 × 12 × 0.60 = $23.90                          │
│  LTV/CAC = 4.8x ✅                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Sensitivity Analysis (по trader_share)

| Trader Share | Gross Rebate | Trader Payout | Service Margin | LTV | LTV/CAC |
|-------------|-------------|---------------|----------------|-----|---------|
| 30% | $10.80 | $3.24 | **$7.56** | $47.78 | 9.6x |
| 40% | $10.80 | $4.32 | **$6.48** | $40.95 | 8.2x |
| 50% | $10.80 | $5.40 | **$5.40** | $34.13 | 6.8x |
| **60% (default)** | **$10.80** | **$6.48** | **$4.32** | **$23.90** | **4.8x** |
| 70% | $10.80 | $7.56 | **$3.24** | $17.05 | 3.4x |
| 80% | $10.80 | $8.64 | **$2.16** | $10.18 | 2.0x |
| 90% | $10.80 | $9.72 | **$1.08** | $3.30 | 0.7x |
| 95% | $10.80 | $10.26 | **$0.54** | $0.88 | 0.2x |

> **Вывод:** Оптимальный диапазон trader_share = 50-70%. При >80% модель неустойчива.

### 2.3 Sensitivity Analysis (по trading volume)

| Avg Volume/мес | Gross Rebate | Service Margin | Breakeven traders |
|---------------|-------------|----------------|-------------------|
| $10,000 | $3.60 | $1.44 | 347 |
| $20,000 | $7.20 | $2.88 | 174 |
| **$30,000** | **$10.80** | **$4.32** | **116** |
| $50,000 | $18.00 | $7.20 | 69 |
| $100,000 | $36.00 | $14.40 | 35 |
| $500,000 | $180.00 | $72.00 | 7 |

---

## 3. Прогноз на 24 месяца

### 3.1 Growth Model

```yaml
Модель роста:
  Type: Compound growth with churn

  New_Users(t) = Base_Signups × (1 + growth_rate)^t
  Active_Users(t) = Active_Users(t-1) + New_Active(t) - Churned(t)
  New_Active(t) = New_Users(t) × conversion_rate
  Churned(t) = Active_Users(t-1) × churn_rate
```

### 3.2 Месячный P&L (Profit & Loss)

| Месяц | Новые reg. | Новые active | Churn | Active | Gross Rev. | Trader Payouts | Infra | Marketing | Net Profit |
|-------|-----------|-------------|-------|--------|------------|----------------|-------|-----------|------------|
| **M1** | 0 | 0 | 0 | 0 | $0 | $0 | $400 | $0 | **-$400** |
| **M2** | 0 | 0 | 0 | 0 | $0 | $0 | $400 | $0 | **-$400** |
| **M3** | 30 | 20 | 0 | 20 | $216 | $130 | $400 | $150 | **-$464** |
| **M4** | 38 | 25 | 2 | 43 | $465 | $279 | $400 | $190 | **-$404** |
| **M5** | 47 | 31 | 3 | 71 | $767 | $460 | $400 | $235 | **-$328** |
| **M6** | 59 | 38 | 6 | 103 | $1,112 | $668 | $500 | $295 | **-$351** |
| **M7** | 74 | 48 | 8 | 143 | $1,545 | $927 | $500 | $370 | **-$252** |
| **M8** | 92 | 60 | 11 | 192 | $2,074 | $1,244 | $600 | $460 | **-$230** |
| **M9** | 115 | 75 | 15 | 252 | $2,722 | $1,633 | $600 | $575 | **-$86** |
| **M10** | 144 | 94 | 20 | 326 | $3,521 | $2,112 | $800 | $720 | **-$111** |
| **M11** | 180 | 117 | 26 | 417 | $4,504 | $2,702 | $800 | $900 | **+$102** |
| **M12** | 225 | 146 | 33 | 530 | $5,724 | $3,434 | $1,000 | $1,125 | **+$165** |
| | | | | | | | | | |
| **M13** | 281 | 183 | 42 | 671 | $7,247 | $4,348 | $1,000 | $1,405 | **+$494** |
| **M14** | 351 | 228 | 54 | 845 | $9,126 | $5,476 | $1,200 | $1,755 | **+$695** |
| **M15** | 439 | 285 | 68 | 1,062 | $11,470 | $6,882 | $1,200 | $2,195 | **+$1,193** |
| **M16** | 549 | 357 | 85 | 1,334 | $14,407 | $8,644 | $1,500 | $2,745 | **+$1,518** |
| **M17** | 686 | 446 | 107 | 1,673 | $18,068 | $10,841 | $1,500 | $3,430 | **+$2,297** |
| **M18** | 858 | 558 | 134 | 2,097 | $22,648 | $13,589 | $1,800 | $4,290 | **+$2,969** |
| **M19** | 1,072 | 697 | 168 | 2,626 | $28,361 | $17,017 | $1,800 | $5,360 | **+$4,184** |
| **M20** | 1,340 | 871 | 210 | 3,287 | $35,500 | $21,300 | $2,200 | $6,700 | **+$5,300** |
| **M21** | 1,675 | 1,089 | 263 | 4,113 | $44,420 | $26,652 | $2,200 | $8,375 | **+$7,193** |
| **M22** | 2,094 | 1,361 | 329 | 5,145 | $55,566 | $33,340 | $2,500 | $10,470 | **+$9,256** |
| **M23** | 2,618 | 1,702 | 412 | 6,435 | $69,498 | $41,699 | $3,000 | $13,090 | **+$11,709** |
| **M24** | 3,272 | 2,127 | 515 | 8,047 | $86,908 | $52,145 | $3,500 | $16,360 | **+$14,903** |

### 3.3 Кумулятивные показатели

```yaml
Year 1 (M1-M12):
  Total Signups:           1,004
  Active Traders (M12):    530
  Total Revenue:           $22,650
  Total Costs:             $24,544
  Net P&L Year 1:          -$1,894
  Breakeven month:         M11

Year 2 (M13-M24):
  Total Signups:           15,235
  Active Traders (M24):    8,047
  Total Revenue:           $403,219
  Total Costs:             $341,506
  Net P&L Year 2:          +$61,713
  Monthly profit (M24):    +$14,903

Cumulative (24 months):
  Total Signups:           16,239
  Total Revenue:           $425,869
  Total Costs:             $366,050
  Cumulative P&L:          +$59,819
```

---

## 4. Три сценария

### 4.1 Conservative (Консервативный)

```yaml
Assumptions:
  monthly_signup_growth: 15%     # Вместо 25%
  conversion_rate: 55%           # Вместо 65%
  churn_rate: 12%                # Вместо 8%
  avg_trading_volume: $20,000    # Вместо $30,000

Results (12 months):
  Active Traders:    180
  Monthly Revenue:   $1,296
  Monthly Profit:    -$204
  Breakeven:         M16

Results (24 months):
  Active Traders:    1,200
  Monthly Revenue:   $8,640
  Monthly Profit:    +$2,640
```

### 4.2 Base Case (Базовый) — основной сценарий

```yaml
Assumptions:
  monthly_signup_growth: 25%
  conversion_rate: 65%
  churn_rate: 8%
  avg_trading_volume: $30,000

Results (12 months):
  Active Traders:    530
  Monthly Revenue:   $5,724
  Monthly Profit:    +$165
  Breakeven:         M11

Results (24 months):
  Active Traders:    8,047
  Monthly Revenue:   $86,908
  Monthly Profit:    +$14,903
```

### 4.3 Optimistic (Оптимистичный)

```yaml
Assumptions:
  monthly_signup_growth: 40%     # Вирусный рост через TG
  conversion_rate: 75%
  churn_rate: 5%
  avg_trading_volume: $50,000    # Больше Pro-трейдеров

Results (12 months):
  Active Traders:    2,800
  Monthly Revenue:   $50,400
  Monthly Profit:    +$35,400
  Breakeven:         M6

Results (24 months):
  Active Traders:    45,000+
  Monthly Revenue:   $810,000+
  Monthly Profit:    +$500,000+
```

---

## 5. Cash Flow & Runway

### 5.1 Начальные инвестиции

```yaml
Pre-launch costs (M1-M3):
  Development:           $0      # Founder-developer, sweat equity
  Infrastructure:        $1,200  # 3 мес серверов
  Legal:                 $500    # Регистрация, ToS
  Marketing (pre-launch): $200   # Landing, socials
  Misc:                  $100

Total initial investment: $2,000
```

### 5.2 Cash Flow Timeline

```
Cash Balance ($)

$15,000 |                                                          ●
        |                                                      ●
$10,000 |                                                  ●
        |                                              ●
 $5,000 |                                          ●
        |                                      ●
     $0 |──●──●──●──●──●──●──●──●──●──●──●──●──────────────────
        |  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  │
-$2,000 |  ●  ●                          ●  │
        |        ●  ●              ●        │
-$4,000 |              ●  ●  ●  ●           │
        |                                    │
        └────────────────────────────────────┴───────────────────
        M1 M2 M3 M4 M5 M6 M7 M8 M9 M10 M11 M12  ...  M18  M24

        ←── Burn Phase ──→←── Breakeven ──→←── Growth Phase ──→
```

```yaml
Max negative cash:      -$3,900 (month 10)
Breakeven month:        M11
Required runway:        $6,000 (с запасом 50%)
Time to $10K/mo profit: M20
Time to $50K/mo profit: M24+ (optimistic scenario)
```

---

## 6. Revenue by Exchange (прогноз M12)

| Биржа | Доля трейдеров | Affiliate Rate | Avg Volume | Monthly Rebate | Service Margin |
|-------|---------------|----------------|------------|----------------|----------------|
| MEXC | 15% | 50% | $25K | $148 | $59 |
| Bitget | 12% | 40% | $35K | $107 | $43 |
| BingX | 10% | 50% | $30K | $96 | $38 |
| Weex | 8% | 50% | $20K | $51 | $20 |
| Bybit | 18% | 40% | $40K | $184 | $74 |
| Binance | 15% | 45% | $50K | $216 | $86 |
| OKX | 10% | 40% | $35K | $89 | $36 |
| KuCoin | 5% | 45% | $25K | $36 | $14 |
| HTX | 3% | 40% | $20K | $15 | $6 |
| Bitmart | 2% | 35% | $15K | $7 | $3 |
| BloFin | 2% | 40% | $20K | $10 | $4 |
| **ИТОГО** | **100%** | | | **$959** | **$383** |

> При 530 active traders: Monthly Gross = $5,724; Service Margin = $2,290

---

## 7. Key Financial Metrics

### 7.1 Основные KPI

| Метрика | M6 | M12 | M18 | M24 |
|---------|-----|------|------|------|
| Active Traders | 103 | 530 | 2,097 | 8,047 |
| MRR (Monthly Recurring Revenue) | $1,112 | $5,724 | $22,648 | $86,908 |
| Gross Margin % | 40% | 40% | 40% | 40% |
| Net Margin % | -32% | +3% | +13% | +17% |
| CAC | $5 | $5 | $5 | $5 |
| LTV | $23.90 | $23.90 | $23.90 | $23.90 |
| LTV/CAC | 4.8x | 4.8x | 4.8x | 4.8x |
| Monthly Churn | 8% | 8% | 8% | 8% |
| Payback Period | 1.5 мес | 1.5 мес | 1.5 мес | 1.5 мес |

### 7.2 Burn Rate

```yaml
Pre-revenue (M1-M2):     $400/мес
Early stage (M3-M6):     $500-700/мес
Growth (M7-M12):         $0-500/мес (approaching breakeven)
Scale (M13-M24):         N/A (profitable)
```

---

## 8. Funding Requirements

### Сценарий: Bootstrapped (Self-funded)

```yaml
Required capital:     $6,000
Source:               Founder savings / sweat equity
Runway:               12 months (to profitability)
Risk level:           Low (минимальные затраты)
Upside:               100% equity retained
```

### Сценарий: Angel Investment

```yaml
Required capital:     $50,000
Usage:
  - Наём 1 разработчика (6 мес):    $24,000
  - Marketing budget:                 $15,000
  - Infrastructure:                   $6,000
  - Legal & compliance:               $3,000
  - Buffer:                           $2,000

Expected outcome:
  - MVP за 6 недель (вместо 12)
  - 2x faster growth (50% MoM)
  - Breakeven M6 (вместо M11)
  - 5,000+ traders by M12
  - Monthly profit $25K+ by M12

Equity offered:       10-15%
Valuation:            $350K-$500K (pre-money)
```

---

## 9. Exit Scenarios

| Сценарий | Timeline | Valuation | Множитель |
|----------|----------|-----------|-----------|
| Acqui-hire (биржа покупает сервис) | 18-24 мес | $500K-2M | 3-5x annual revenue |
| Strategic acquisition | 24-36 мес | $2M-10M | 5-10x ARR |
| Merger с конкурентом | 12-24 мес | $300K-1M | 2-3x revenue |
| Lifestyle business | Ongoing | N/A | Cash flow $10-50K/мес |

---

*Документ создан: Business-Analyst Agent | Дата: 2026-02-04*
