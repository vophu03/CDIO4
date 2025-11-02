FROM node:20-alpine
WORKDIR /app

# Install dependencies
COPY BackEnd/package*.json ./
RUN npm ci --only=production || npm install --only=production

# Copy source
COPY BackEnd/. ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "index.js"]

