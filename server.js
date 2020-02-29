//NodeJS - It is a desktop application its purpose is to turn JavaScript code into binary language so your computer can read the commands. Uses Chrome 8 compiler
//API - Rules that an appication wants others to follow
//HTTP - rules for communication on the WorldWideWeb
//Express - A bunch of files written in JS. Allows certain commands. e.g http requests 
//jQuery - a JS file for animation and AJAX on the web
//Ajax - For performing an HTTP request from the browser
//npm - desktop application - installs JS modules





//import all npm modules
const express = require('express');  // this line looks through package and uploads express library
const app = express(); // invoking the function of express, turns app into and object with all the express functions
const bodyParser = require('body-parser'); // making body parser library functional
const mongoose = require('mongoose'); // Uploading mongoose
const cors = require('cors');

//import models for db operations
const UserModel = require('./models/User');
//imoort routes
const UserRoutes = require('./routes/User');

const FeedModel = require('./models/Feed');
//imoort routes
const FeedRoutes = require('./routes/Feed');

const keys=require('./config/keys'); // keys work or keys production depending on the environment (local or deployed ie heroku)


// configure express to parse the BODY
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors())

const dbUrl = keys.DB_URL;
;// Connection url to the database
mongoose.connect(
    dbUrl,
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(
    ()=>{
        console.log('db is connected')
    }
).catch(
    (e)=>console.log('catch', e)
)

//Below are the routes for our web app

app.use('/user', 
        UserRoutes,
);
app.use('/feed', 
        FeedRoutes
);

app.get('/',             //new page
    (req,res)=>{
    res.send("<h1 style='color: orange'>Good day sir!</h1>"); 

    }
);


app.get('/home',             //two arguments, directory and a function
    (req,res)=>{
    res.send("<h1 style='color: orange'>Good day sir!</h1>"); //can also be written in html or as a string (however writing html in here would be back to the 90's )

    }
);

app.get('/about',             //new page
    (req,res)=>{
    res.send("<h1 style='color: orange'>Good day sir! Welcome to the About us page.</h1>"); 

    }
);

app.get('/contact',             //new page
    (req,res)=>{
    res.send("<h1 style='color: blue'>Good day sir! Welcome to the contact page.</h1>"); 

    }
);

app.get('/faqs',             //new page
    (req,res)=>{
    res.send("<h1 style='color: green'>Good day sir! Welcome to the FAQs.</h1>"); 

    }
);



app.get('/blog/:section/:date',             //Express example with dynamic URL parameters
    (req,res)=>{
        console.log(
            'the section is', req.query.section
        )
        console.log(
            'the section is', req.query.date
        )
    
        res.send("<h1 style='color: green'>Good day sir! Welcome to the FAQs.</h1>"); 

    }
);



app.get('*',             //new page ( * means everything, for example, everything that is not listed above will be linked to this page. ie 404 error)
    (req,res)=>{
    res.send("<h1 style='color: black'>404 Error</h1>"); 

    }
);






app.listen( 
    process.env.PORT ||                   //.listen also takes the same parameters as above. Port number and a function
    3010, // connect to this port
    ()=>{
        console.log('you are connected') // do this when connected
    }
);

// running node server.js for test will respond with 'you are connected'