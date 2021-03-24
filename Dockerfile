#Docker file for VueJS using NGINX
# build stage
FROM node:14 as build-stage
ENV JQ_VERSION=1.6
RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN jq 'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)' ./src/config.json > ./src/config.tmp.json && mv ./src/config.tmp.json ./src/config.json
RUN npm run build

# production stage
FROM nginx:stable as production-stage
RUN /app
COPY --from=build-stage /app/dist /app
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx_network_inventory.conf /etc/nginx/conf.d/nginx_network_inventory.conf
ENV JSFOLDER=/app/js/*.js
COPY ./start-nginx.sh /usr/bin/start-nginx.sh
RUN chmod +x /usr/bin/start-nginx.sh
CMD [ "start-nginx.sh" ]
