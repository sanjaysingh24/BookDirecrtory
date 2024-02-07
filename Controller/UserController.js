import {User} from '../model/UserModel.js'
//controller for create a new user
import bcrypt from 'bcrypt';
const saltRounds = 10;
export const Register =async(req,res)=>{
try{
  const newUser = new User({
    Name:req.body.username,
    email:req.body.email,
    Phone:req.body.phone,
    password:req.body.Password
  });
  bcrypt.hash(req.body.Password, saltRounds, function(err, hash) {
  newUser.password = hash;
  const doc = newUser.save();

  console.log(doc);
  console.log("successfully Registered");
  res.redirect('/');
});
  

}catch(e){

 res.redirect('/Register');
}

}


//code for login user
export const login = async(req,res)=>{
  try{
    const username =req.body.username;
    const password =req.body.Password;




    const user = await User.findOne({Name:username});
    bcrypt.compare(password, user.password, function(err, result) {
      if(result==true){
     
        res.redirect('/home');
      }
      else{
       
        res.redirect('/');
      }
  });
    
    
  }catch(err){
      res.redirect('/');
  }
}



