import {User} from '../model/UserModel.js'
//controller for create a new user

export const Register =async(req,res)=>{
try{
  const newUser = new User(req.body);
  const doc = await newUser.save();
  res.json(doc);
  console.log("successfully Registered");
}catch(e){
 res.status(404).json({message: 'something error'})
}

}

export const login = async(req,res)=>{
  try{
    const username =req.body.Name;
    const password =req.body.password;
    const user = await User.findOne({Name:username});
    if(user && user.password ===password){
       res.json({success:true});
       console.log("login successful");
    }
    else{
      console.log("login failed");
    }
  }catch(err){
    console.log(err);
  }
}
