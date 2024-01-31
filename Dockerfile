FROM node:20-alpine3.19 as build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build


FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html/app
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
