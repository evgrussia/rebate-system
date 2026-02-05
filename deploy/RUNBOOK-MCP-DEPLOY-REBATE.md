# Runbook: деплой CryptoRebate Frontend на VPS через MCP deploy-vps

**Домен:** rebate.hyper-development.ru  
**Порт на хосте:** 8089 (выбран свободным после анализа занятых портов на VPS)

## Стратегия

1. **Сервер:** один VPS (default), уже есть nginx, certbot, Docker; домен hyper-development.ru уже используется (другие поддомены: base-front, base-api; основной сайт на 8085/8086).
2. **Свободный порт:** 8089 (8082–8088, 8090, 8091 заняты).
3. **SSL:** отдельный сертификат для rebate.hyper-development.ru через `certbot --nginx -d rebate.hyper-development.ru` (после добавления конфига nginx и при условии что DNS указывает на сервер).
4. **Изменения только через Git:** файлы проекта на сервер не загружаем вручную — только `git pull` в каталоге репозитория.

## Предусловия

- Репозиторий rebate-system доступен на сервере (clone или уже есть каталог).
- DNS: запись A для `rebate.hyper-development.ru` указывает на IP VPS (213.159.67.199).
- На VPS установлены: Docker, Docker Compose, nginx, certbot.

## Шаги деплоя (на VPS через MCP execute-command)

Выполнять в порядке указания.

### 1. Перейти в каталог проекта и обновить код

```bash
cd /path/to/rebate-system   # заменить на реальный путь, например /var/www/rebate-system или /opt/rebate-system
git pull
```

### 2. Собрать и запустить контейнер frontend

```bash
cd frontend
docker compose build --no-cache
docker compose up -d
docker ps | grep cryptorebate
```

Проверка: `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8089/` — ожидается 200.

### 3. Добавить конфиг nginx и включить сайт

```bash
sudo cp /path/to/rebate-system/deploy/nginx-rebate.hyper-development.ru.conf /etc/nginx/sites-available/rebate.hyper-development.ru
sudo ln -sf /etc/nginx/sites-available/rebate.hyper-development.ru /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 4. Выпустить SSL и включить HTTPS (когда DNS уже указывает на сервер)

```bash
sudo certbot --nginx -d rebate.hyper-development.ru
```

Следовать подсказкам certbot. После успеха nginx перезагрузится с HTTPS.

### 5. Верификация

- HTTP: `curl -sI http://rebate.hyper-development.ru` — редирект 301 на https (после certbot) или отдача фронта (до certbot).
- HTTPS: `curl -sI https://rebate.hyper-development.ru` — 200 после выдачи сертификата.
- Health: `curl -s http://127.0.0.1:8089/health` — ответ `ok`.

## Откат

- Остановить контейнер: `cd frontend && docker compose down`
- Отключить сайт: `sudo rm /etc/nginx/sites-enabled/rebate.hyper-development.ru && sudo systemctl reload nginx`

## Артефакты в репо

| Артефакт | Назначение |
|----------|------------|
| `frontend/Dockerfile` | Сборка Vite + раздача через nginx |
| `frontend/docker-compose.yml` | Запуск контейнера на порту 8089 |
| `frontend/.dockerignore` | Исключения для контекста сборки |
| `deploy/nginx-rebate.hyper-development.ru.conf` | Виртуальный хост nginx |
| `deploy/RUNBOOK-MCP-DEPLOY-REBATE.md` | Этот runbook |

---
*Документ создан: Orchestrator Agent | Дата: 2026-02-05*
