//libraries
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
 articleOne:{
   title:'Article ONE | Sheena Mattu',
   heading:'Article One',
   date:'Feb 16 ,2018',
   content:`
          <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.</p>
            
            <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.</p>
            
            <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.</p>`
 },
 articleTwo:{
   title:'Article TWO | Sheena Mattu',
   heading:'Article Two',
   date:'Feb 17 ,2018',
   content:`
          <p>This is the content for my first article.This is the content for my second article.</p>`
 },
 articleThree:{
   title:'Article THREE | Sheena Mattu',
   heading:'Article Three',
   date:'Feb 18 ,2018',
   content:`
          <p>This is the content for my third article.</p>`
 }
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate= `
    <html>
        <head>
         <title> ${title} </title>
          <link href="https://fonts.googleapis.com/css?family=Kavivanar" rel="stylesheet">
         <meta charset="utf-8"/>
         <meta name='vieport' content="width=device-width initial-scale=1">
         <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            
            ${heading}
            
            <div>
               ${date}
            </div>
            
             <div>
               ${content}
            </div>
          </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}



//handling specific urls
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    //res.send('Article one requested and will be served here')
   // res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
   res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
   // res.send('Article two requested and will be served here')
   //res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
   res.send(createTemplate(articleTwo));
});

app.get('/article-three',function(req,res){
    //res.send('Article three requested and will be served here')
    //res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    res.send(createTemplate(articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
