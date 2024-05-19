import mongoose from 'mongoose';
import PostMessage from '../models/postSchema.js'

export const getPosts = async (req, res) => {
    try {

        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async(req, res) => {

    const post = req.body;
    const newPost = new PostMessage(post);
    try {
       await newPost.save();
       console.log(newPost);
       res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json( { message:error.message });
    }
}

export const updatePost = async(req,res)=>{
    const {id:_id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) 
        return res.status(404).json('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
    res.json(updatedPost);
}

export const deletePost = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('No post with that id');
    }

    await PostMessage.findByIdAndDelete(id);
    res.status(200).json('Post is deleted');
}

export const likePost = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).json('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likesCount:post.likesCount+1},{new:true});

    res.json(updatedPost);
}