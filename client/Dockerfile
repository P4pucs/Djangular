FROM node:14.11.0-alpine as build-step

RUN mkdir /client
WORKDIR /client

COPY package.json .
RUN npm install -g @angular/cli@latest
COPY . .
