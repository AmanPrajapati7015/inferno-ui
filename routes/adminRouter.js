require('dotenv').config();
const {Router} = require('express');

const router = Router();



router.get('/', (req, res)=>{
    res.render('display');

})





module.exports = router;