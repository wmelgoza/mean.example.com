var express = require('express');
var router = express.Router();
var Users = require('../../models/users');

router.get('/:userId', function(req,res){
  
  var userId = req.params.userId;
   Users.findOne({'_id':userId}, function(err, user){
     if(err){
      return res.json({'success':false, 'error': err});
    }
     return res.json({'success':true, 'user': user});
   });
 });

module.exports = router;