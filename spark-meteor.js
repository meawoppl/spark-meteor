if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to ddphacking.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
      console.log(DDP);
      console.log(Package.webapp.WebApp);
      console.log("*******");
      console.log(Package.webapp.WebApp.httpServer);
      console.log("*******");

      console.log(Meteor.default_server)
  });
}


var printAllServerSessions = function() {
    console.log(Meteor.default_server)
    _.each(Meteor.default_server.sessions, function(s) {
	console.log(s);
    });
}

Meteor.onConnection(function (c) {
    console.log("New Connection!");
    console.log(c);
    console.log("******");
    _.each(Meteor.default_server.sessions, function(s) {
	console.log(s);
    });

})