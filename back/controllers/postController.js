import { Post } from "../models/Post.js";
import { Comment } from "../models/Comments.js";



class PostController {
	async getAll(req, res) {
		try {
			const posts = await Post.find().sort({ "createdAt": "asc" });
			return res.status(200).json(posts);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async getById(req, res) {
		const postId = req.params.id;
		if (postId) {
			try {
				const post = await Post.findById(postId);
				return res.status(200).json(post);
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
			const posts = await Post.find({ userId: userId }).sort({ "createdAt": "asc" });
			return res.status(200).json(posts);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async getCountPostsByUserId(req, res) {
		const userId = req.params.id;

		try {
			const postsNumber = await Post.find({ userId: userId }).count();
			return res.status(200).json(postsNumber);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}

	}
	async createPost(req, res) {
		try {
			const userId = req.user.id
			const post = await Post.create({ userId, ...req.body })

			res.status(201).json(post);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async updatePost(req, res) {
		try {
			const post = req.body;
			if (!post._id) {
				res.status(400).json({ 'message': 'id не указан' })
			}
			const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
			return res.json(updatedPost);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async deleteById(req, res) {
		const postId = req.params.id;

		if (postId) {
			try {
				const post = await Post.findByIdAndDelete(postId);

				await Comment.deleteMany({ postId: postId })

				return res.json(post);
			} catch (e) {
				console.log(e);
				return res.status(500).json(e);
			}
		}

		return res.status(400).send('Bad Request');
	}
}

export default new PostController()
