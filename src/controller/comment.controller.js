const commentModel = require('../models/comment.model')

const LiveController = {};

LiveController.comment = async (req, res) => {
   const { name, email, mobile, discription, status } = req.body;
   try {
      const result = await commentModel.create({
         name: name,
         email: email,
         mobile: mobile,
         discription: discription,
         status: status,

      });
      res.status(201).json({ data: result });

   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Somthing went wrong' });
   }

};
LiveController.getComment = async (req, res) => {
   try {
      const result = await commentModel.find();
      res.status(200).json({ data: result });

   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Somthing went wrong' });
   }

};
LiveController.deleteComment = async (req, res) => {
   try {
      const result = await commentModel.findOne({_id: req.params.id});
      await result.deleteOne();
      res.status(200).json({ message: 'Comment deleted successfully' });

   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Somthing went wrong' });
   }

};

module.exports = LiveController;