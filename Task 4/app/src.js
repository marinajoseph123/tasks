<<<<<<< HEAD
require('dotenv').config()
require('./database/connection')
const express = require("express")
const path = require("path")
const app = express()
const staticDir = path.join(__dirname, "../public")
app.use(express.static(staticDir))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const postRoutes = require('../routes/post.api')
module.exports = app
=======
require('dotenv').config()
require('./database/connection')
const express = require("express")
const path = require("path")
const app = express()
const staticDir = path.join(__dirname, "../public")
app.use(express.static(staticDir))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const postRoutes = require('../routes/post.api')
module.exports = app
>>>>>>> 7dc8cbd058080e4dfe8623b3d53ebfe4423d8e0e
app.use(postRoutes)