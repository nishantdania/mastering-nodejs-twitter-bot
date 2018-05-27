# Mastering Nodejs Twitter Bot

Code for the twitter bot example from the book [Mastering Node.js](https://www.packtpub.com/web-development/mastering-nodejs-second-edition)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Running the app

Create a `.env` file in the root of the project and add the following to the file :

```
CONSUMER_KEY=<YOUR_CONSUMER_KEY>
CONSUMER_SECRET=<YOUR_CONSUMER_SECRET>
ACCESS_TOKEN=<YOUR_ACCESS_TOKEN>
ACCESS_TOKEN_SECRET=<YOUR_ACCESS_TOKEN_SECRET>
```

To generate these keys, create a new developer app in Twitter at [Twitter Developer App](https://apps.twitter.com/app/new)

Install the dependencies by running `npm install` in the root of the project.

Open 2 terminal windows and run the following processes:

`node server.js`

`node twitter.js`

Open the `index.html` in the browser to see the tweets being pulled.
