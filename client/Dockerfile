
FROM node:12-alpine

WORKDIR /app

ADD package*.json ./
RUN npm i

ADD . ./

EXPOSE 3000
CMD ["npm", "run", "dev"]