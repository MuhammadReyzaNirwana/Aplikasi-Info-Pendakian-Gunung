var express = require("express");
var router = express.Router();

const gunungController = require("../controllers/gunungController");

const alatController = require("../controllers/alatController");

router.route("/gunung").get(gunungController.gunungShow).post(gunungController.gunungCreate);
router.get("/gunung/:id", gunungController.gunungDetail);

router.get("/alat", alatController.alatShow);
router.get("/alat/:id", alatController.alatDetail);
module.exports = router;
