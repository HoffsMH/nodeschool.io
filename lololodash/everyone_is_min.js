var _ = require("lodash");

var worker = function(towns) {
  var  output = { };
  output.hot = [];
  output.warm = [];

  _.forEach(towns, function(town, town_name){

    if (_.every(town, function (temp) {return (temp > 19)})) {
     output.hot.push(town_name)
    } else if  (_.some(town, function (temp) {return (temp > 19)})) {
     output.warm.push(town_name)
    };
  });

  return output

};

module.exports = worker;
