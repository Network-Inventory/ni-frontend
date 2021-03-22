#Docker file for VueJS using NGINX
# build stage
FROM node:14 as build-stage
WORKDIR /app
COPY . .
RUN npm install && npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

ENV PORT = 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
