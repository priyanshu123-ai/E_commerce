import nodemailer from "nodemailer"

export const sendEmail = async(req,res) => {
    try {
        const {email} = req.body;

        if(!email){
            return res.status(401).json({
                success:false,
                message:"Email is required"
            })
        }

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }

        })
        

        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:email,
          subject: "Welcome to Our E-Commerce Newsletter!",
          html: `<h2>Thank you for subscribing!</h2><p>Use code <strong>WELCOME20</strong> to get 20% off your first purchase.</p>`,

        })

        return res.json({
            success:true,
            message:"Email sent Sucessfully"
        })
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}