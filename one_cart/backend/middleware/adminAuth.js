import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
  try {
    // Try to get token from cookie or from Authorization header
    const token =
      req.cookies?.admin_token ||
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized - Admin token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({
        success: false,
        message: "Forbidden - Not an admin",
      });
    }

    req.adminEmail = decoded.email;
    next();
  } catch (error) {
    console.log("adminAuth error:", error.message);
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
