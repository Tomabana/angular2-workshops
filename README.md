# Angular 2 Discussion Portal

## Description
This project is a discussion portal written in Angular 2 which periodically pulls data from backend to keep fresh data on UI without refreshing the page.

It is derived from the official Angular 2 Documentation which can be found [here](https://angular.io/docs/ts/latest/tutorial/).

## Usage
Follow the following steps.

0: Install npm, typescript and json server
```
npm install -g json-server
```
```
npm install -g typescript
```
1: Clone repo
```
git clone
```
2: Install packages
```
npm install
```
3: Start server (includes auto refreshing) and gulp watcher
```
npm start
```

# Port bindings
Json-server is bind to port 3000, lite server to port 8000 (application is visible at this port) and BrowserSync (used by lite server) to port 8001.
You can change lite server and BrowserSync ports in `bs-config.json`. Json-server port can be changed in `package.json` file by changing:

`"start": "concurrent \"json-server --watch db.json\" \"npm run gulp\" \"npm run lite\" "` to:

`"start": "concurrent \"json-server --watch db.json --port NEW_PORT\" \"npm run gulp\" \"npm run lite\" "`

Please remember that when you change json-server port you have to fix urls in files:

* `comment.service.ts`
* `post.service.ts`