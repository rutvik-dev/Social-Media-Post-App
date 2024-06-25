const Post = require('../model/POST');
const User = require('../model/USER');

// Create post
let CreatePost = async function (req, res, next) {
    try {
        const { title, content, userId } = req.body;
        const CreatePost = await Post.create({ title, content, userId });

        await User.findByIdAndUpdate(author, { $push: { author : CreatePost._id } });
        res.status(201).json({
            status: "success",
            message: 'Create Post successfully',
            Data: CreatePost
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}
// Read post
let ReadPost = async function (req, res, next) {
    try {
        id = req.params.id
        const posts = await Post.findById(id).populate('userId');

        res.status(201).json({
            status: "success",
            message: 'Read Post successfully',
            Data: posts
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Update post
let UpdatePost = async function (req, res, next) {
    try {
        id = req.params.id
        const updatepost = await Post.findByIdAndUpdate(id, req.body, { new: true }).populate('userId')
        if (!updatepost) {
            return res.status(404).send('Post not found');
        }
        res.status(201).json({
            status: "success",
            message: 'Update Post successfully',
            Data: updatepost
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Delete post
let DeletePost = async function (req, res, next) {
    try {
        id = req.params.id
        const deletepost = await Post.findByIdAndDelete(id)
        if (!deletepost) {
            return res.status(404).send('Post not found');
        }
        
        await User.findByIdAndUpdate(deletepost.author, { $pull: { author: deletepost._id } });
        res.status(201).json({
            status: "success",
            message: 'Update Post successfully',
            Data: deletepost
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


module.exports = {CreatePost,ReadPost,UpdatePost,DeletePost}