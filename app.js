// import the dependency packages defined in package.json or internal packages
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import router settings, assign the module.exports into variable
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// call express() constructor and assign the instant to app variable
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //define views directory eg. views\index.pug
app.set('view engine', 'pug'); //use pug as views engine to render HTML template

// use which features of the packages
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use the router settings
// if no route match the path, server generates 404 Not Found Error
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
