import jwt from 'jsonwebtoken'
const veryToken = (req,res, next) => {
    try {
        const token =  req.headers['authorization']
        if(!token) return res.status(400).json({erro:"token not provided"})

            const decode = jwt.verify(token, process.env.SECRET_KEY)
            console.log(decode)
            req.username = decode.username
            next()
    } catch (error) {
        console.log(error)
    }
}

export default veryToken