var express = require('express');
var Event = require('../models/Events');

router = express.Router();

var routeFunc = {
  'index': function(req, res) {
    res.json({ message: 'index' });
  },

  addNews: function(req, res) {
    var data = req.body.event;
    event = new Event(data);
    event.save(function(err) {
      if(err) res.json({message:err});
    });
    res.json({'event': event});
  }
};

router.get('/', routeFunc.index);
router.post('/addNews', routeFunc.addNews);

module.exports = router;
