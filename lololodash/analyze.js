var _ = require("lodash");

var worker = function(freelancers) {
  var total = 0;
  var count = 0;
  _.forEach(freelancers, function (freelancer) {
   count += 1;
   total += freelancer.income;
  });
  var average = total / count;

  var overperform = _.filter(freelancers, function (freelancer) {
    if (freelancer.income > average) {
      return true;
    }
  })
  overperform = _.sortBy(overperform, "income");

  var underperform = _.filter(freelancers, function (freelancer) {
    if (freelancer.income <= average) {
      return true;
    }
  })

  underperform = _.sortBy(underperform, "income");

  return {
    "average": average,
    "underperform": underperform,
    "overperform": overperform
  }

};

module.exports = worker;
