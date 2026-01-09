import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const getSignup = (req, res) => {
    res.render('signup');
}

export const postSignup = async (req, res) => {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    await User.create({name,email,password:hashed});
    res.redirect('/login');
}

export const getLogin = (req, res) => {
    res.render('login');
}

export const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.redirect('/login');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.redirect('/login');
    }
    req.session.userId = user._id;
    res.redirect('/products');
   
}

export const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login');
}