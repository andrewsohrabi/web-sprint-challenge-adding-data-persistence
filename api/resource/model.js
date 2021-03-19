// build your `Resource` model here
const db = require('../../data/dbConfig');

const getAll = () => {
  return db('resources');
};

// pass in resource object
const create = async (resource) => {
  // deconstruct id from new resource being created
  const [id] = await db('resources').insert(resource, ['resource_id']);
  // use that id in the return call to getById
  return getById(id);
};

// pass in resource_id
const getById = (resource_id) => {
  return db('resources').where({ resource_id }).first();
};

module.exports = {
  getAll,
  create
};