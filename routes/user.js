const express = require("express");
const router = express.Router();
const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.post("/addMultiple", createUser);

module.exports = router;
