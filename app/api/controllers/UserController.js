/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const User = require("../models/User");

module.exports = {
  register: async (req, res) => {
    try{
      const user = await User.create(req.body).fetch();
      if(!user){
        throw new Error('Failed');
      }
      res.status(201).json({
        message: 'User Registered !',
        data: user
      });
    }catch(e){
      res.status(400).json({
        message: e.message
      });
    }
  },
  login: async (req, res) => {
    try{
      const user = await User.findOne({email:req.body.email}).decrypt();
      if(!user || user.password != req.body.password){
        throw new Error('Failed');
      }
      res.status(201).json({
        message: 'User Logged In !',
        data: user
      });
    }catch(e){
      res.status(400).json({
        message: e.message
      });
    }
  }
};

