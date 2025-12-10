import { generateToken } from "../utils/token_generator.js";

const default_user = {
    id: 1,
    email: 'user@gmail.com',
    password: 'contrasenia'
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    if(email === default_user.email && password == default_user.password) {
        const token = generateToken({id: 1, email});
        res.json({token});
    } else {
        res.sendStatus(401);
    }
}