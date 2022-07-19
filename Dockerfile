FROM node:18-alpine As development

WORKDIR  /usr/src/app

COPY package*.json ./
COPY npm-shrinkwrap.json ./
COPY .npmrc ./

RUN npm install --global npm@latest
RUN npm ci

COPY . .

CMD [ "npm", "start"]

FROM development as builder

RUN npm run build

FROM node:18-alpine as production

ARG APP_ENV=development
ENV NODE_ENV=${APP_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY npm-shrinkwrap.json ./
COPY .npmrc ./

RUN npm install --global npm@latest
RUN npm ci --omit=dev

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/src/main"]
