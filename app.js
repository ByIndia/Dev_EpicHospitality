var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sendgrid = require('sendgrid');
var app = express();

//var emailUsername = process.env.SENDGRID_USERNAME || 'app49147512@heroku.com';
//var emailPassword = process.env.SENDGRID_PASSWORD || 'zcoivf406887';

var emailUsername = 'app49147512@heroku.com';
var emailPassword = 'zcoivf406887';
var Email = require('./models/Email')(sendgrid(emailUsername, emailPassword)); //emailUsername, emailPassword);

// Get Leads



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.post('/Thanks', function (req, res) {
    console.log('From Submited');
    var emailid = req.param('email', null);

    var resultenLeads = Email.SendEmail(res, emailid);

});
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message
            , error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message
        , error: {}
    });
});


module.exports = app;