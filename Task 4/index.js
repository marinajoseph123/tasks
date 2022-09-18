const PORT = process.env.PORT | 3003
const app = require("./app/src")
app.listen(PORT, ()=> console.log(`https://localhost:${PORT}`))