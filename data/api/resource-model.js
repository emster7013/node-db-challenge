const db = require('../db-config');

module.exports = {
    getAll,
    post
}

function getAll() {
    return db("resource")
}
function post (resource) {
    return db("resource")
    .insert(resource)
}