var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var SubmitButtonCollection = require('./models/submit').SubmitButtonCollection;


var loadingFetch = new SubmitButtonCollection();
// loadingFetch.fetch();
// console.log(loadingFetch);
loadingFetch.on('request', function() {
  $('.submit').text('Loading...');
});

loadingFetch.on('sync', function() {
  console.log(loadingFetch);
  setTimeout(function() {
    $('.submit').text('Submit');
  }, 1000);
});

$('#loading-button').on('click', function() {
  loadingFetch.fetch()

});
