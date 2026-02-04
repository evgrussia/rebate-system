---
title: "Product Roadmap — CryptoRebate"
created_by: "Product Agent"
created_at: "2026-02-04"
version: "1.0"
---

# Product Roadmap: CryptoRebate

> Дорожная карта от MVP до V2.0

---

## 1. Обзор

```
                    MVP (v0.1)          v1.0 Stable         v1.5 Growth         v2.0 Scale
Timeline:           Месяц 1-3           Месяц 4-5           Месяц 6-8           Месяц 9-12
                    ────────────────────────────────────────────────────────────────────────►

Focus:              Core Platform        Polish + Landing     Growth Features      Scale + Mobile
                    11 бирж + ЛК         UX, SEO, i18n        VIP, Analytics       App, API, New Exch
```

---

## 2. MVP (v0.1) — Core Platform

**Срок:** Месяц 1-3
**Цель:** Работающая платформа с 11 биржами, ЛК и Telegram-ботом

### Milestone 1: Foundation (Недели 1-4)

| # | Фича | Модуль | Приоритет | Зависимости |
|---|------|--------|-----------|-------------|
| M1.1 | Database schema + Django project setup | Backend | P0 | — |
| M1.2 | Auth: регистрация email + JWT | Auth | P0 | M1.1 |
| M1.3 | Auth: регистрация через Telegram | Auth | P0 | M1.1 |
| M1.4 | Exchange Integration Layer (unified adapter) | Exchange | P0 | M1.1 |
| M1.5 | Адаптеры Tier 1: BingX, Bybit, OKX, Weex | Exchange | P0 | M1.4 |
| M1.6 | Basic Admin Panel: управление биржами | Admin | P0 | M1.1 |

**Success Criteria:**
- Регистрация и авторизация работают (web + TG)
- 4 биржи синхронизируются через API
- Admin может добавлять/настраивать биржи

### Milestone 2: Core Logic (Недели 5-8)

| # | Фича | Модуль | Приоритет | Зависимости |
|---|------|--------|-----------|-------------|
| M2.1 | Адаптеры Tier 2: MEXC, Bitget, Binance | Exchange | P0 | M1.4 |
| M2.2 | Адаптеры Tier 3: KuCoin, HTX, Bitmart, BloFin | Exchange | P0 | M1.4 |
| M2.3 | Referral link generation per user × exchange | Referral | P0 | M1.2 |
| M2.4 | Rebate Calculator | Rebate | P0 | M1.5 |
| M2.5 | Payout Engine: queue, statuses, execution | Payout | P0 | M2.4 |
| M2.6 | Celery: sync scheduling + rebate calculation | Backend | P0 | M2.4 |

**Success Criteria:**
- Все 11 бирж подключены (4 API + 7 manual/semi-auto)
- Rebate рассчитывается автоматически
- Payout Engine работает (pending → approved → processing → completed)

### Milestone 3: Frontend (Недели 9-11)

| # | Фича | Модуль | Приоритет | Зависимости |
|---|------|--------|-----------|-------------|
| M3.1 | Trader Dashboard (React): дашборд, статистика | Web ЛК | P0 | M2.4 |
| M3.2 | Trader Dashboard: история начислений + выплат | Web ЛК | P0 | M2.4 |
| M3.3 | Trader Dashboard: вывод средств | Web ЛК | P0 | M2.5 |
| M3.4 | Trader Dashboard: биржи + реферальные ссылки | Web ЛК | P0 | M2.3 |
| M3.5 | Telegram Bot: полный ЛК | Bot | P0 | M2.4, M2.5 |
| M3.6 | Admin Panel: пользователи, выплаты, полный UI | Admin | P0 | M2.5 |

**Success Criteria:**
- Trader ЛК полностью функционален (web + TG)
- Admin Panel покрывает все операции
- End-to-end flow работает: регистрация → торговля → rebate → вывод

### Milestone 4: MVP Launch (Недели 11-12)

| # | Фича | Модуль | Приоритет | Зависимости |
|---|------|--------|-----------|-------------|
| M4.1 | QA: полное тестирование | QA | P0 | M3.* |
| M4.2 | Deploy на production (VPS) | DevOps | P0 | M4.1 |
| M4.3 | Мониторинг (Grafana + Prometheus) | SRE | P0 | M4.2 |
| M4.4 | Уведомления (Telegram alerts) | SRE | P0 | M4.2 |

**Success Criteria:**
- Все тесты зелёные
- Production deploy работает
- Мониторинг и alerts настроены

---

## 3. V1.0 — Stable Release

**Срок:** Месяц 4-5
**Цель:** Стабильность, лендинг, улучшенный UX

| # | Фича | Модуль | Приоритет | Описание |
|---|------|--------|-----------|----------|
| V1.1 | Лендинг / маркетинговый сайт | Landing | P1 | Описание сервиса, CTA, FAQ |
| V1.2 | Сброс пароля | Auth | P1 | Email-based password reset |
| V1.3 | Привязка TG ↔ Web аккаунта | Auth | P1 | Связывание аккаунтов |
| V1.4 | Инструкции по регистрации на биржах | Content | P1 | Step-by-step guides per exchange |
| V1.5 | Email-уведомления | Notifications | P1 | Начисления, выплаты, статусы |
| V1.6 | Логи интеграций в Admin Panel | Admin | P1 | Мониторинг sync ошибок |
| V1.7 | Мониторинг API бирж (health check) | SRE | P1 | Status page per exchange |
| V1.8 | Верификация адреса кошелька | Payout | P1 | Валидация формата per network |
| V1.9 | 2FA для администраторов | Admin/Security | P1 | TOTP-based 2FA |
| V1.10 | Аудит-лог действий админов | Admin | P1 | Кто что когда изменил |

