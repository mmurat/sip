var express = require('express');
router = express.Router();

var routeFunc = {
  'index': function(req, res) {
    res.json({ message: 'index' });

  }


}

module.exports = router.get('/', routeFunc.index);
