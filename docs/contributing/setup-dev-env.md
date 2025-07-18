---
title: Setting up your developer environment
order: 1
---

## Step 1: Clone the repo

```sh
git clone https://github.com/semperai/MIYORA.git
```

## Step 2: Install dependencies

If you haven't already, please [install nvm](https://nvm.sh/).

You will have to ensure that you've added `nvm` to your `PATH` via `.bashrc` `.zshrc` or other shell run command script.

## Step 3: Bootstrap project

Install Node modules for the root package:

```sh
npm install # To install dependencies
npm run dev # To start
```

from the root directory


## Developing MIYORA

### Developing

To develop MIYORA, run the `dev` command in your console:

```sh
npm run dev
```

This will watch for changes and auto-rebuild as you code.
