import { authorRouter } from "./routers/authorRouter.js"
import { postsRouter } from './routers/postRouter.js'
import { commentRouter } from './routers/commentRouter.js'
import { routerAuth } from './routers/authRouter.js'

import express from "express"
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/posts", postsRouter);
app.use("/authors", authorRouter);
app.use("/auth", routerAuth);
app.use("/comments", commentRouter);


async function dbsConnect() {
	try {
		await mongoose.connect('mongodb://0.0.0.0:27017/blog');
		console.log('База подключена');
	} catch (error) {
		console.log(error);
	}
}

app.listen(PORT, dbsConnect)
