/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      defaultsTo: 'user'
    },
    email: {
      type: 'string',
      isEmail: true,
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      encrypt: true
    }
  },

};

