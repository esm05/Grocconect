var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_server/routes/index');
//var usersRouter = require('./routes/users');
var homeRouter = require('./app_server/routes/home');
var produceRouter = require('./app_server/routes/produce');
var bakeryRouter = require('./app_server/routes/bakery')
var dairyRouter = require('./app_server/routes/dairy')
var groceryRouter = require('./app_server/routes/grocery')
var meatRouter = require('./app_server/routes/meat')
var seafoodRouter = require('./app_server/routes/seafood')


var apiProduceRouter = require('./app_api/routes/index')
var handlebars = require('hbs');

// Bring in db
require('./app_api/models/db')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));

// register handlebars partials (https://www.npmjs.com/package/hbs)
handlebars.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setting up routes for the different pages 
app.use('/', indexRouter);
app.use('/home', homeRouter);
//app.use('/users', usersRouter);
app.use('/produce', produceRouter);
app.use('/bakery', bakeryRouter);
app.use('/dairy', dairyRouter);
app.use('/grocery', groceryRouter);
app.use('/meat', meatRouter);
app.use('/seafood', seafoodRouter);

// Add this before your route definitions
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});
app.use('/api', apiProduceRouter);

// Then add this right before your 404 handler
app.use((req, res, next) => {
  console.log(`No route matched for: ${req.url}`);
  next();
});

app.get('/api-test', (req, res) => {
  res.status(200).json({message: 'API is working'});
});
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