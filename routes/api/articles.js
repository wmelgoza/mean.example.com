var express = require('express');
var router = express.Router();
var articles = require('../../models/articles');

router.get('/', function(req, res, next) {
  articles.find({},function(err, articles){
    if(err){
     return res.json({'success':false, 'error': err});
   }
    return res.json({'success':true, 'articles': articles});
  });
});

router.get('/:articlesId', function(req,res){

  var articlesId = req.params.articlesId;
   articles.findOne({'_id':articlesId}, function(err, articles){
     if(err){
      return res.json({'success':false, 'error': err});
    }
     return res.json({'success':true, 'articles': article});
   });
 });

 router.post('/', function(req, res) {
  articles.create(new articles({
    title: req.body.title,
    description: req.body.description,
    keywords: req.body.keywords,
    body: req.body.body,
    published: req.body.published

  }), function(err, article){

    if(err){
      return res.json({success: false, articles: req.body, error: err});
    }

    return res.json({success: true, articles: article});

  });
});

router.put('/', function(req, res){

  Articles.findOne({'_id': req.body._id}, function(err, articles){

   if(err) {
     return res.json({success: false, error: err});
   }

   if(articles) {

    let data = req.body;

    if(data.title){
      articles.title = data.title;
    };

    if(data.description){
    articles.description = data.description;
    };

    if(data.keywords){
    articles.keywords = data.keywords;
    };

    if(data.body){
    articles.body = data.body;
    };

    if(data.published){
   articles.published = data.published;
      };

    articles.save(function(err){
      if(err){
        return res.json({success: false, error: err});
      }else{
        return res.json({success: true, articles:articles});
      }
    });

   }

  });

});

router.delete('/:articlesId', function(req,res){

  var articlesId = req.params.articlesId;

  articles.remove({'_id':articlesId}, function(err,removed){

    if(err){
      return res.json({success: false, error: err});
    }

    return res.json({success: true, status: removed});

  });

});
module.exports = router;
