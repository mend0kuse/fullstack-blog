import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
	name: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	about: { type: String },
});

export const Author = mongoose.model('Author', AuthorSchema)

