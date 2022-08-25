//const express = require("express");
//const app = express();
//const morgan = require("morgan");
var FreshSales = require("freshsales-api");

//app.set("view engine", "ejs");
//app.use(morgan("dev"));

var authentication = {
  api_key: "8KaV07DWkIiQM8oGNnvErw",
};

//app.listen(3000);

//curl -H "Authorization: Token token=8KaV07DWkIiQM8oGNnvErw" -H "Content-Type: application/json" -X GET "https://domain.freshsales.io/apileads/1?include=owner"

/*
app.post("/createContact", (req, res) => {
  const query = req.query;
  const first_name = query["first_name"];
  const last_name = query["last_name"];
  const email = query["email"];
  const phone_number = query["phone_number"];
});

app.get("/getContact", (req, res) => {
  const query = req.query;
  const idcontact = query["idcontact"];
});

app.post("/updateContact", (req, res) => {
  const query = req.query;
  const idcontact = query["idcontact"];
  const email = query["email"];
  const phone_number = query["phone_number"];

  res.json({
    message: "Contact Updated !!!!!!!!! ",
  });
});

app.post("/deleteContact", (req, res) => {
  const query = req.query;
  const idcontact = query["idcontact"];
});

*/
