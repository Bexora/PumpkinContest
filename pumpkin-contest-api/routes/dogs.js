var express = require('express');
const Dog = require('../models/dog');
var router = express.Router();

/* GET dogos list. */
router.get('/', async function(req, res, next) {
  let dogos = await Dog.query();
  res.send(dogos);
});

module.exports = router;
