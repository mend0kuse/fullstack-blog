import { authorRouter } from "./routers/authorRouter.js"
import { postsRouter } from './routers/postRouter.js'
import { commentRouter } from './routers/commentRouter.js'
import { routerAuth } from './routers/authRouter.js'

import path from 'path'
import express from "express"
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
const PORT = 5000;
const __dirname = path.resolve()

app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ extended: true }))
app.use('/images', express.static(path.resolve(__dirname, 'back/images')));


app.use("/posts", postsRouter);
app.use("/authors", authorRouter);
app.use("/auth", routerAuth);
app.use("/comments", commentRouter);


async function dbsConnect() {
	try {
		await mongoose.connect('mongodb://10.100.3.210:27017/blog');
		console.log('База подключена');
	} catch (error) {
		console.log(error);
	}
}

app.listen(PORT, dbsConnect)
