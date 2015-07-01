module.exports = function(app) {
  var express = require('express');
  var articlesRouter = express.Router();

  articlesRouter.get('/', function(req, res) {
    res.send({
      'articles': []
    });
  });

  articlesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  articlesRouter.get('/articles/:id', function(req, res) {
    console.log('here');
    res.send({
      'articles': {
        id: req.params.id,
        created_at: new Date().toISOString(),
        description: 'Coup',
        state: 'borrowed',
        nodes: 'bar',
        friend_id: 27,
      }
    });
  });

  articlesRouter.put('/:id', function(req, res) {
    res.send({
      'articles': {
        id: req.params.id
      }
    });
  });

  articlesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/articles', articlesRouter);
};
