'use strict';

const express = require('express');
const app = express();

// ROUTE Modules
const routes = require('./routes/index')

// ROUTES
app.use('/home', express.static(__dirname + '/public'));
app.use(routes);
// final route if all else fails
app.use((req, res) => {
  res.send("We only have eggs and chickens. Or chickens and eggs. Whichever comes first.")
})

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
