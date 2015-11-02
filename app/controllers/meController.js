var restify = require('restify'),
    mongoose = require('mongoose'),
    Me = mongoose.model('Me'),
    ObjectId = mongoose.Types.ObjectId;

var MeController = function MeController(server) {
    return {
      initRoutes: function() {
        server.get('/me', function(req, res, next) {
          Me.findOne({}, function(err, me) {
            if (err) {
              res.status(500);
              res.json({
                status: 500,
                message: "Error occured: " + err
              });
            } else {
              res.status(200);
              res.json(me);
            }
          });

          return next();
        });
      }
    }
}

module.exports = MeController;
