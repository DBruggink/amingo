const express = require('express');
const router = express.Router();

const FeedModel=require('../models/Feed')

router.get('/create',
            (req,res)=>{
                res.send('Please Create a Field')
            }

)

router.post('/create',
        (req,res)=>{
            
        const formdata={
                'description': req.body.description,
                'hashtags': req.body.hashtags,          
                'image': req.body.image,           
                'likes': req.body.likes,
                'fullname' : req.body.fullname,
                'date': req.body.date,
                'emirate': req.body.emirate           
                                      
            }
            const theFeed=new FeedModel(formdata);
            theFeed.save();
                    res.send('Feed Created')
                 



        }
)

router.get('/all',
            (req,res)=>{
                
                
                FeedModel
                .find()
                .then((results)=>{
                    res.json(
                    { message:'Here is Your Updated Feed',
                      results: results
                    })
                })
                

            }
)

module.exports = router