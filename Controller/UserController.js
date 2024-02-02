import {User} from '../model/UserModel.js'
//controller for create a new user
import bcrypt from 'bcrypt';
const saltRounds = 10;
export const Register =async(req,res)=>{
try{
  const newUser = new User(req.body);
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
  newUser.password = hash;
  const doc = newUser.save();
  res.json(doc);
  console.log("successfully Registered");
});
  

}catch(e){
 res.status(404).json({message: 'something error'})
}

}


//code for login user
export const login = async(req,res)=>{
  try{
    const username =req.body.Name;
    const password =req.body.password;




    const user = await User.findOne({Name:username});
    bcrypt.compare(password, user.password, function(err, result) {
      if(result==true){
        res.json({message:"successfully logged in"});
      }
      else{
        res.json({message:"failed to login"});
      }
  });
    
    
  }catch(err){
    res.json({message:"failed to login"});
  }
}



