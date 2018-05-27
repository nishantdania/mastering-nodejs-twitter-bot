require('dotenv').config();
var fs = require('fs');
var Twit = require('twit');

var twit = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

var tweetFile = 'tweets.txt';
var writeStream = fs.createWriteStream(tweetFile, {
  flags: 'a',
});

var cleanBuffer = function(len) {
  var buf = new Buffer(len);
  buf.fill('\0');
  return buf;
}

var check = function() {
  console.log('Fetching tweets...');
  twit.get('search/tweets', {
    q: '#nodejs since:2018-01-01'
  }, function(err, reply) {
    if (err || !reply.statuses) {
      setTimeout(check, 10000);
    }
    var buffer = cleanBuffer(reply.statuses.length * 140);
    reply.statuses.forEach(function (obj, idx) {
      buffer.write(obj.text, idx*140, 140);
    });
    writeStream.write(buffer);
  })
  setTimeout(check, 10000);
};

check();
