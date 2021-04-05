/**
 * ActivityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  add: async (req, res) => {
    try{
      req.body.userID = req.params.userID;
      const activity = await Activity.create(req.body).fetch();
      if(!activity){
        throw new Error('Failed to create');
      }
      res.status(200).json({
        message: 'Activity created',
        data: activity
      });
    }catch(e){
      res.status(500).json({
        message: e.message
      });
    }
  },
  list: async (req, res) => {
    try{
      const activities = await Activity.find({userID:req.params.userID});
      if(!activities){
        throw new Error('No activities');
      }
      res.status(200).json({
        message: 'Activity List',
        data: activities
      });
    }catch(e){
      res.status(500).json({
        message: e.message
      });
    }
  },
  update: async (req, res) => {
    try{
      const activity = await Activity.updateOne({_id:req.body.activityID},req.body);
      if(!activity){
        throw new Error('No such activity');
      }
      res.status(200).json({
        message: 'Activity Updated',
        data: activity
      });
    }catch(e){
      res.status(500).json({
        message: e.message
      });
    }
  },
  delete: async (req, res) => {
    try{
      await Activity.archiveOne({_id:req.body.activityID});
      res.status(200).json({
        message: 'Activity deleted'
      });
    }catch(e){
      res.status(500).json({
        message: e.message
      });
    }
  }
};

