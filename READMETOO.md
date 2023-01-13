# Using the tutorial located [here](https://www.youtube.com/watch?v=pFEZLQ6DOf0)

## tasks
- refactor differences between components and functions
- how do we use a config.json file
- MSAL
- integrate a sass complier
- using a linter
- pass/emit props by a component
- print a portion of the page
- testing with jest
- menu
  - resized menu not working
  - menu drop down not working
- nav-link active attribute
- should I be using Component type on all classes?
- understand functions with props
- how to pass props from the router
- new pages
  - shopping cart
  - google chart
  - movies
  - build a contact form with email
  - firebase/firestore real time update
  - git hub
- css
  - dark/light themes
  - bootstrap offcanvas
  - compare bootstrap, picocss, w3css and simplecss
- footer needs work

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
# install toast / uuid
> npm install solid-toast
> npm install uuid
```

## to refresh the site
edit <code>src/App.tsx</code> and save to reload.

#8:40 minutes into the lecture

########  ON MOUNT SEEMS TO BE RUNNING TWICE
