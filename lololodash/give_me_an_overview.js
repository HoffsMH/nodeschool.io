    var _ = require("lodash");

    var worker = function(orders) {
      // console.log("\nthis is the whole object\n");
      // console.log("------------------------\n");
      // console.log(orders);
      // var output = _.reduce(orders, function (sum,param1) {
      //   sum = sum.quantity;
      //   console.log("\nthis is sum\n");
      //   console.log("------------------------\n");
      //   console.log(sum);
      //   console.log("\nthis is param1\n");
      //   console.log("------------------------\n");
      //   console.log(param1);
      //   console.log("\n WE ARE DONE WITH THE LOOP\n");
      //   console.log("------------------------\n");
      //   return param1;
      // });
      // console.log("\nThis is output\n");
      // console.log("------------------------\n");
      // console.log(output);
      //
      var output = {}
      _.forEach(orders, function (order) {
        if(typeof output[order.article] === 'undefined'){
          output[order.article] = 0;
        };
        output[order.article] += parseInt(order.quantity);
      });
      output = _.map(output, function(value, key) {
        return {"article": parseInt(key),
                "total_orders": parseInt(value)
              }
      }).reverse();
      console.log(output);
      return output
    };

    module.exports = worker;
