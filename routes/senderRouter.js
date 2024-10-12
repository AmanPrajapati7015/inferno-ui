const uuid = require('uuid').v4;
const {Router} = require('express');

const router = Router();



router.get('/', (req, res)=>{
    const id = uuid();
    res.render('sender' , {id});
})





module.exports = router;