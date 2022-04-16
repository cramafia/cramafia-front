FROM node:16-alpine AS deps

RUN mkdir /client

WORKDIR /client

COPY ./package.json /client

RUN yarn

COPY . /client

RUN yarn build

CMD ["yarn", "start"]