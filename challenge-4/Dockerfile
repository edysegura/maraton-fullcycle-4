FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV CI=true

COPY . .
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent

EXPOSE 3000

CMD ["npm", "run", "start"]
