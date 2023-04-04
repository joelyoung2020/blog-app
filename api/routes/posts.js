import express from "express"
import {addPost, deletePost, getPost, getPosts, updatePost} from "../controllers/post.js"

const router = express.Router()
 
//fecth all post
router.get("/", getPosts)
//fetch single post
router.get("/:id",getPost)
//creat new post
router.post("/", addPost)
//delete specific post
router.get("/:id", deletePost)
//update specific post
router.put("/:id", updatePost)


export default router