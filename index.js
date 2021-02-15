const express = require('express');
let RoutesIndex = require('./ROUTES/index');
let routesUsers = require('./ROUTES/users')
let app = express();


app.listen(3000, () => {
  console.log("funfando");
});
