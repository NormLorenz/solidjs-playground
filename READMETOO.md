# Using the tutorial located [here](https://www.youtube.com/watch?v=pFEZLQ6DOf0)

## tasks
- ~~refactor router~~
- ~~local storage~~
- ~~global storage~~
- ~~intall bootstrap - solid-bootstarp~~
- ~~move the solidjs graphic to the home page~~
- ~~why is the app.tsx style sheet called app.module.css~~
- ~~use data as part of the route~~
- ~~spinner~~
- ~~download bootstrap locally~~
- ~~lazy loading~~
  - ~~theme dark/light~~
  - ~~mode expert/novice~~
- ~~move home page logo to assets~~
  - ~~on settings page, enable or disable buttons based upon the store~~
- ~~get rid of the users page and replace it with the about page~~
- ~~build a footer fragment~~
  - ~~also relocate the createEffect listeners~~
- ~~build a navigation fragment~~
- ~~position footer at the bottom on the page~~
- ~~move create effect to settings.tsx~~
- ~~Remove index.css file~~
- ~~Remove app.css file~~
- ~~Move and rename app.module.css file to Home.module.css~~
- ~~build out the settings page~~
- toaster - add to settings page
- refactor differences between components and functions
- config.json file
- shopping cart
- MSAL
- integrate a sass complier
- implement a service that pulls a remote user data and/or avatar
- linter
- pass/emit props by a component
- dark/light themes
- bootstrap offcanvas
- google chart
- how to print a portion of the page
- testing with jest
- figure out why we are loading so much stuff on startup
- firebase/firestore
- what the hell is the server component?
- menu
  - resized menu not working
  - menu drop down not working
- tasks list using global storage
- counter using signal
- server
- footer needs work
- build a utility class for creating updating local storage
- build a utility class for creating updating global storage
- style the site
- Tasks page
  - clear input box after use - check tutorial by ebinezer
  - refresh issue after adding new task
  - fix site refresh issue when losing tasks
- nav-link active attribute
- solidjs vscode extension
- should I be using Component type on all classes?
- new page for github
- refactor local storage to theme, mode, tasks
- understand functions with props
- how to pass props from the router
- fix spelling of App.tsx
- still having trouble with bootstrap

A general Component has no implicit children prop. If desired, you can specify one as in Component<{name: String, children: JSX.Element}>.

```bash
# to launch the app
> npm start
```

```bash
# install the router
> npm install @solidjs/router
```

```bash
# install bootstrap
> npm install bootstrap
> npm install bootstrap-icons
```

```bash
# install toast
> npm install solid-toast
```

## to refresh the site
edit <code>src/App.tsx</code> and save to reload.

#8:40 minutes into the lecture

########  ON MOUNT SEEMS TO BE RUNNING TWICE
