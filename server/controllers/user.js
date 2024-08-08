import User from "../models/User.js";

const postSignUp = async (req, res) => {
    const {
      Name,
      email,
      password,
     mobile_no
    } = req.body
  
    const user = new User({
      Name,
      email,
      password,
     mobile_no
    })
  
    try{const savedUser = await user.save();
    
      res.json({
        success: true,
        message:"User Registered Successfully..",
        data: savedUser
      })}
  
      catch(e){
        res.json({
          success: false,
          message: e.message,
          data: null
        })
      }
  }

  export {postSignUp}
