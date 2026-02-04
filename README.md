# Документация проекта CryptoRebate (Rebate System)

Краткий обзор: **CryptoRebate** — партнёрский rebate-сервис (агрегатор программ криптовалютных бирж). Сервис привлекает трейдеров по реферальным ссылкам и возвращает им часть комиссий (cashback); маржа формируется за счёт разницы между rebate от бирж и выплатами трейдерам. Документация ниже распределена по категориям и типам с прямыми ссылками на файлы.

**→ [Figma: CryptoRebate Full Concept](https://shift-pasta-63778419.figma.site)** — интерактивный прототип и дизайн-концепт.

---

## 1. Discovery (исследования и продукт)

Документы фазы Discovery: видение продукта, требования, исследования рынка и бирж, бизнес-процессы, метрики.

### 1.1 Продукт и стратегия

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Vision** | Видение продукта: проблема, ценностное предложение, целевая аудитория, цели. | [Vision Document — CryptoRebate](docs/discovery/vision.md) |
| **PRD** | Product Requirements Document: цели MVP, персоны, функциональные и нефункциональные требования, приоритеты. | [PRD — CryptoRebate MVP](docs/discovery/prd.md) |
| **Roadmap** | Дорожная карта от MVP до v2.0: этапы, майлстоуны, фичи по версиям. | [Product Roadmap — CryptoRebate](docs/discovery/roadmap.md) |
| **User Stories** | Пользовательские истории MVP с критериями приёмки и приоритетами. | [User Stories — CryptoRebate MVP](docs/discovery/user-stories.md) |

### 1.2 Исследования

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Market Research** | Исследование рынка: сегменты, объёмы, тренды, возможности для rebate-агрегатора. | [Market Research — CryptoRebate](docs/discovery/market-research.md) |
| **Competitive Analysis** | Анализ конкурентов и альтернатив, позиционирование CryptoRebate. | [Competitive Analysis — CryptoRebate](docs/discovery/competitive-analysis.md) |
| **User Research** | Исследование пользователей (трейдеров): потребности, сценарии, боли. | [User Research — CryptoRebate](docs/discovery/user-research.md) |
| **Exchange Research** | Партнёрские программы 11 бирж: условия, API, форматы комиссий и выплат. | [Exchange Research — 11 бирж](docs/discovery/exchange-research.md) |

### 1.3 Бизнес (процессы, правила, стейкхолдеры)

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Business Processes** | Бизнес-модель, цепочка создания ценности, ключевые процессы (привлечение, расчёт rebate, выплаты). | [Business Processes — CryptoRebate](docs/discovery/business-processes.md) |
| **Business Rules** | Каталог бизнес-правил: расчёт долей, выводы, реферальные ссылки, лимиты. | [Business Rules Catalog — CryptoRebate](docs/discovery/business-rules.md) |
| **Stakeholder Analysis** | Стейкхолдеры проекта: роли, интересы, влияние, коммуникация. | [Stakeholder Analysis — CryptoRebate](docs/discovery/stakeholder-analysis.md) |
| **Decision Log** | Журнал решений: ключевые архитектурные и продуктовые решения с обоснованием. | [Decision Log — CryptoRebate](docs/discovery/decision-log.md) |

### 1.4 Аналитика и метрики

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Metrics Framework** | Система метрик: North Star, AARRR, операционные и продуктовые метрики. | [Metrics Framework — CryptoRebate](docs/discovery/metrics-framework.md) |
| **Tracking Plan** | План трекинга событий: какие события собирать, где и как (в т.ч. для аналитики и рекламы). | [Tracking Plan — CryptoRebate](docs/discovery/tracking-plan.md) |
| **KPI Dashboard** | Спецификация дашборда KPI: метрики, визуализации, источники данных, Prometheus. | [KPI Dashboard Specification — CryptoRebate](docs/discovery/kpi-dashboard.md) |

---

## 2. Business (бизнес-стратегия и риски)

Документы бизнес-стратегии, финансовой модели и управления рисками.

### 2.1 Стратегия и модель

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Executive Summary** | Краткое описание для инвесторов и партнёров: проблема, решение, метрики, команда. | [Executive Summary — CryptoRebate](docs/business/executive-summary.md) |
| **Business Model Canvas** | Канвас бизнес-модели: ценность, каналы, потоки доходов, ключевые ресурсы и партнёры. | [Business Model Canvas — CryptoRebate](docs/business/business-model-canvas.md) |
| **Financial Model** | Финансовая модель: единица экономики, сценарии выручки, затрат и окупаемости. | [Financial Model — CryptoRebate](docs/business/financial-model.md) |
| **Go-to-Market Strategy** | Стратегия выхода на рынок: каналы привлечения, позиционирование, этапы запуска. | [Go-to-Market Strategy — CryptoRebate](docs/business/go-to-market-strategy.md) |

### 2.2 Риски

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Risk Register** | Реестр рисков с оценкой вероятности и влияния, планы митигации и мониторинг. | [Risk Register — CryptoRebate](docs/business/risk-register.md) |

---

## 3. Design (дизайн и UX)

Документы дизайн-системы, контента, UX и инструментов для дизайна.

**→ [Figma: CryptoRebate Full Concept](https://shift-pasta-63778419.figma.site)** — интерактивный прототип.

### 3.1 Основы и система

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Design Foundations** | Философия бренда, дизайн-принципы, визуальная и типографическая основа. | [Design Foundations — CryptoRebate](docs/design/design-foundations.md) |
| **Design Tokens** | Токены дизайна: цвета, типографика, отступы, тени, скругления (в т.ч. для кода). | [Design Tokens — CryptoRebate](docs/design/design-tokens.md) |
| **Component Library** | Библиотека компонентов UI: кнопки, формы, карточки, навигация, состояния. | [Component Library — CryptoRebate](docs/design/component-library.md) |
| **Information Architecture** | Информационная архитектура: структура сайта/ЛК, навигация, группировка контента. | [Information Architecture — CryptoRebate](docs/design/information-architecture.md) |

### 3.2 Контент и тон

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Content Guidelines** | Правила контента: что писать, структура текстов, доступность и локализация. | [Content Guidelines — CryptoRebate](docs/design/content-guidelines.md) |
| **Voice & Tone** | Голос и тон бренда: как мы говорим с пользователем в интерфейсе и маркетинге. | [Voice & Tone Guide — CryptoRebate](docs/design/voice-and-tone.md) |
| **UX Copy Patterns** | Паттерны UX-копирайтинга: формулировки для кнопок, ошибок, подсказок, пустых состояний. | [UX Copy Patterns — CryptoRebate](docs/design/ux-copy-patterns.md) |

### 3.3 UX (потоки, каркасы, паттерны)

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **User Flows** | Пользовательские сценарии: регистрация, подключение бирж, вывод, настройки. | [User Flows — CryptoRebate](docs/design/user-flows.md) |
| **Wireframes** | Каркасы экранов MVP: ЛК, онбординг, дашборд, выплаты, админка. | [Wireframes — CryptoRebate MVP](docs/design/wireframes.md) |
| **Interaction Patterns** | Паттерны взаимодействия: клики, формы, обратная связь, загрузки, ошибки. | [Interaction Patterns — CryptoRebate](docs/design/interaction-patterns.md) |
| **Responsive Guidelines** | Адаптивность: брейкпоинты, поведение компонентов, мобильная версия. | [Responsive Guidelines — CryptoRebate](docs/design/responsive-guidelines.md) |

---

## 4. Контекст проекта

Артефакты контекста: краткое описание проекта, саммари фаз и чекпоинты.

### 4.1 Project Brief

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Project Brief** | Сводка целей, целевых пользователей, scope, решений и tech stack (источник истины по проекту). | [Project Brief](context/project-brief.yaml) |

### 4.2 Summaries (саммари фаз)

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **Discovery Summary** | Краткое саммари фазы Discovery: ключевые артефакты и выводы. | [Discovery Summary](context/summaries/discovery-summary.yaml) |
| **Design Summary** | Краткое саммари фазы Design: ключевые артефакты и выводы. | [Design Summary](context/summaries/design-summary.yaml) |

### 4.3 Checkpoints (чекпоинты)

| Документ | Описание | Ссылка |
|----------|----------|--------|
| **CP-000 Intake** | Чекпоинт фазы Intake (инициация проекта). | [CP-000 Intake](context/checkpoints/CP-000-intake-2026-02-04.yaml) |
| **CP-001 Discovery** | Чекпоинт фазы Discovery. | [CP-001 Discovery](context/checkpoints/CP-001-discovery-2026-02-04.yaml) |
| **CP-002 Design** | Чекпоинт фазы Design. | [CP-002 Design](context/checkpoints/CP-002-design-2026-02-04.yaml) |

---

## Как пользоваться документацией

1. **Быстрый старт:** начните с [Project Brief](context/project-brief.yaml) — там цели, scope и ключевые решения.
2. **Понимание продукта:** затем [Vision](docs/discovery/vision.md) и [PRD](docs/discovery/prd.md) — что мы делаем и зачем.
3. **Детали по этапам:** используйте [Roadmap](docs/discovery/roadmap.md) и [User Stories](docs/discovery/user-stories.md) для плана и фич.
4. **Дизайн и реализация:** раздел [Design](#3-design-дизайн-и-ux) — от основ и токенов до wireframes и промптов для Figma.
5. **Бизнес и риски:** разделы [Discovery](#1-discovery-исследования-и-продукт) и [Business](#2-business-бизнес-стратегия-и-риски) для стратегии, метрик и рисков.

Ссылки в таблицах ведут к файлам относительно корня репозитория.

---
*Документ создан: Orchestrator Agent | Дата: 2026-02-04*
