// build your `/api/projects` router here
const router = require('express').Router();
const {validateProjectBody} = require('./middleware');
const Project = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.status(200).json(projects);
  } catch(err) { 
    next(err) }
});

router.post('/', validateProjectBody, async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(202).json(project);
  } catch(err) { next(err) }
});

// ERROR CATCHING MIDDLEWARE
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  })
});

module.exports = router;