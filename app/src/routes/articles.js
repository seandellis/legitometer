const express = require('express');
const router = express.Router();
const bookshelf = require('../../db/knex');

const Article = require('../Models/Article.js');

// Unhandled rejection Error: Undefined binding(s) detected when compiling SELECT query: select "articles".* from "articles" where "mission_id" = ?
// Article.where({mission_id: req.body.mission_id}).fetchAll()

router.get('/api/articles', function(req, res, next) {
  Article.fetchAll()
  .then((articles) => {
     res.json({error: false, data: articles.toJSON()});
   })

  // knex('articles')
  //   .where('casefile_id', 1)   // where casefile_id === the one we want
  //   .then((articles) => {
  //     res.send(articles);
  //   })

});

// EXAMPLE
// let User = require('./user');
// app.get('/example/?', function(req, res, next) {
//   var userId = req.session.userId; // assume the User ID is stored in a session variable
//
//   User.where({id: userId}).fetch({withRelated: ['invoices']})
//       .then(function(user) {
//           console.log(user.related('invoices'));
//           res.json(user);
//       })
//       .catch(function(err) {
//           return next(new Error(err));
//       });
// });


// Adds a json column, using the built-in json type in postgresql, defaulting to a text column in older versions of postgresql or in unsupported databases. Note that when setting an array (or a value that could be an array) as the value of a json or jsonb column, you should use JSON.stringify() to convert your value to a string prior to passing it to the query builder, e.g.
//
// knex.table('users')
// .where({id: 1})
// .update({json_data: JSON.stringify(mightBeAnArray)});

// it is never getting here
router.post('/api/add-article', function(req, res, next) {
  console.log("add article route", req.body);
  // knex.raw('SELECT setval(\'articles_id_seq\', (SELECT MAX(id) FROM articles))')

  // .then(() => {
  //   console.log("add article", req.body);
  //   // knex insert here
  //   // knex('articles').insert({
  //   //   casefile_id: ,
  //   //   article: {headline: ,
  //   //             url: ,
  //   //             type: }
  //   // }, '*')
  //   .then(() => {
  //     res.sendStatus(200);
  //   })
  //   .catch((err) => {
  //     next(err);
  //   })
  // }); //end then
}); //end post

module.exports = router;
