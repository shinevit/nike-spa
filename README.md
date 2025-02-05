# React 19 + Tailwind CSS 4 + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Start the app

> `npm start`

## Build the app

> `npm run build`

_Find the `dist` folder after the build.    
To get the buld version of the app worked place a content of `dist` folder on a local web server or deploy to a remote host_

## Deploy the app under a docker locally

> `npm run deploy`

_It publishes `dist` folder to a local docker container. Nginx server is created with persistent `nginx` volume_

## Open the App with tone of these link on a web browser:

`http://localhost:5173`   
`http://[internal IP]:5173`

### Destroy a local server deployment

> `npm run destroy`