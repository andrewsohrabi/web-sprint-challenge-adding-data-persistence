// build your `Task` model here
const db = require('../../data/dbConfig');

// get all tasks
const getAll = async () => {
  // pull tasks from db and join with projects table on project_id
  const tasks = await db('tasks as t')
    .column(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
    .join('projects as p', 't.project_id', 'p.project_id')

  return tasks.map(task => {
    // map over all tasks and update completed field if true
    return {
      ...task,
      task_completed: task.task_completed ? true : false
    }
  })
};

const create = async (task) => {
// deconstruct id from tasks table after inserting new task 
  const [id] = await db('tasks').insert(task, ['task_id']);
  // use that id to get the new task
  const newTask = await getById(id);
  //console.log(newTask)
  return {
    ...newTask,
    task_completed: newTask.task_completed ? true : false
  }
};

const getById = (task_id) => {
  return db('tasks').where({ task_id }).first();
};

module.exports = {
  getAll,
  create
};