# ni-frontend

This is the frontend for the Network Inventory. It is written with the Quasar
framework and requires the
[ni-backend](https://github.com/Network-Inventory/ni-backend) in order to fully
work.

The application expects to reach the API always on the same url as it got
served.
However always on port 80 or 443.
Means if you server the VueJS from http://localhost:8080 e.g. with the
development server it will still look for the API at http://localhost.

## development

Before you begin make sure that you have Docker and docker-compose installed.
Afterwards just run:

```
docker-compose up --build
```
