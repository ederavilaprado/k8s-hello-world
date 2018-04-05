FROM node:9.10.1-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN yarn install && yarn cache clean --force
COPY . /usr/src/app

CMD [ "npm", "start" ]