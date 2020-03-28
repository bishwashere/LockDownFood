FROM node:latest
WORKDIR /app
COPY . .
COPY angular-src/ .
RUN npm install

EXPOSE 4200
CMD ["npm", "start"]
