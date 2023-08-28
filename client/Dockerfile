FROM node:18 AS client

WORKDIR /app/client

COPY client/package.json client/yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "dev"]
