"use strict";

const env = require("require-env"),
  express = require("express");

const HOSTS = env.require("HOSTS").split(" "),
  PROTOCOL = process.env.PROTOCOL || "http:";

const app = express().disable("x-powered-by");

app.use((req, res, next) => {
  return res.redirect(`${PROTOCOL}//${HOSTS[(Math.random() * HOSTS.length) | 0 ]}${req.path}`);
});

app.listen(process.env.PORT || 8080, function() {
 console.log("Listening at http://%s:%d/", this.address().address, this.address().port);
});
