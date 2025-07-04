import jwt from "jsonwebtoken"

export const AuthMiddleware = (req, res, next) => {
    let token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null

    if (!token) {
        return res.send("Sizin tokeniniz yoxdur")
    }


    try {
        jwt.verify(token, process.env.SecretKey)
        next()
    } catch (error) {
        res.send("Sizin tokeniniz duzgun deyil")
    }

   
}

