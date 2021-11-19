const db = require("../models")
const User = db.users

exports.create = async (req, res) => {
    const { username, record } = req.body
    try {
        const user = await User.create({ username, record })
        if (user) {
            res.status(201).json({ user })
        } else {
            res.status(400).json({ error: "something went wrong" })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}