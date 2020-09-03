# This NextJs template uses  MongoDB and Mongoose for database, Tailwind for CSS and NextAuth for login. 

This template is a combined project from following examples. 
https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose 
https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss 
https://github.com/vercel/next.js/tree/canary/examples/with-next-auth

# MongoDB and Mongoose with Next.js



**Pet** is an application that allows users to add their pets' information (e.g., name, owner's name, diet, age, dislikes, likes, and photo). They can also delete it or edit it anytime.


## Install and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Configuration

### Step 1. Get the connection string of your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

For more details, follow this [MongoDB Guide](https://docs.mongodb.com/guides/server/drivers/) on how to connect to MongoDB.

### Step 2. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `MONGODB_URI` should be the MongoDB connection string you got from step 1.

### Step 3. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

