const express = require("express")
const app = express()
const db = require("./models")
const PORT = process.env.Port || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const userRoutes = require("./routes/user-routes")
app.use("/api", userRoutes)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    })
})