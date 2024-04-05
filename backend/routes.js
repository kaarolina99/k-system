const express = require("express");
const router = express.Router();

let users = [
  { name: "Karolina", password: "", id: "", class: "" },
  { name: "Julian", password: "", id: "", class: "" },
  { name: "Sara", password: "", id: "", class: "" },
  { name: "Henrik", password: "", id: "", class: "" },
  { name: "Erik", password: "", id: "", class: "" },
  { name: "Tidemann", password: "", id: "", class: "" },
];

router.get("/users", (req, res) => {
  res.send(users);
});

module.exports = router;
