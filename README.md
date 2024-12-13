# Firebase Functions Monorepo

This repository contains multiple Firebase Cloud Functions organized in a monorepo structure using Yarn workspaces.

## Project Structure

```text
my-monorepo/

│--- packages/

│--- shared/ # Shared code used across functions

│--- hello-function/ # Hello world function

│--- goodbye-function/ # Goodbye function

└── package.json
```

## Prerequisites

- Node.js (v16, v18, or v20)

- Yarn (v1.22+)

- Firebase CLI (`npm install -g firebase-tools`)

## Setup

1. Clone the repository:

```bash

git clone <repository-url>

cd <repository-name>

```

2. Install dependencies:

```bash
yarn install
```

3. Login to Firebase:

```bash
firebase login
```

4. Initialize Firebase in your project (if not already done):

```bash
firebase init
```

5. Create a .runtimeconfig.json file in the every function directory next to the src directory with the following content:

```json
{
  "common": {
    "api_key": "local-api-key",
    "environment": "development"
  },
  "function_name": {
    "specific_key": "local-function-key"
  }
}
```

## Building

Build all packages:

```bash
yarn  build
```

Or build specific packages:

````bash

Build  shared  package  only

yarn  build:shared

Build  hello  function  only

yarn  build:hello

Build  all  functions

yarn  build:functions


## Running Functions Locally

Start  all  Firebase  emulators:
```bash

yarn serve

````

Or start specific function emulators:

````bash

Run  hello  function  only

yarn  serve:hello

Run  all  functions

yarn  serve:functions

## Adding a New Function

1.  Create  a  new  package  directory:

```bash

mkdir packages/new-function

````

2. Initialize the new function:

```bash

cd  packages/new-function

firebase  init  functions

```

3. Update the package.json:

```json
{
  "name": "@my-project/new-function",
  "version": "1.0.0",
  "dependencies": {
    "@my-project/shared": "",
    "firebase-admin": "^11.0.0",
    "firebase-functions": "^4.0.0"
  }
}
```

4. Add the function to firebase.json:

```json
{
  "functions": [
    {
      "source": "packages/new-function",
      "codebase": "new",
      "predeploy": ["npm --prefix \"$RESOURCE_DIR\" run build"]
    }
  ]
}
```

5. Add build scripts to root package.json:

```json
{
  "scripts": {
    "build:new": "yarn workspace @my-project/new-function build"
  }
}
```

## Adding environment variables

```bash

# Common configs
firebase functions:config:set common.api_key="your-api-key" common.environment="production"

# Hello function specific configs
firebase functions:config:set hello.specific_key="hello-specific-value"

# Goodbye function specific configs
firebase functions:config:set goodbye.specific_key="goodbye-specific-value"

```

## Deployment

Deploy all functions:

```bash
firebase  deploy  --only  functions
```

Deploy specific functions:

```bash

firebase  deploy  --only  functions:hello

firebase  deploy  --only  functions:goodbye

```

## Available Scripts

- `yarn build` - Build all packages

- `yarn build:shared` - Build shared package

- `yarn build:hello` - Build hello function

- `yarn build:functions` - Build all functions

- `yarn serve` - Start all emulators

- `yarn serve:hello` - Start hello function emulator

- `yarn serve:functions` - Start all function emulators

## Using Shared Code

Import shared code in your functions:

```typescript
import { commonFunction } from "@my-project/shared";

export const myFunction = functions.https.onRequest((req, res) => {
  commonFunction();

  res.send("Hello!");
});
```

## Troubleshooting

- If you get Node.js version errors, make sure you're using a supported version (16, 18, or 20)

- If shared code changes aren't reflected, rebuild the shared package

- If functions aren't found by the emulator, check the paths in firebase.json

## License

[Your License Here]
