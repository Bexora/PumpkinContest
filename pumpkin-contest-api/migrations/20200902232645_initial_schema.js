exports.up = knex => {
    return knex.schema
        .createTable('dog', table => {
            table.increments('id').primary()
            table.string('name')
            table.integer('age')
        })
}

exports.down = knex => {
    return knex.schema
        .dropTableIfExists('dog')
}