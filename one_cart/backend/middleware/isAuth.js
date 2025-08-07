import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided", // FIXED: Use custom message
      });
    }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

if (!decoded?.id) {
  return res.status(401).json({
    success: false,
    message: "Invalid token payload",
  });
}


    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({
      success: false,
      message: error.message || "Authentication failed", // Safe fallback
    });
  }
};

export default isAuth;
