const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
title:{
    type:String,
    trim:true,
    // content:true
    // required:true
},
postType:{
    type:String,
    enum:['txt','file']
},
// content:{
//     type:String,
//     trim:true
// },
// file:{
//     type:String,
//     trim:true
// }
txt:{
    type:String,
    trim:true,
    required: function(){return this.postType=="txt"}
},
content:{
    type:String,
    trim:true,
    required: function(){return this.postType=!"txt"}
}
})
// postSchema.pre("save", async function(){
//     const title = this
//     if(title == Text) {
//         content:{
//             required
//         }
        
//     }
//     else{
//         file:{
//             required
//         }
//     }
// })

const Post = mongoose.model("Post",postSchema)
module.exports = Post