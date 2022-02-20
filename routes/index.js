const router = require("express").Router(); // Ge the router instance of Express
const userController = require("../controllers/user"); // Get all exported functions in the user controller
const fileController = require("../controllers/file");
const auth = require("../middleware/auth");
const { upload } = require("../middleware/multer");

// Map the `signup` request to the ssignup function
router.post("/signup", userController.signup);

// Map the `verify` request to the verify function
router.get("/verify/:confirmationToken", userController.verifyEmail);

// Map the `login` request to the login function
router.post("/login", userController.login);

// Map the 'upload' request to the upload function
router.post("/upload", auth, upload.single("file"), fileController.upload);

router.get("/file", auth, fileController.getAll);

router.get("/file/:createdBy/:fileId", auth, fileController.getFile);

router.get("/file", auth, fileController.searchFiles);

router.put("/file/:_id", auth, fileController.updateFile);

router.delete("/file/:_id", auth, fileController.deleteFile);

module.exports = router;
