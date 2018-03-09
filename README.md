This repository was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Main Commands

- [npm start](#npm-start)
- [npm test](#npm-test)
- [npm run build](#npm-run-build)

## Folder Structure

After creation, your project should look like this:

```
your-folder/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    index.js
    Actions/
    Components/
    Config/
    Containers/
    Pages/
    Reducers/
    Scss/
      App.scss
    Services/
    Store/
    Utils/
```

## Setup
- Checkput this branch
- run npm install
- run npm start

## Eslint
The project comes with a eslint, which is based on Airbnb: https://github.com/airbnb/javascript

Setting up your IDE right will show any Errors directly in the IDE and this makes it easier to find them. Eslint can not find any programitic failures. Therefore Babel loader will show up Error-Messages in the console which might be helpful.

## Code Splitting
We are using [react-loadable](https://github.com/jamiebuilds/react-loadable) which will load js files on demand and therefore will also keep track of the code-splitting.
- Splitting is defined on the Router-Level.
- Components used by a lot of Pages/Containers should be wrapped with react-loadable. This will decrease the size of the chunked bundles.

## CSS / PostCSS / SASS
We are using a mixture of SASS. SASS is only in use to use a customized version of Twitter Bootstrap.

You can find the customized configuration in: src/Scss/App.scss

The Stylelint configuration can be changed:
- Examples: https://github.com/stylelint/stylelint-config-standard/blob/master/index.js

**Scope of CSS**
You can import CSS from your React Component.
- When a Component is used

## IDE
Please setup your IDE.

**Visual Studio Code**
https://code.visualstudio.com/Download

Please use this custom configration to enable Linting.

Add the following extensions to the Installation:
- https://marketplace.visualstudio.com/items?itemName=abotteram.typescript-react-snippets
- https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

```
{
    "editor.tabSize": 2,
    "files.eol": "\n",
    "files.trimTrailingWhitespace": true,
    "stylelint.enable": true,
    "css.validate": false,
    "scss.validate": false,
    "files.associations": {
        "*.css": "postcss"
    }
}
```

**Atom/Webstorm/Sublime/etc**
Please add configuration steps for atom here, when you setup.

## Unit-Testing
Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

Jest runs together with enzyme.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

## Integration-Testing
ntb.

## Changing the Page `<title>`
We are using [React Helmet](https://github.com/nfl/react-helmet), a third party library which can modify the header section.
