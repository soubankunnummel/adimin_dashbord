
import jwt from 'jsonwebtoken'

export const Login = (req , res ) => {
    console.log(req.body);
    const { username, password } = req.body;
    
    if (!username || !password) { 
        return res.status(400).json({ msg: "Missing fields" });
    }
    console.log(process.env.ADMIN_PASSWORD)
    if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ msg: "Invalid credentials" });
    }else {
        
        const token = jwt.sign({ username }, process.env.SECRET_KEY || ''); 
        res.status(200).json({ mssage: "Login Success",username:username, token: token });
    }
    
};