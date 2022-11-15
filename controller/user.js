import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
import genPass from "../generatePassword.js";


dotenv.config();
const secret = process.env.SECRET;

export const signup = async (req, res) => {
    const { name, username, password, email, dob } = req.body;
    try {
        const user = await User.findOne({ username: username });
        console.log("Found: ", user);
        if (user) return res.status(400).json({ message: `user with this ${username} already  exist` });

        const useremail = await User.findOne({ email: email });
        console.log("Found: ", useremail);
        if (useremail) return res.status(400).json({ message: `user with this ${email} already  exist` });

        const salt = await bcrypt.genSalt(15);
        const pass = await bcrypt.hash(password, salt);
        const newUser = await User.create({ name, username, email, dob, password: pass })
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ success: true, result: newUser, token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

export const signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        console.log("Found: ", user);
        if (!user) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ success: true, result: user, token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};



