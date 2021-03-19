// build your `/api/resources` router here
const router = require('express').Router();
const {checkResourceBody} = require('./middleware');
const Resource = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.status(200).json(resources);
  } catch(err) { 
      next(err) }
});

router.post('/', checkResourceBody, async (req, res, next) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(202).json(resource);
  } catch(err) { 
      next(err) }
});

// error catching middleware
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  })
});

module.exports = router;