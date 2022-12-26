FROM node:alpine as builder
WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

ENV HOST 0.0.0.0
ENV PORT 8080

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]