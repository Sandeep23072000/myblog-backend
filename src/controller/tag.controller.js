const tagModel = require('../models/tag.model')

const LiveController = {};

LiveController.tag = async (req, res) => {
   const { name, discription, status, words, new_words, keyword, meta_title, meta_discription } = req.body;
   try {
      const result = await tagModel.create({
         name: name,
         discription: discription,
         status: status,
         words: words,
         keyword: keyword,
         new_words: new_words,
         meta_title: meta_title,
         meta_discription: meta_discription,

      });
      res.status(201).json({ data: result });

   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Somthing went wrong' });
   }
  
};
LiveController.getTag = async (req, res) => {
   try {
      const result = await tagModel.find();
      res.status(200).json({ data: result });

   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Somthing went wrong' });
   }
  
};

// LiveController.deleteComment = async (req, res) => {
//    try {
//       const result = await tagModel.findOne({_id: req.params.id});
//       await result.deleteOne();
//       res.status(200).json({ message: 'Tag deleted successfully' });

//    } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: 'Somthing went wrong' });
//    }

// };

module.exports = LiveController;