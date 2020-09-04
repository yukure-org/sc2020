
FROM node:12-alpine

WORKDIR /app

ADD package*.json ./
RUN npm i

ADD . ./

EXPOSE 8888
CMD [ "npm", "run", "start:dev" ]