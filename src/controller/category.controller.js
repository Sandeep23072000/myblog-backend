const categoryModel = require('../models/category.model')

const LiveController = {};

LiveController.category = async (req, res) => {
    const { name, discription, status, words, new_words, keyword, meta_title, meta_discription } = req.body;
    try {
       const result = await categoryModel.create({
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
 LiveController.getCategory = async (req, res) => {
    try {
       const result = await categoryModel.find();
       res.status(200).json({ data: result });
 
    } catch (error) {
       console.log(error);
       res.status(500).json({ message: 'Somthing went wrong' });
    }
   
 };
 
//  LiveController.deleteCategory = async (req, res) => {
//     try {
//        const result = await categoryModel.findOne({_id: req.params.id});
//        await result.deleteOne();
//        res.status(200).json({ message: 'Category deleted successfully' });
 
//     } catch (error) {
//        console.log(error);
//        res.status(500).json({ message: 'Somthing went wrong' });
//     }
 
//  };

module.exports = LiveController;