const mysql = require('mysql');
const pool = require("../sql");

const list = (req, res) => {
    let sql = `SELECT * FROM jokes`;
    sql = mysql.format(sql, ["jokes"]);
    pool.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Hey! Something happened.");
      }
      res.json(rows);
    });
  };

const show = (req, res) => {
  pool.query(
    `SELECT * FROM jokes WHERE id = ${req.params.id}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

  const create = (req, res) => {
    const { joke_text, tomato } = req.body;
  
    pool.query(
      `INSERT INTO jokes (joke_text, tomato) 
        VALUES ("${joke_text}","${tomato}")`,
      (err, row) => {
        if (err) {
          console.log({ message: "Error occurred: " + err });
          return res.status(500).send("An unexpected error occurred");
        }
        res.json(row);
      }
    );
  };
  const update = (req, res) => {
    let sql = "UPDATE ?? SET ? WHERE ?? = ?";
    sql = mysql.format(sql, ["customers", req.body, "id", req.params.id]);
    pool.query(sql, (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    });
  };

      const remove = (req, res) => {
        pool.query(
          `DELETE FROM jokes WHERE id = ${req.params.id}`,
          (err, row) => {
            if (err) {
              console.log({ message: "Error occurred: " + err });
              return res.status(500).send("An unexpected error occurred");
            }
            res.json(row);
          }
        );
      };

  module.exports = { list, show, create, update, remove  };