FROM node:14 as base

WORKDIR /home/node/app

COPY package.json ./

RUN npm i 

COPY . .

FROM base as production 

ENV NODE_PATH=./build
ENV AWS_ACCESS_KEY_ID=test
ENV AWS_SECRET_KEY=test
ENV AWS_BUCKET_NAME=demo-bucket
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN npm run build