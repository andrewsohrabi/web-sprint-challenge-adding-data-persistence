// build your `/api/tasks` router here
const router = require('express').Router();
const {validateTaskBody} = require('./middleware');
const Task = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.getAll();
    res.status(200).json(tasks);
  } catch(err) {
    next(err) }
});

router.post('/', validateTaskBody, async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(202).json(task);
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