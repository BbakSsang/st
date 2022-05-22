var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mariadb = require('mysql');//mysql 접속 세팅
//////////라우터 //////////////

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter =require('./routes/hello');



//////////라우터 //////////////
var app = express();

// const mysql = require('mysql');  // mysql 모듈 로드
// const conn = {  // mysql 접속 설정
//   host: 'localhost',
//   port: '3306',
//   user: '2022ipp',
//   password: 'gachon654321',
//   database: '3_IPP'
// };

// var connection = mysql.createConnection(conn); // DB 커넥션 생성
// connection.connect();   // DB 접속
 
// var testQuery = "SELECT * FROM  ST_UserTable";
// connection.query(testQuery, function (err, results, fields) { // testQuery 실행
//     if (err) {
//         console.log(err);
//     }
//     console.log(results);
// });
 
 
// connection.end(); // DB 접속 종료



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello',helloRouter);



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
