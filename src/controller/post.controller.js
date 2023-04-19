const postModel = require('../models/post.model');
const LiveController = {};

LiveController.post = async (req, res) => {
   //  const { author, title, discription, status, words, new_words, keyword, meta_title, meta_discription } = req.body;
   try {
      if(req.files.thumbnail && req.files.features){
         req.body.thumbnail = req.files.thumbnail[0].path;
         req.body.features = req.files.features[0].path;
      }

      const post = new postModel(req.body);
      await post.save();
      return res.status(200).send({
         success: true,
         data: post,
      });

   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Somthing went wrong' });
   }
  
};

LiveController.getAllPost = async (req, res) => {
   try {
      const posts = await postModel.find();
      if (posts){
         res.status(200).json({ message: 'Posts get successfully', data: posts });
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Somthing went wrong' });
   }
};
LiveController.getPost = async (req, res) => {
   try {
      const slug = req.params.slug;
      const posts = await postModel.findOne({slug: slug});
      if (posts){
         res.status(200).json({ message: 'Posts get successfully', data: posts });
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Somthing went wrong' });
   }
};
// LiveController.deletePost = async (req, res) => {
//    try {
//       const result = await postModel.findOne({_id: req.params.id});
//       await result.deleteOne();
//       res.status(200).json({ message: 'Post deleted successfully' });
//    } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: 'Somthing went wrong' });
//    }
// };

module.exports = LiveController;