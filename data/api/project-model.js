const db = require('../db-config');

module.exports = {
    getAll,
    post
}

function getAll() {
    return db("projects")
}
function post (projects) {
    return db("projects")
    .insert(projects)
}