**Success Criteria:**
- Лендинг привлекает органический трафик
- UX отполирован, типичные ошибки устранены
- Security hardened (2FA, audit log)

---

## 4. V1.5 — Growth Features

**Срок:** Месяц 6-8
**Цель:** Рост пользовательской базы, расширенная аналитика

| # | Фича | Модуль | Приоритет | Описание |
|---|------|--------|-----------|----------|
| V1.5.1 | Индивидуальные rebate-условия per trader | Admin/Rebate | P1 | VIP ставки для крупных трейдеров |
| V1.5.2 | Английский язык (i18n) | Frontend | P1 | RU + EN |
| V1.5.3 | SEO-оптимизация лендинга | Landing | P2 | Мета-теги, sitemap, скорость |
| V1.5.4 | Калькулятор rebate на лендинге | Landing | P2 | Интерактивный калькулятор |
| V1.5.5 | Графики в ЛК (динамика rebate) | Web ЛК | P2 | Charts.js / Recharts |
| V1.5.6 | Управление ролями администраторов | Admin | P2 | Admin / Super Admin / Viewer |
| V1.5.7 | Языковые настройки в Telegram | Bot | P2 | RU / EN переключение |
| V1.5.8 | Настраиваемая периодичность выплат | Payout | P1 | Per exchange payout schedule |
| V1.5.9 | Reconciliation dashboard | Admin | P1 | Автосверка наших данных vs бирж |
| V1.5.10 | A/B testing framework (GrowthBook) | Analytics | P2 | Эксперименты с конверсией |

**Success Criteria:**
- 1,000+ зарегистрированных пользователей
- Активация > 40%
- Retention D30 > 60%
- i18n: EN полностью работает

---

## 5. V2.0 — Scale

**Срок:** Месяц 9-12
**Цель:** Масштабирование, мобильное приложение, новые биржи

| # | Фича | Модуль | Приоритет | Описание |
|---|------|--------|-----------|----------|
| V2.1 | Мобильное приложение (React Native) | Mobile | P3 | iOS + Android |
| V2.2 | Расширенная аналитика для трейдеров | Web ЛК | P2 | Сравнение бирж, доходность |
| V2.3 | API для внешних партнёров | Backend | P3 | Виджеты для сайтов |
| V2.4 | VIP-программа | Backend/Admin | P2 | Тиры, повышенные ставки |
| V2.5 | Новые биржи (5+) | Exchange | P2 | gate.io, Kraken, Coinbase, etc. |
| V2.6 | Автоматический арбитраж ставок | Rebate | P3 | Оптимальное распределение по биржам |
| V2.7 | Push-уведомления (web) | Notifications | P3 | Browser push |
| V2.8 | Партнёрский кабинет для инфлюенсеров | New Module | P3 | Отдельный ЛК для партнёров |

---

## 6. Dependency Map

```
M1.1 (DB + Django)
  ├──► M1.2 (Auth Email)
  │      ├──► M2.3 (Referral Links)
  │      │      └──► M3.4 (Web: Exchanges)
  │      ├──► M3.1 (Web Dashboard)
  │      └──► M3.3 (Web: Withdrawal)
  ├──► M1.3 (Auth Telegram)
  │      └──► M3.5 (TG Bot)
  ├──► M1.4 (Exchange Layer)
  │      ├──► M1.5 (Tier 1 Adapters)
  │      │      └──► M2.4 (Rebate Calculator)
  │      │              ├──► M2.5 (Payout Engine)
  │      │              │      ├──► M3.3 (Web: Withdrawal)
  │      │              │      └──► M3.6 (Admin: Payouts)
  │      │              ├──► M3.1 (Web Dashboard)
  │      │              └──► M3.5 (TG Bot)
  │      ├──► M2.1 (Tier 2 Adapters)
  │      └──► M2.2 (Tier 3 Adapters)
  └──► M1.6 (Basic Admin)
         └──► M3.6 (Full Admin)
```

---

## 7. Risk-adjusted Timeline

| Фаза | Оптимистично | Реалистично | Пессимистично |
|------|-------------|-------------|---------------|
| Foundation (M1) | 3 нед | 4 нед | 6 нед |
| Core Logic (M2) | 3 нед | 4 нед | 6 нед |
| Frontend (M3) | 2 нед | 3 нед | 4 нед |
| Launch (M4) | 1 нед | 1 нед | 2 нед |
| **Итого MVP** | **9 нед** | **12 нед** | **18 нед** |

**Ключевые риски для timeline:**
- API-интеграция с биржами без документации (Tier 2-3) → +2-4 недели
- Сложность Telegram Bot ЛК → +1-2 недели
- QA/Bug fixing → +1-2 недели

---

## 8. Success Criteria по версиям

| Версия | Метрика | Target |
|--------|---------|--------|
| **MVP** | Exchanges connected | 11 |
| **MVP** | E2E flow works | Yes |
| **MVP** | Uptime | 99%+ |
| **V1.0** | Registered users | 200+ |
| **V1.0** | Landing CVR | 3%+ |
| **V1.5** | Registered users | 1,000+ |
| **V1.5** | Activation rate | 40%+ |
| **V1.5** | D30 retention | 60%+ |
| **V2.0** | Registered users | 5,000+ |
| **V2.0** | TVV | $10M+/мес |
| **V2.0** | LTV/CAC | > 3x |

---

*Документ создан: Product Agent | Дата: 2026-02-04*
