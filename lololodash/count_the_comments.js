var _ = require("lodash");

var worker = function(comments) {
  return _.chain(comments)
    .groupBy( function (comment) {return comment.username})
    .map(function (user, user_name) {
      return {'username': user_name, 'comment_count':  _.size(user)}
    })
    .sortBy( function (user) {
      return -user.comment_count;
    });
};

module.exports = worker;
