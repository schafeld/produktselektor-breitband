# produktselektor-breitband

SPA in Vue.js to select and configure broadband tariffs (Vodafone project)

## Project Setup

Project set up with Vue CLI using

- Babel
- VueRouter
- VueX
- PWA support
- SASS CSS precompiler
- dedicated config files
- linting with Prettier preset, on save
- E2E testing Cypress
- Tailwind CSS (no Vuetify)

## Start project

Development

````bash
 cd produktselektor-breitband
 npm run serve
 ````

 or with GUI

````bash
 cd produktselektor-breitband
 vue ui
 ````


Standalone web app

````bash
npm run build
cd dist
php -S localhost:8080
`````

## Add-Ons

### Setup and docs for dependencies, plugins etc.

Vuetify, [Getting Started](https://vuetifyjs.com/en/getting-started/quick-start/)

or rather 

Tailwind CSS


## initial Project Setup

Project initialized with ```vue create``` and custom setup (VueX, VueRouter, PWA, Lint-on-Save with Prettier).

[Manual addition](https://markus.oberlehner.net/blog/setting-up-tailwind-css-with-vue/#writing-purgeable-vue-components) of Tailwind and PurgeCSS.