import User from "../model/user.Model.js";

export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        console.log("getCurrentUser error:", error);
        res.status(500).json({
            success: false,
            message: `Error while fetching current user: ${error.message}`,
        });
    }
};


export const getAdmin = async (req, res) => {
  try {
    const adminEmail = req.adminEmail;

    if (!adminEmail) {
      return res.status(401).json({
        success: false,
        message: "Admin not authorized",
      });
    }

    return res.status(200).json({
      success: true,
      email: adminEmail,
      role: "admin",
    });

  } catch (error) {
    console.log("getAdmin error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};