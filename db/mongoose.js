var mongoose = require('mongoose');
var connect="mongodb://heroku_d1zpjzcs:j04sgucp1veufaqo103f6a9rtp@ds125068.mlab.com:25068/heroku_d1zpjzcs"
var options = {
  replset: {
    socketOptions: {
      keepAlive: 120
    }
  },
  server: {
    poolSize: 5,
    reconnectTries: 10,
    socketOptions: {
      keepAlive: 120
    }
  }
};
mongoose.connect(connect, {
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30});
var db = mongoose.connection;
db.on('error', function(err) {});
db.once('open', function callback() {});

module.exports = mongoose;
