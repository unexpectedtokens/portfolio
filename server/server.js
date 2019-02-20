const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 5555;
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));
hbs.registerPartial(__dirname, "/views/partials");
app.set("view-engine", "hbs");
app.get("/", (req, res) => {
  res.render("index.hbs", { companyname: "homo" });
});
app.listen(port, () => {
  console.log(`listening on port ${port}, http://localhost:${port}`);
});
