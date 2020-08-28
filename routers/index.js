const express = require("express");
const router = express.Router();
var personController = require("../controllers/PersonController");

router.post("/postPerson", personController.addPerson);
router.get("/", personController.getPeople);
router.get("/getPerson/:id", personController.deletePerson);
router.get("/getPersonEdit/:id", personController.editPerson);
router.get("/addPerson", personController.getPersonForm);
router.post("/editoPerson/:id", personController.editPersonUpdate);

module.exports = router;
