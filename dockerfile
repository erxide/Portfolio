# --- Build stage ---
FROM oven/bun:1.3.1 AS builder

WORKDIR /app

# Copier uniquement ce qu’il faut avant l’install (meilleur cache Docker)
COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

# Copier le reste du projet
COPY . .

# Build du projet
RUN bun run build

# --- Runtime stage ---
FROM oven/bun:1.3.1 AS runner

WORKDIR /app
USER bun

# Copier uniquement le build final
COPY --from=builder /app/dist ./dist

EXPOSE 5173

# Lancer un petit serveur statique sur le port 5173
CMD ["bunx", "serve", "dist", "-p", "5173"]
