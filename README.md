# Binding of Isaac: Four souls (character selection)

**Instructions**

Clone the repository

```bash
git clone <repository>
```

Create `.env` file in the root directory.

Define the necessary environment variables in `.env`.

Example contents of `.env`:

```

PORT=3001

```

Port 3001 will be used by default if not defined in `.env`

Before running the app you need to install requirements:

```bash
npm install
```

**Available scripts**

Inside `/frontend`:

Run in development mode (nodemon)

```bash
npm run dev
```

Run on a server

```bash
npm start
```

Inside `/foursouls` (root folder)

Run on a server

```bash
npm start
```

An optimized build version will run in the port specified in the `.env`.


# Push to Github

Changes made to the frontend have to be built inside `/frontend` folder

```bash
npm run build
```

Then you can commit & push normally
