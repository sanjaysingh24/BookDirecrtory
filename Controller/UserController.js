import {User} from '../model/UserModel.js'
//controller for create a new user
import bcrypt from 'bcrypt';
const saltRounds = 10;
export const Register = async (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      const newUser = new User({
        Name: req.body.username,
        email: req.body.email,
        phone: req.body.number,
        password: hash,
      });

      const doc = await newUser.save();

      // console.log(doc);
      // console.log('Successfully Registered');
      // res.json({ success: true, message: 'Successfully registered' });
      res.redirect('/');

   
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


//code for login user

export const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ Name: username });

    if (!user) {
      // User not found
      // return res.json({ success: false, message: 'Invalid username or password' });
      res.redirect('/');
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (result === true) {
        // Passwords match
        console.log('Successfully logged in');
        // res.json({ success: true, message: 'Successfully logged in' });
        res.redirect('/home');
      } else {
        // Passwords do not match
        console.log('Login failed');
        // res.json({ success: false, message: 'Invalid username or password' });
        res.redirect('/');
      }
    });
  } catch (err) {
    console.error(err);
    res.redirect('/');
    // res.status(500).json({ success: false, message: 'Server error' });
  }
};


