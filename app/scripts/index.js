var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var SubmitButtonCollection = require('./models/submit').SubmitButtonCollection;


var loadingFetch = new SubmitButtonCollection();
// loadingFetch.fetch();
// console.log(loadingFetch);

//****SETTING UP THE LOADING ONCE PUSHED FEATURE******
loadingFetch.on('request', function() {
  $('.submit').text('Loading...');
});
//******SETTING UP THE FETCHING DATA FROM API ******
loadingFetch.on('sync', function() {
  console.log(loadingFetch);
  setTimeout(function() {
    $('.submit').text('Submit');
  }, 1000);
});
//****POSTING RESULTS TO THE DOM*****
$('.blog-post').append('<ul></ul>');
loadingFetch.on("add", function(data) {
  $('.blog-post ul').append('<li>' + data.get('title') + '</li>');
});
//*****FETCHING THE DATA ONCE THE BUTTON IS PUSHED*****
$('#loading-button').on('click', function(e) {
  e.preventDefault();
  loadingFetch.fetch()

});

//***CREATING FORM TO POST TO API SERVER*****
$('#blog-submit').on('click', function(e) {
  e.preventDefault();

  loadingFetch.create({
    title: $('#blog-title').val(),
    blog: $('#blog-post-box').val()
  });
  $('#blog-title').val('');
  $('#blog-post-box').val('');
})
