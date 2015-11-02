var restify = require('restify'),
    mongoose = require('mongoose'),
    Experience = mongoose.model('Experience'),
    ObjectId = mongoose.Types.ObjectId;

var ExperienceController = function MeController(server) {
    return {
      initRoutes: function() {
        server.get('/experience', function(req, res, next) {
          Experience.find({}, function(err, experience) {
            if (err) {
              res.status(500);
              res.json({
                status: 500,
                message: "Error occured: " + err
              });
            } else {
              res.status(200);
              res.json(experience);
            }
          });

          return next();
        });
      }
    }
}

module.exports = ExperienceController;
