const db = require('../db-config');

module.exports = {
    getAll,
    post
}

function getAll() {
    return db("task")
    .join("projects", "projects.id", "task.proj_id")
    .select("projects.name", "projects.description", "task.description", "task.notes", "task.completed")
}
function post(task) {
    return db("task")
    .insert(task)
}