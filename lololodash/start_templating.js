var _ = require("lodash");

var worker = function(data) {

  var x =  _.template('Hello <%= name %> (logins: <%= login.length %>)')( data);
  return x;
};

module.exports = worker;
