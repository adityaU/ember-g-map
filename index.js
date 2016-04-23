/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-g-map',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    target.import('vendor/addons.css');
  },

  contentFor: function(type, config) {
    var content = '';
    return content;
  }
};
