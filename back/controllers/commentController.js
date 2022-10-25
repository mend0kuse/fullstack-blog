import { Post } from "../models/Post.js";
import { Comment } from "../models/Comments.js";

class CommentController {
	async getAll(req, res) {
		const postId = req.query.post;

		try {
			let comments;
			if (postId) {
				comments = await Comment.find({ "postId": postId }).sort({ "createdAt": "asc" });
			} else {
				comments = await Comment.find().sort({ "createdAt": "asc" });
			}
			return res.status(200).json(comments);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}

	}
	async getOneById(req, res) {
		const commentId = req.params.id;
		if (commentId) {
			try {
				const comment = await Comment.findById(commentId);
				return res.status(200).json(comment);
			} catch (e) {
				console.log(e);
				return res.status(500).json(e);
			}
		}
		return res.status(400).send('Bad Request');
	}
	async getByUserId(req, res) {
		const userId = req.params.id;

		try {
			const comments = await Comment.find({ userId: userId }).sort({ "createdAt": "asc" });
			return res.status(200).json(comments);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async getNumberByUserId(req, res) {
		const userId = req.params.id;

		try {
			const commentsNumber = await Comment.find({ userId: userId }).count();
			return res.status(200).json(commentsNumber);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async createComment(req, res) {
		try {
			// const { postId, userId, title, body } = req.body
			const comment = await Comment.create({ ...req.body })
			res.status(201).json(comment);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async updateComments(req, res) {
		try {
			const comment = req.body;
			if (!comment._id) {
				res.status(400).json({ 'message': 'id не указан' })
			}
			const updatedComment = await Comment.findByIdAndUpdate(comment._id, comment, { new: true });
			return res.json(updatedComment);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async deleteById(req, res) {
		const commentId = req.params.id;

		if (commentId) {
			try {
				const comment = await Comment.findByIdAndDelete(commentId);
				return res.json(comment);
			} catch (e) {
				console.log(e);
				return res.status(500).json(e);
			}
		}
		return res.status(400).send('Bad Request');
	}
}

export default new CommentController()














