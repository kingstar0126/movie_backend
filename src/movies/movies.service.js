const knex = require("../db/connection");

function list(){
    return knex("movies").select("*")
}


module.exports = {
    list,
}