var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var fs = require("fs");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
  ssl: {
    key: fs.readFileSync('key.key', 'utf8'),
    cert: fs.readFileSync('crt.crt', 'utf8')
  },
  changeOrigin: false
});

app.use('/api', function (req, res, next) {
  var ip = (req.headers['x-forwarded-for'] || '').split(',')[0]
    || req.connection.remoteAddress;
  req.headers['x-forwarded-for-client-ip'] = ip;
  req.headers['host'] = "<mask>";
  proxy.web(req, res, {
    target: {
      protocol: 'https:',
      host: "<mask>",
      path: '/api',
      port: 443,
      key: fs.readFileSync('key.key', 'utf8'),
      cert: fs.readFileSync('crt.crt', 'utf8')
    },
    ssl: {
      key: fs.readFileSync('key.key', 'utf8'),
      cert: fs.readFileSync('crt.crt', 'utf8')
    },
    changeOrigin: false,
    secure: false
  });
  proxy.on('error', function (err) {
    console.log(err);
    next(err);
  });
});




app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
