import { db } from "../db.js";


export const getPosts= (req, res)=>{

    const q = req.query.cat ? "SELECT * FROM post WHERE cat=?" : "SELECT * FROM posts";
    db.query(q, [req.query.cat], (err,data)=>{
        if(err) return res.send(err)

        return res.status(200).json(data)
    })

}
export const addPost= (req, res)=>{
    res.json("this is contoller")
}
export const getPost= (req, res)=>{
    res.json("this is contoller")
}
export const deletePost= (req, res)=>{
    res.json("this is contoller")
}
export const updatePost= (req, res)=>{
    res.json("this is contoller")
}