const User = require('../controllers/users.controller')
const router = require('express').Router()
router.get('/', User.index)
router.get('/add', User.add)
router.get('/getAddLogic', User.addLogic)
router.get('/addPost', User.addPost)
router.post('/addPost', User.addPost)
router.get('/single/:id', User.single)
router.get('/edit/:id', User.edit)
router.post("/edit/:id", User.editLogic)
router.get("/delete/:id", User.del)
router.get("/change/:id", User.change)


module.exports = router