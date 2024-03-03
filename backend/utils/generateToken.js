import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // Prevents client side JS from reading the cookie XSS attacks
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict", // Strict- means cookie will only be set in HTTPS CSRF protection forgery attacks
    secure: process.env.NODE_ENV === "production" ? true : false, // Cookie will only be set in HTTPS only in production
  });
};

export default generateToken;
