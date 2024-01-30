FROM node:14

WORKDIR .

COPY package*.json ./

RUN npm install express sqlite3 cookie-parser

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
