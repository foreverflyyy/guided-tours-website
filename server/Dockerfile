FROM node:18 AS server

WORKDIR /app/server

COPY server/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]