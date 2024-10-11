const jwt = require('jsonwebtoken')
require('dotenv').config()

const isAuthenticated = async (req,res,next) => {
    const headerObj = req.headers;
    const token = headerObj?.authorization?.split(" ")[1]
    
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET, (err,decoded) => {
        if(err) {
            return false;
        } else {
            return decoded;
        }
    })

    if(verifyToken) {
        req.user = verifyToken.id;
        next()
    } else {
        const err = new Error("TOKEN expired, please login again")
        next(err)
    }
}

module.exports = isAuthenticated;