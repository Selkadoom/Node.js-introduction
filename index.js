const express = require("express");
let RoutesIndex = require("./ROUTES/index");
let routesUsers = require("./ROUTES/users");
let app = express();
app.use(routesUsers);
app.use(RoutesIndex);

app.listen(3000, "10.0.1.112", () => {
  console.log("funfando");
});
