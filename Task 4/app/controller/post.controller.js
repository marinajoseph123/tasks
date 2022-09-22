<<<<<<< HEAD
const postModel = require('../database/models/post.model')
class Post {
    static fetch = async(req,res) =>{
        try{
            const post = new postModel(req.body)
            await post.save()
            res.status(200).send({
                apiStatus: true,
                date: post,
                message: "posts added successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                date: e,
                message: e.message
            })

        }
    }
}
// const Post = mongoose.model(Post)
=======
const postModel = require('../database/models/post.model')
class Post {
    static fetch = async(req,res) =>{
        try{
            const post = new postModel(req.body)
            await post.save()
            res.status(200).send({
                apiStatus: true,
                date: post,
                message: "posts added successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                date: e,
                message: e.message
            })

        }
    }
}
// const Post = mongoose.model(Post)
>>>>>>> 7dc8cbd058080e4dfe8623b3d53ebfe4423d8e0e
module.exports = Post