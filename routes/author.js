const express = require('express')
const router = express.Router()
const Author = require('../models/author')
//All Authors Route
router.get('/', async(req, res) => {
    let searchOptions = {}
    if(req.query.name !=null && req.query.name !== ' ')
    {
        searchOptions.name = new RegExp(req.query.name,'i')
    }
  try{
      const authors = await Author.find(searchOptions)
      res.render('author/index',{
          authors:authors,
          searchOptions:req.query
        })
  }catch{
      res.redirect('/')
  }
})

//New Author Route
router.get('/new' ,(req,res) =>{
    res.render('author/new',{author:new Author()})
})

//Create Author Route
router.post('/',async(req,res) =>{
    //res.send(req.body.name)
    const author = new Author({
        name:req.body.name
    })
    try{
        const newAuthor = await   author.save()
       // res.redirect(`author/${newAuthor.id}`)
        res.redirect(`author`)

    }catch{
        res.render('author/new',{
                author:author,
                errorMessage:'Error creating Author'
            })
    }    
})


module.exports = router 