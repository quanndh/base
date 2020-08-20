## Setup and install

- [Nodejs](https://nodejs.org/en/): v10.13 or higher
- [Yarn](https://classic.yarnpkg.com/lang/en/): v1.x.x
- [Docker](https://www.docker.com/)

## Before clone

On window: Run command

```bash

git config --global core.eol lf
git config --global core.autocrlf false

```

## Development Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn codegen`

Generate graphql query to the `__generated__` folder

### `yarn typegen`

Generate type for graphql query to the `src/graphql/type.interface.ts` file

## Libraries and Tools

| Category           | Recommended                                                                                                                                                                                                           |
| ------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State Management   | [apollo](https://www.apollographql.com/)                                                                                                                                                                              |
| Framework          | [nextjs](https://nextjs.org)                                                                                                                                                                                          |
| StyleSheet         | [styled-components](https://styled-components.com/), [styled-system](https://styled-system.com), [polished](https://github.com/styled-components/polished), [css-modules](https://github.com/css-modules/css-modules) |
| SiteBuilder        | [craft.js](https://craft.js.org)                                                                                                                                                                                      |
| Form               | [formik](https://jaredpalmer.com/formik/docs/overview), [yup](https://github.com/jquense/yup)                                                                                                                         |
| Localization       | [i18next](https://react.i18next.com)                                                                                                                                                                                  |
| DateTime           | [moment](https://momentjs.com)                                                                                                                                                                                        |
| SEO                | [next-seo](https://github.com/garmeeh/next-seo)                                                                                                                                                                       |
| Type-Checking      | [typescript](https://www.typescriptlang.org)                                                                                                                                                                          |
| Clean code linter  | [ESLint](https://eslint.org)                                                                                                                                                                                          |
| Code Formatter     | [Prettier](https://prettier.io)                                                                                                                                                                                       |
| DevTools           | [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)                                                                                       |
| Package Management | [Yarn](https://yarnpkg.com/lang/en)                                                                                                                                                                                   |
| IDE                | [Visual Studio Code](https://code.visualstudio.com)                                                                                                                                                                   |
