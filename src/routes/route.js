const express = require("express")
const router = express.Router()
const { authontication, authorise } = require("../middlewares/auth")
const userController = require('../controllers/userController')
const validationmware = require("../middlewares/validationmware")
const bookController = require("../controllers/bookController")
const reviewController = require("../controllers/reviewController")
const { createauthor } = require("../controllers/AuthorController")

//login user
router.post("/login", userController.login)

//create user
router.post("/register", userController.createUser)

//create book
router.post("/books", bookController.createBook)

//Update book
router.put("/books/:bookId", bookController.UpdateBook)

//Delete book
router.put("/deletebook/:bookId", bookController.deleteBook)

router.get("/books", bookController.getallBook)

//create review
router.post("/createreview", reviewController.createreview)

router.get("/getreview/:bookid", reviewController.getreview)
//create author
router.post("/Author-register", createauthor)

module.exports = router