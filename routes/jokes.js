
const express = require('express');
const router = express.Router();
const { list, create, show, update, remove } = require('../controllers/jokes');

router.get("/jokes", list);

router.get("/jokes/:id", show);

router.post("/jokes/", create);

router.put("/jokes/:id", update);

router.delete("/jokes/:id", remove);

module.exports = router;