import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	title: {type: String, required: true},
	body: {type: String, required: true},
	userId: {type: String, required: true}
}, {timestamps: true});

export const Post = mongoose.model('Post', PostSchema)
