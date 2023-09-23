# Website

In the website development timeline, we are currently evaluating the folllowing software stack:
[Next.js](https://nextjs.org/) website (this repository), [MongoDB](https://www.mongodb.com/) database, and
[Grafana](https://grafana.com/) dashboards.
The easiest way to evaluate these potential solutions for our purposes is in [sailbot_workspace](https://github.com/UBCSailbot/sailbot_workspace).
This repository starts from the [Next.js with-mongodb example](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)
to connect to the MongoDB database in sailbot_workspace.

## Example app using MongoDB

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application
developers and for the cloud era. This example will show you how to connect to and use MongoDB as your backend for your
Next.js app.

If you want to learn more about MongoDB, visit the following pages:

- [MongoDB Atlas](https://mongodb.com/atlas)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Deploy your own

Once you have access to the environment variables you'll need, deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?project-name=with-mongodb&repository-name=with-mongodb&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-mongodb&integration-ids=oac_jnzmjqM10gllKmSrG0SGrHOH)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with
[npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io)
to bootstrap the example:

```bash
npx create-next-app --example with-mongodb with-mongodb-app
```

```bash
yarn create next-app --example with-mongodb with-mongodb-app
```

```bash
pnpm create next-app --example with-mongodb with-mongodb-app
```

## Configuration

### Set up a MongoDB database

Set up a MongoDB database either locally or with [MongoDB Atlas for free](https://mongodb.com/atlas).

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. 

### Run the Website in development mode

```bash
npm install
npm run dev
```

Your app should be up and running on [http://localhost:3005](http://localhost:3005).
