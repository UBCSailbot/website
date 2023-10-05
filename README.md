# Website

In the website development timeline, we are currently evaluating the folllowing software stack:
[Next.js](https://nextjs.org/) website (this repository), [MongoDB](https://www.mongodb.com/) database, and
[Grafana](https://grafana.com/) dashboards.
The easiest way to evaluate these potential solutions for our purposes is in [sailbot_workspace](https://github.com/UBCSailbot/sailbot_workspace).

## Database

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application
developers and for the cloud era. If you want to learn more about MongoDB, visit their docs site: [MongoDB Documentation](https://docs.mongodb.com/).

## Set Up

1. Set each variable in `.env.local`
    - `MONGODB_URI`: Your MongoDB connection string. Use `mongodb://localhost:27017/<DB_NAME>` to connect to the local database.
    - `NEXT_PUBLIC_SERVER_HOST`: The host URL of the website. Use `http://localhost` to connect locally.
    - `NEXT_PUBLIC_SERVER_PORT`: The port number of the website. Use `3005` to connect locally.

## Run

Using [Sailbot Workspace](https://github.com/UBCSailbot/sailbot_workspace),
the website should be up and running on [http://localhost:3005](http://localhost:3005).

Otherwise, you execute the following commands to run it in development mode:

```bash
npm install
npm run dev
```

## Adding Dependencies

1. Go into the terminal of the website container on Docker.

2. Run the command `npm install <dependency>`. If you run into errors resolving peer dependencies, e.g.
`ERESOLVE overriding peer dependency`, please rerun the command using `npm install <dependency> --legacy-peer-deps`.
Please DO NOT use `--force` unless you know what you're doing.

3. After the installation completes, please ensure to commit the files `package.json` and `package-lock.json`. These
files are used to version control the dependencies added.
