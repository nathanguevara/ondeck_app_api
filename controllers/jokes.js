const mysql = require('mysql');
const pool = require("../sql");

const list = (req, res) => {
    let sql = `SELECT * FROM ??`;
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
    const { id } = req.params;
    let sql = `SELECT * FROM ?? WHERE ?? = ?`;
    let replacements = ["jokes", "id", id];
    sql = mysql.format(sql, replacements);
    pool.query(sql, (err, row) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Hey! Something happened.");
      }
      res.json(row);
    });
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
      const { id } = req.params;
      const { body } = req;
      let sql = `UPDATE ?? SET ? WHERE id = ?`
      sql = mysql.format(sql, ["jokes", body, id]);
      pool.query(sql, (err, row) => {
          if (err) {
            console.error(err);
            return res.status(500).send("Hey! Something happened.");
          }
          res.json(row.message);
        });
      };

const remove = (req, res) => {
        const { id } = req.params;
        let sql = `DELETE FROM ?? WHERE ?? = ?`
        sql = mysql.format(sql, ["jokes", "id", id]);
        pool.query(sql, (err, row) => {
            if (err) {
              console.error(err);
              return res.status(500).send("Hey! Something happened.");
            }
            res.json(row.affectedRows);
          });
        };

  module.exports = { list, show, create, update, remove  };