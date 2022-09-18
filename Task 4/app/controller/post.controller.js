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
module.exports = Post