// .use() configuration of express
//.post new POST route in express (communication of data to database) gives things to the database and stores it e.g string, numbers, BLOB(pictures/videos) all data in body can 
//.get new GET route in express (communication of data from database) recieves and can filter data using parameters this is where queries go
//.delete new delete route from express (deletes from database)
//.patch 

//can achieve almost everything with .post and .get express functions


const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const UserModel=require('../models/User')

router.post('/register',
        (req,res)=>{
            const formdata={
                'fullname': req.body.fullname,          
                'age': req.body.age,          
                'email': req.body.email,           
                'password': req.body.password,  
                'sports': req.body.sports,  
                'bio': req.body.bio,       
                'occupation': req.body.occupation,
                'image': req.body.image            
            }
            const theUser=new UserModel(formdata);

            // Generate the salt
            bcrypt.genSalt(
                (err, salt)=>{
            // Generate hashed password
            bcrypt.hash(
                formdata.password, salt,          //.hash. Requires three arguments, first two are the ingredients and last is the callback function. (where you want the password)
                (err, hashedPassword)=>{
                    theUser.password=hashedPassword // Replace theUser password to hashed password

                    theUser.save();
                    res.send('User Saved') //Save password
                }
            )
                }
            )


           
        }
);

router.post(
    '/login',
    (req, res)=>{
        const formdata= {
            email: req.body.email,
            password: req.body.password

        }
        UserModel.find({email: formdata.email})
        .then((isMatch)=>{
        if(isMatch.length>0){
           res.send('Email found')
        } else{
          res.send('Please Check email & pasword combo')

        }
        }
        )

    }

)

module.exports = router