var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var SubmitButton = Backbone.Model.extend();

var SubmitButtonCollection = Backbone.Collection.extend({
  model: SubmitButton,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts',
  parse: function(data) {
    return data;
  }

});


module.exports = {
  SubmitButton: SubmitButton,
  SubmitButtonCollection: SubmitButtonCollection
}
