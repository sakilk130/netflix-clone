FROM node:14-alpine AS development
ENV NODE_ENV development

WORKDIR /netflix

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]