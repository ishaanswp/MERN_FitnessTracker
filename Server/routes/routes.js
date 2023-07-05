const router = require("express").Router();
const ContactusController = require("../Controllers/Contact");

router.post('/contactus',ContactusController.contactus)

module.exports = router;

