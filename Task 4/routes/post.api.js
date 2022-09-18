const router = require("express").Router()
const postController = require('../app/controller/post.controller')
router.post('/fetch', postController.fetch)
module.exports = router