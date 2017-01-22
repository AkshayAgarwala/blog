var express = require('express');
var app = express();

var pg = require('pg');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost:5432/blog';

app.get('/blog', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    client.query(`select * from posts`, function(err, result){
      res.render('blog', {posts: result.rows});
      done();
      pg.end();
    })
  })
})

app.post('/blog', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    client.query(`insert into posts (title, body) values ('${req.body.title}', '${req.body.body}')`, function(err, result){
      res.redirect('/blog');
      done();
      pg.end();
    })
  })
})

app.get('/blog/:post_id', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    client.query(`select * from posts where id = '${req.params.post_id}'`, function(err, result){
      res.render('post', {post: result.rows[0]});
      done();
      pg.end();
    })
  })
})

app.get('/portfolio', function(req, res){
  res.render('portfolio');
})










app.listen(3000, function(){
  console.log('Listening on port 3000....');
})
