require('./styles/main.scss');

var $ = require('jquery'),
  appView = require('./views/app-view');

$(function() {
  'use strict';
  new appView();
});
