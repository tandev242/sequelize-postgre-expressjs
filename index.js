const express = require('express')
const app = express()
const cors = require("cors")
const db = require("./models")
const checkConnection = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
checkConnection()
db.sequelize.sync()



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


require('./routes/user')(app)


app.listen(8000, () => {
    console.log(`Server is running on port ${8000}`)
})