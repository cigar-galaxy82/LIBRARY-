const mongoose = require('mongoose')

const coverImageBasePath = 'uploads/bookCovers'

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    publishDate:{
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required : true
    },
    createdAt: {
        type: Date,
        required :true,
        default : Date.now
    },
    coverImageName: {
        type: String,
        required : true
    },
    author:{
       type : mongoose.Schema.Types.ObjectId,//this is referecing an another object
       required: true,
       ref: 'Author'
    }
})

module.exports = mongoose.model('Book' , bookSchema)
module.exports.coverImageBasePath = coverImageBasePath//because we dont want exports it as default we wanna exports it as a named variable which will be called coverImageBasePath 