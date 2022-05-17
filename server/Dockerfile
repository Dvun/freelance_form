FROM node:16-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
COPY ./.env.dev .env
EXPOSE 8080
CMD ["npm", "run", "dev"]