const db = require('../db-config');

module.exports = {
    getAll,
    post
}

function getAll() {
    return db("task")
    .join("projects", "projects.id", "task.project_id")
    .select("project.project_title", "project.project_descr", "task.task_descr", "task.task_notes", "task.complete")
}
function post (task) {
    return db("task")
    .insert(task)
}