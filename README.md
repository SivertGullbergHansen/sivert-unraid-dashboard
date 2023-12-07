<img src="assets/preview.png" align="center" alt="Preview of website" />

# Astro 👨‍🚀

## Introduction 👋

This is a dashboard created for my NAS. It is a simple NextJs project built with Typescript, Tailwind and framer-motion.

## Features ✨

+ A grid of apps
+ A server list
+ Smooth animations
+ Beautiful styling

## Wishlist 🤞

+ Environment variables for better configuration
+ Status symbol for each app (online/offline)
+ Unraid community app for easy installation
+ CMS (A dashboard where you can customize your dashboard👀)

## Configuration ⚙️

Environment Variables will be added for further customization.

## Getting Started 🏃‍♂️

### Using Docker Image 🐳

Build image:

```bash
docker build -t dashboard https://github.com/SivertGullbergHansen/sivert-unraid-dashboard.git#main
```

Start container:

```docker
docker run -d -p 80:80 dashboard
```

### Manual 🤓

#### Requirements 📋

This project requires NodeJs. Get it [here](https://nodejs.org/en/download/).

I highly recommend installing [Yarn](https://yarnpkg.com/getting-started/install) (an alternate package manager to npm).


#### 1. Install dependencies

npm

```bash
npm i
```

Yarn

```bash
yarn
```

#### 2. Build and serve project

npm

```bash
npm run serve
```

Yarn

```bash
yarn serve
```

## Further development

To further develop this project, start the website in development mode, to enable hot-reloading:

npm

```bash
npm run dev
```

Yarn

```bash
yarn dev
```
