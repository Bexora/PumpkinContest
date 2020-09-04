'use strict'

const { Model } = require('objection')

class Dog extends Model {
  static get tableName() {
    return 'dog'
  }
}

module.exports = Dog