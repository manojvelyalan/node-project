const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});

hbs.registerHelper('makeUpperCase',(text)=>{
  return text.toUpperCase()
});
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{
var now = new Date().toString();
var log = `${now}:${req.method} ${req.url}`;
console.log(log);
next();
});
/*app.use((req, res, next)=>{
  res.render('maintance.hbs');
})*/
app.get('/',(req, res)=>{
  res.render('home.hbs',{
    titlePage:'Home Page',
    welcomeMessage:' Welcome to home page'
  });
});


app.get('/bad',(req, res)=>{
  res.send({
    errorMessage:'404 page not found',
  })
});


app.get('/about',(req, res)=>{
     res.render('about.hbs',{
       titlePage:'About Us Page',

     });
});
app.listen(port,()=>{
  console.log(`Listening the port ${port}`);
});
