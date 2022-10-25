import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
	title: {type: String, required: true},
	body: {type: String, required: true},
	postId: {type: String, required: true},
	userId: {type: String, required: true}
}, {timestamps: true});

export const Comment = mongoose.model('Comment', CommentSchema)