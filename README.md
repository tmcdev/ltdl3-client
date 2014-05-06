ltdl3-client
============

Oh, hey, there's a live demo, if you want to see this in action. For now, though, unfortunately, you need to be on the UCSF network for it to work because the backend server this talks to is currently firewalled off. Harumph.

Demo: http://trott.github.io/ltdl3-client

Install dependencies:

Install [Node.js](http://www.nodejs.org/). This will install `npm` as well.

````
npm install -g grunt-cli
npm install
````

Build the app:

````
grunt build
````

The app is now in the `dist` directory.

Run tests:

````
grunt test
````

Open a dev instance of the app in a browser with LiveReload:

````
grunt serve
````
