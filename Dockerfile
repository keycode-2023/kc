FROM node:18.16.0-alpine3.17

WORKDIR /app

COPY . .

RUN npm install glob rimraf

RUN npm install

RUN npm run build

CMD ["sh", "-c", "npm run migrate:public && npm run start:prod"]
