# The instructions for the first stage
FROM node:14.8-alpine as builder

RUN apk --no-cache add python make g++

COPY package*.json ./
RUN npm install

# The instructions for second stage
FROM node:14.8-alpine

WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
