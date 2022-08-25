const express = require("express");
const app = express();
const morgan = require("morgan");
const { createPool } = require("mysql2");

app.set("view engine", "ejs");
app.use(morgan("dev"));

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "gautam_az_201",
  connectionLimit: 10,
});

app.listen(3000);

pool.query(`select * from contact_info.contact`, (err, result, fields) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});

app.post("/createContact", (req, res) => {
  const query = req.query;
  const first_name = query["first_name"];
  const last_name = query["last_name"];
  const email = query["email"];
  const phone_number = query["phone_number"];
  var new_contact = `INSERT INTO contact_info.contact (first_name, last_name, email, phone_number) VALUES (?,?,?,?)`;

  pool.query(
    new_contact,
    [first_name, last_name, email, phone_number],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          message: "Contact Created !!!!!! ",
        });
      }
    }
  );
});

app.get("/getContact", (req, res) => {
  const query = req.query;
  const idcontact = query["idcontact"];

  var q = `select * from contact_info.contact where idcontact = ?`;
  pool.query(q, [idcontact], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        message: result,
      });
    }
  });
});

app.post("/updateContact", (req, res) => {
  const query = req.query;
  const idcontact = query["idcontact"];
  const email = query["email"];
  const phone_number = query["phone_number"];
  var q = `UPDATE contact_info.contact SET email = ? WHERE idcontact = ?`;
  var q1 = `UPDATE contact_info.contact  SET phone_number = ? WHERE idcontact = ?`;
  pool.query(q, [email, idcontact], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
  pool.query(q1, [phone_number, idcontact], (err, result) => {
    if (err) {
      console.log(err);
    }
  });

  res.json({
    message: "Contact Updated !!!!!!!!! ",
  });
});

app.post("/deleteContact", (req, res) => {
  const query = req.query;
  const idcontact = query["idcontact"];

  var q = `DELETE FROM contact_info.contact WHERE idcontact = ? `;
  pool.query(q, [idcontact], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        message: "Contact Deleted !!!!!! ",
      });
    }
  });
});
