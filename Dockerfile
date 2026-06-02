# --- Stage 1: Build frontend assets ---
FROM node:22-alpine AS node-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Stage 2: Install PHP dependencies ---
FROM composer:2 AS composer-builder
WORKDIR /app
COPY composer*.json ./
RUN composer install --no-dev --optimize-autoloader --no-scripts --no-progress --ignore-platform-reqs

# --- Stage 3: Production Runtime ---
FROM serversideup/php:8.3-fpm-nginx-alpine

WORKDIR /var/www/html

# Switch to root to perform installations and set permissions
USER root

# Install standard PHP extensions for Laravel production
RUN install-php-extensions bcmath gd zip pdo_mysql pdo_pgsql

# Copy application files (ignoring files listed in .dockerignore)
COPY --chown=www-data:www-data . .

# Copy composer vendor dependencies
COPY --from=composer-builder --chown=www-data:www-data /app/vendor ./vendor

# Copy compiled frontend assets
COPY --from=node-builder --chown=www-data:www-data /app/public/build ./public/build

# Run optimized autoload and package discovery
RUN composer dump-autoload --optimize --no-dev

# Set permissions for writable Laravel directories
RUN chmod -R 775 storage bootstrap/cache

# Switch back to the unprivileged www-data user
USER www-data
