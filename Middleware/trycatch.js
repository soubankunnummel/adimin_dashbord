

const trycatchmiddleware = (callback) => {
return async (req,res,next) => {
    try {
        await callback(req,res,next)
    } catch (error) {
        console.log(error.message)
        res
        .status(res.statusCode < 400 ? 400 : res.statusCode || 500)
        .send(error.message);
    }
}
} 
export default trycatchmiddleware