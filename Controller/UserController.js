import {User} from '../model/UserModel.js'
//controller for create a new user

export const Register =async(req,res)=>{
try{
  const newUser = new User(req.body);
  const doc = await newUser.save();
  res.json(doc);
  console.log("successfully Registered");
}catch(e){
 res.status(404).json({message: 'somtehing error'})
}

}
