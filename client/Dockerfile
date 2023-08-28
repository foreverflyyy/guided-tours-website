FROM node:18 AS client

WORKDIR /app/client

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "dev"]
