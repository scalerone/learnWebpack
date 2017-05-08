//main.js 
// require("!style-loader!css-loader!./style.css");
 require("./style.css");
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());