const express = require("express");
const router = express.Router();
const {
  list,
  show,
  create,
  update,
  remove,
  showJokesByCustomer,
} = require("../controllers/customerControllers");

router.get("/", list);
router.get("/:id", show);
router.get("/:id/jokes", showJokesByCustomer);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;