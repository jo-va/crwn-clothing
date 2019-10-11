FROM node:latest

COPY server.js server.js
COPY .env .env
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN npm install

CMD node server.js