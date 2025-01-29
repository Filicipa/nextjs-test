FROM node:22.13.1-alpine AS builder
WORKDIR /app
COPY package*.json next.config.mjs ./
RUN npm ci
COPY ./ ./
RUN npm run build
RUN npm ci --omit=dev

FROM node:22.13.1-alpine AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["npm", "run", "start"]