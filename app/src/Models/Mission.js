'use strict';

const bookshelf = require('../../db/knex');

require('./Casefile');
require('./Article');
require('./User');

const Mission = bookshelf.Model.extend({
  tableName: 'missions',
  hasTimestamps: ['created_at', 'updated_at'],
  casefile: function() {
    return this.belongsTo('Casefile', 'id')
    // .query({
    //     select: ['casefile.id', 'casefile.name','casefile.created_at'],
    //     orderBy: ['casefile.created_at', 'DESC']
    //   });
  },
  articles: function() {
    return this.hasMany('Article').through('Casefile');
  },
  user: function() {
    return this.hasOne('User'); //is this true?
  },

});

module.exports = bookshelf.model('Mission', Mission);
