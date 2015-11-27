var _ = require("lodash");

var worker = function(towns) {

   _.forEach(towns, function (town, town_name) {
    var size_string;
    if (town.population > 1) {
      size_string = 'big';
    } else if (town.population > 0.5) {
      size_string = 'med';
    } else {
      size_string = 'small';
    };

     town.size = size_string;
  });
  return  towns
};

module.exports = worker;
