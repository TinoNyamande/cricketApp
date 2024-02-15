//require("dotenv").config();
const UserModel = require("./../models/UserModel");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  console.log("New error", err.message);
  let errors = { firstname: "", lastname: "", email: "", password: "" };
  if (err.message === "incorrect email") {
    console.log("IF New error", err.message);
    errors.email = "Email does not exist";
    return errors;
  }
  if (err.message === "incorrect password") {
    console.log("IF New error", err.message);
    errors.password = "Incorrect password";
    return errors;
  }

  if (err.code === 11000) {
    errors.email = "Email already exists";
    return errors;
  }
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
const maxAge = 60 * 60 * 5;
const createToken = (id) => {
  let secret = process.env.JWT_SECRET;
  return jwt.sign({ id }, secret, {
    expiresIn: maxAge,
  });
};
const signUp = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const user = await UserModel.create({
      firstname,
      lastname,
      email,
      password,
    });
    const token = createToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    console.log("Error", error);
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};
const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = {
  signUp,
  login,
  logout,
};
