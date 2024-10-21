const userModel = require("../model/userModel");
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      const newUser = new userModel({
        name,
        email,
        password,
      });

      await newUser.save();

      return res.status(200).send({ message: "User registered successfully", success: true });
    } else {
      return res.status(400).send({ message: "User already exists", success: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message, success: false });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid login credentials', success: false });
    }

    const isMatch = await user.comparePassword(password);
    if (isMatch) {
      const payload = { _id: user._id, name: user.name };
      const token = jwt.sign(payload, 'prajwal', { expiresIn: '10h' });

      return res.status(200).send({ message: "Login Successful", token, success: true });
    } else {
      return res.status(401).send({ message: 'Incorrect password', success: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message, success: false });
  }
}

module.exports = {
  register,
  login
}
