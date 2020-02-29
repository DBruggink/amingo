//if app is in production(ie HEroku) check production env vars

if(process.env.NODE_ENV == 'production'){
    
    module.exports=require('./keys_prod.js')

// otherwise if on working (your laptop) check working env vars
} else{
    module.exports=require('./keys_work.js')
}