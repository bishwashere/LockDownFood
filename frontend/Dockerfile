# Stage 1
FROM node:latest as node
WORKDIR angular-frontend/
COPY . .
RUN npm install
RUN npm init angular-frontend/
RUN npm run build --dev
