const express = require('express');
const HomeController = require("../controllers/HomeController")


const router = express.Router();

router.get("/",HomeController.Home);
router.get("/about",HomeController.About);
router.get("/contact",HomeController.Contact);
router.get("/file-write",HomeController.FileWrite);
router.get("/upload",HomeController.Upload);
// router.post("/uploadFile",HomeController.UploadFile);

module.exports = router;


