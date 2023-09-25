# Website

In the website development timeline, we are currently evaluating the folllowing software stack:
[Next.js](https://nextjs.org/) website (this repository), [MongoDB](https://www.mongodb.com/) database, and
[Grafana](https://grafana.com/) dashboards.
The easiest way to evaluate these potential solutions for our purposes is in [sailbot_workspace](https://github.com/UBCSailbot/sailbot_workspace).

## Database

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application
developers and for the cloud era. If you want to learn more about MongoDB, visit their docs site: [MongoDB Documentation](https://docs.mongodb.com/).

## Set Up

1. Set each variable in `.env.local`:
    - `MONGODB_URI` - Your MongoDB connection string: `mongodb://<ip-address-of-workspace-container>:27017/testdb`
        - To find the ip address of the workspace container:
            - `docker network ls`
            - `docker network inspect <NETWORK ID OF WORKSPACE CONTAINER>`
            - Take the ip address from the field `IPv4Address` under `Containers`
                - For example, if it's `000.00.0.0/00`, then take `000.00.0.0` and ignore the slash
    - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - The API key to access the Google Maps API
        - To create an API key, please take a look at the following [documentation](https://ubcsailbot.atlassian.net/wiki/spaces/prjt22/pages/1875279895/Google+Maps+API+Key)

## Run

Using [Sailbot Workspace](https://github.com/UBCSailbot/sailbot_workspace),
the website should be up and running on [http://localhost:3005](http://localhost:3005).

Otherwise, you execute the following commands to run it in development mode:

```bash
npm install
npm run dev
```
