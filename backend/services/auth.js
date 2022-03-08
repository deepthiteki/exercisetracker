const user = require("../models/user.model");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    const { username, password, email, name } = req.body;

    const sameUsername = await user.findOne({ username: username });
    if (sameUser) {
      return res.send({
        status: 1,
        msg: "Username already exists.",
      });
    }
    const salt = await bcrypt.genSalt(10);
    let tempPassword = await bcrypt.hash(password, salt);
    const newUser = await user.create({
      username: username,
      password: tempPassword,
      email: email,
      name: name,
    });

    if (newUser) {
      return res.send({
        status: 0,
        msg: "User created",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(errror);
  }
};

const login = async(req,res) => {
    try{
        const{
            username,
            password
        } = req.body;
        if(!req.body || !username || !password){
            return res.send({
                status:1,
                msg:"Invalid data"
            })
        }
        const loginAttemmpt = await user.findOne({username:username});
        if(loginAttemmpt){
            const salt = await bcrypt.genSalt(10);
    let tempPassword = await bcrypt.hash(loginAttempt.password, salt);
    if(tempPassword==password){
        req.session.userid = loginAttemmpt._id;
        req.session.username = loginAttemmpt.username;
        return res.send({
            status:0,
            msg:"Logged In"
        })
    }
        }
        return res.send({
            status:1,
            msg:"Incorrect Password"
        })

    }
    catch(error){
        console.log(error);
        return res.status(400).send({
            msg:"Internal server error"
        })
    }
}

const forgotPassword = async(req,res) => {

}

module.exports = { signUp, login };
