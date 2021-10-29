const router = require("express").Router(); // Ge the router instance of Express
const userController = require("../controllers/user"); // Get all exported functions in the user controller

// Map the `signup` request to the signup function
router.post("/signup", userController.signup);

// router.get("/verify/:confirmationToken", (req, res) => {
//   res.status(200).json({ msg: "hi" });
// });

// Map the `verify` request to the verify function
router.get("/verify/:confirmationToken", userController.verifyEmail);

module.exports = router;
