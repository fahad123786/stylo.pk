const User = require("../models/user.model")
var jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")
const Salt = 10;



exports.register = async (req, res) => {
    try {
        const { password } = req.body; 
        const encryptedPassword = await bcrypt.hash(password, Salt);
        req.body.password = encryptedPassword;
        const user = await User.create(req.body); 
        res.status(200).json({ message: "User created successfully", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
};

exports.verifyUser = async (req, res) => {
    try {
        const { code } = req.body;

        // Find user with the verification code
        const user = await User.findOne({ code: code });

        // If no user is found, return an error response
        if (!user) {
            return res.status(404).json({ message: "Verification code is invalid", success: false });
        }

        // If the code matches, verify the email and clear the code
        if (code == user.code) {
            user.isEmailVerified = true;
            user.code = null;
            await user.save(); // Make sure the user data is saved

            // Generate JWT token
            const token = jwt.sign({ code: code }, process.env.JWT_SECRET || 'abc123456', { expiresIn: '1h' });

            // Send the success response with the token
            return res.status(200).json({
                message: "User Verified Successfully",
                success: true,
                token: token, 
            });
        } else {
            return res.status(400).json({ message: "Wrong verification code", success: false });
        }
    } catch (err) {
        // Log the error and return a server error response
        console.error(err);
        return res.status(500).json({ message: "Server error", success: false });
    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.json({ message: "User not found", status: 404, success: false });
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if (comparePassword) {
            var token = jwt.sign({ id: user._id }, 'abc12345');
            return res.json({ message: "User logged in Successfully", status: 200, success: true, token: token });
        }
        else {
            return res.json({ message: "Password not true", status: 404, success: false });
        }
    }

    catch (err) {
        console.log(err);
    }
}

exports.index = async (req, res) => {
    try {
        const users = await User.find()
        res.json({ status: 200, message: "User fetched successfully", users })

    }
    catch (err) {
        console.log(err);
    }
}


exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.json({ status: 404, success: false, message: `User not found` })
        }
        res.json({ status: 200, success: true, message: "User found successfully", user })
    }
    catch (err) {
        console.log(err);
    }
};


exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndDelete({ _id: id })
        if (!user) {
            return res.json({ status: 404, success: false, message: `Couldn't find user` })
        }

        res.json({ status: 200, message: "User Deleted successfully" })


    }
    catch (err) {
        console.log(err);
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!user) {
            return res.json({ status: 404, success: false, message: `Couldn't find user` })
        }

        res.json({ status: 200, message: "User Updated successfully" })


    }
    catch (err) {
        console.log(err);
    }
}