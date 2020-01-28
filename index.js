const express = require('express');
const devcert = require('devcert');
const https = require('https');

const app = express();
const port = 3000;

app.use(express.static('./'));
async function run() {
  let ssl = await devcert.certificateFor('localhost');
  https.createServer(ssl, app).listen(port);
}
run();
