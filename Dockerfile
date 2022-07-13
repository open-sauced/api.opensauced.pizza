FROM node:18-alpine As development

WORKDIR /

COPY package*.json ./
COPY npm-shrinkwrap.json ./

RUN npm ci --only=development

COPY . .

RUN npm run build

FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /

COPY package*.json ./
COPY npm-shrinkwrap.json ./

RUN npm ci --only=production

COPY . .

COPY --from=development /dist ./dist

CMD ["node", "dist/main"]
