# Vue 3 + Typescript + Vite + Vuetify 3.3

<p align="center">
<img src="https://user-images.githubusercontent.com/480173/156953097-fe133174-2c02-4a7d-bb57-d28dd3332be2.png" alt="logo" width="300" height="300" />
</p>

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Includes [vue-router](https://router.vuejs.org/) and [Pinia](https://pinia.vuejs.org/) [^1].

In addition, [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), and [Prettier](https://prettier.io/) are also included and are set to be executed automatically at runtime and commit. (Since these settings are set strictly, please relax yourself.)

Also, when the development server is executed, it is checked in real time by [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker).

First define `VITE_APP_TITLE` in your `.env` file.

## ⚠ Important Notice

As of 3.3.0, TypeScript5 support is not sufficient due to problems on the Vuetify side. For this reason, you should add `// @ts-expect-error` before any `import` statements, such as when calling the `useTheme()` function.

Also, the first time you run a unit test, you will always get an error. Press `a` to rerun and the test will pass.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar) (and disable Vetur).

And use [Volar Takeover Mode](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode) for better performance.

## Commands

It is designed to be close to [create-vue](https://github.com/vuejs/create-vue-templates/tree/main/typescript-router-pinia-vitest) commands.

| Command       | Description                                            |
| ------------- | ------------------------------------------------------ |
| dev           | Start devserver.                                       |
| clean         | Clear devserver cache.                                 |
| type-check    | Check vue markup.                                      |
| lint          | Run ESLint and prettier.                               |
| lint:style    | Run Stylelint.                                         |
| test          | Run vitest                                             |
| test:unit     | Run Unit test                                          |
| coverage      | Output Coverage Report.                                |
| build         | Build for production.                                  |
| build:analyze | Execute Bundle Analyzer                                |
| build:clean   | Clear production build files.                          |
| build-only    | Build for production without checking. For Deploy use. |
| preview       | Run the program generated by the production build.     |

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

[^1]: [Pinia](https://pinia.vuejs.org/) is the recommended state management library to replace [Vuex](https://vuex.vuejs.org/) in the next Vue. see <https://github.com/vuejs/rfcs/discussions/270#discussioncomment-2066856>

## Troubleshooting

When adding or deleting files, an error may occur and even if the error is corrected, it may not be reflected in devserver. In that case, stop devserver and delete all the files in the `node_modules/.vite` directory. You can also run it with the `clean` command.

### Npm Scripts outputs `MODULE_NOT_FOUND`.

Due to [yarn issues](https://github.com/yarnpkg/berry/issues/4448), it may not work properly if the path contains non-ASCII characters (such as 日本語 or 한국어, 中文 etc.).

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

## See Also

- for Vue3
  - [vite-vue3-ts-starter](https://github.com/logue/vite-vue3-ts-starter)
  - [vite-elemental-plus-ts-starter](https://github.com/logue/vite-elemental-plus-ts-starter)
  - vite-bootstrap-vue-ts-starter - Comming soon.
- for Vue2
  - [vite-vue2-ts-starter](https://github.com/logue/vite-vue2-ts-starter) - Vite Vue2 starter.
  - [vite-vue2-vuetify-ts-starter](https://github.com/logue/vite-vue2-vuetify-ts-starter) - UI library using Vuetify2
  - [laravel9-vite-vue2-starter](https://github.com/logue/laravel9-vite-vue2-starter) - Vue2 for Laravel9 + Breeze.
  - [vite-vue2-ts-ssr-starter](https://github.com/logue/vite-vue2-ts-ssr-starter) - SSR (Server Side Rendering) Version.
# mall
