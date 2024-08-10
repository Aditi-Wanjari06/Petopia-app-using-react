import User from "../models/User.js";

const postSignUp = async (req, res) => {
    const {
      fullName,
      email,
      password,
     mobile_no
    } = req.body;
  
    const user = new User({
      fullName,
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

  const postLogin = async(req,res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({
      email : email,
      password : password
    });

    if(user){
      return res.json({
        success : true,
        message :"Login successfully..",
        data: user
      })
    }
    else {
      return res.json({
          success: false,
          message: "Invalid credentials",
          data: null
      })
  }
  }

  export {postSignUp, postLogin}
