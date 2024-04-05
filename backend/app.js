const express = require("express");
const app = express();

const port = 5500;

var cors = require("cors");
app.use(cors());

const routes = require("./routes");
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
