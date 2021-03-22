# ni-frontend

This is the frontend for the Network Inventory. It is written in VueJS and
requires the [ni-backend](https://github.com/Network-Inventory/ni-backend) in
order to fully work.

## development

Before you begin make sure that you have npm, Docker and docker-compose
installed.

Get the env file from
[ni-production](https://github.com/Network-Inventory/ni-production)

```
wget https://raw.githubusercontent.com/Network-Inventory/ni-production/main/.env-example -o .env
```

change the `NI_BASE_URL` to the value where you host your dev environment.
Usually this would be `localhost`.

Install the npm packages with the following command:

```
npm install
```

start the backend and run the development server:

```
docker-compose up -d && npm run serve
```
