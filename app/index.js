require('./mongoose.js');

var config = require('./config.js'),
    restify = require('restify');

var server = restify.createServer();

var MeController = require('./controllers/meController.js');
var ExperienceController = require('./controllers/experienceController.js');

var meController = new MeController(server);
meController.initRoutes();

var experienceController = new ExperienceController(server);
experienceController.initRoutes();

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
