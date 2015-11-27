var _ = require("lodash");


var worker = function(items) {
   return _.chain(items)
    .map(function(item){return item+"CHAINED"})
    .map(function(item){return item.toUpperCase()})
    .sortBy(this);
};

module.exports = worker;
