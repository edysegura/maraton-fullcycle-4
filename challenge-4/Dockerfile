FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV CI=true

COPY . .
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent

EXPOSE 3000

CMD ["npm", "run", "start"]

# # The instructions for the first stage
# FROM node:12-alpine as builder

# RUN apk --no-cache add python make g++

# COPY package*.json ./
# RUN npm install

# # The instructions for second stage
# FROM node:12-alpine

# WORKDIR /usr/src/app
# COPY --from=builder node_modules node_modules

# COPY . .

# EXPOSE 3000

# CMD [ "npm", "start" ]