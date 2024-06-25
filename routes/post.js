var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/POST1')

/*CREATE POST*/
router.post('/CreatePost',CONTROL.CreatePost);

/*GET ALL POST*/
router.get('/ReadPost/:id',CONTROL.ReadPost);

/*UPDATE ALL POST*/
router.patch('/UpdatePost/:id',CONTROL.UpdatePost);

/*DELETE ALL POST*/
router.delete('/DeletePost/:id',CONTROL.DeletePost);

module.exports = router;