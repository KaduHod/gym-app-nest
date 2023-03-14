FROM node:latest 

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install class-validator --save

CMD ["npm","run","start:dev"]