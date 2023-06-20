var express = require("express");
var router = express.Router();

const gunungController = require("../controllers/gunungController");
const alatController = require("../controllers/alatController");

router.route("/gunung").get(gunungController.gunungShow).post(gunungController.gunungCreate);
router.get("/gunung/:id", gunungController.gunungDetail);

router.route("/alat").get(alatController.alatShow).post(alatController.alatCreate);
router.get("/alat/:id", alatController.alatDetail);

module.exports = router;
