const express = require('express');
const router = express.Router({ mergeParams: true });
const connection = require('../config')

router.get('/', (req, res) => {
  connection.query('SELECT * FROM article', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des articles');
    } else {
      res.status(200).json(results);
    }
  });
});

router.route(['/:id', '/'])
.get(function (req, res) {
  connection.query(`SELECT * FROM article WHERE art_id=${req.params.id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération d'un article");
    } else {
      res.json(results).status(200);
    }
  });
})
  .post(function (req, res) {
    const formData = req.body;
    connection.query('INSERT INTO article SET ?', formData, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'ajout d'un article");
      } else {
        res.sendStatus(200);
      }
    });
  })
.put(function (req, res) {
  const formData = req.body;
  connection.query(`UPDATE perform SET ? WHERE art_id= ${req.params.id}`, [formData], err => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'un article");
    } else {
      res.sendStatus(200);
    }
  });
})
.delete(function (req, res) {
  connection.query(`DELETE FROM perform WHERE art_id= ${req.params.id}`, err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un article");
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router;