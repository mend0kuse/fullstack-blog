import { Author } from "../models/Author.js";

class AuthorController {
	async getAll(req, res) {
		try {
			const authors = await Author.find().sort({ "createdAt": "asc" });
			return res.status(200).json(authors);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async getById(req, res) {
		const authorId = req.params.id;
		if (authorId) {
			try {
				const author = await Author.findById(authorId);
				return res.status(200).json(author);
			} catch (e) {
				console.log(e);
				return res.status(500).json(e);
			}
		}
		return res.status(400).send('Bad Request');
	}
	async createAuthor(req, res) {
		try {
			// const { name, authorname, email, password, about } = req.body
			const post = await Author.create({ ...req.body })
			res.status(201).json(post);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
	async updateAuthor(req, res) {
		try {
			const author = req.body;
			if (!author._id) {
				return res.status(400).json({ 'message': 'id не указан' })
			}
			const updatedAuthor = await Author.findByIdAndUpdate(author._id, author, { new: true });
			return res.json(updatedAuthor);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async deleteById(req, res) {
		const authorId = req.params.id;

		if (authorId) {
			try {
				const author = await Author.findByIdAndDelete(authorId);
				return res.json(author);
			} catch (e) {
				console.log(e);
				return res.status(500).json(e);
			}
		}
		return res.status(400).send('Bad Request');
	}
}

export default new AuthorController()


