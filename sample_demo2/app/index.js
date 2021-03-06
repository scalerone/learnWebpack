// CommonJS的风格
// require('./main.css');
// var sub = require('./sub');
// var $ = require('jquery');
// var moment = require('moment');
// var app  = document.createElement('div');
// app.innerHTML = '<h1>Hello World webpack</h1>';
// app.appendChild(sub());
// document.body.appendChild(app);

// $('body').append('<p>look at me! now is ' + moment().format() + '</p>');


//es2016
import './main.css';
import generateText from './sub';
//2nd way start
import $ from 'jquery';
import 'imports-loader?jQuery=jquery!./plugin.js';
//2nd way end
import moment from 'moment';

let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {

  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
//call our jquery plugin!
  $('p').greenify();

});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());