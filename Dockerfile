#Docker file for VueJS using NGINX
# build stage
FROM node:14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# production stage
FROM nginx:stable as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx_network_inventory.conf /etc/nginx/conf.d/nginx_network_inventory.conf
CMD ["nginx", "-g", "daemon off;"]
