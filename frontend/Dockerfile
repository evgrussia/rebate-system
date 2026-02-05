# =============================================================================
# CryptoRebate Frontend — multi-stage: build (Vite) + serve (nginx)
# =============================================================================

# --- Stage 1: build ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci 2>/dev/null || npm install

COPY . .
RUN npm run build

# --- Stage 2: serve ---
FROM nginx:alpine

# Конфиг nginx для SPA: все запросы → index.html
RUN echo 'server { \
  listen 80; \
  root /usr/share/nginx/html; \
  index index.html; \
  location / { try_files $uri $uri/ /index.html; } \
  location /health { default_type text/plain; return 200 "ok"; add_header Content-Type text/plain; } \
  gzip on; \
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml; \
}' > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
