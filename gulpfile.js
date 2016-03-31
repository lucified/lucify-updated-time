
var gulp = require('gulp');

var opts = {
  pageDef: {
    adsByGoogle: false,
    title: 'Lucify Updated Time – Example'
  },
  assetContext: 'lucify-updated-time-example/'
};

var builder = require('lucify-component-builder');
builder(gulp, opts);
