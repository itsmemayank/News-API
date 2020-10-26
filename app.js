const express = require('express');
const bodyParser = require('body-parser');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8bcc8d4f28ce4029ba3c2346c057de94');
const ejs = require('ejs');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));



app.get('/', (req, res) => {
  newsapi.v2.topHeadlines({
    sources: 'google-news-in',
    language: 'en'
  }).then(response => {
      const list = response.articles;
      res.render('home', {list: list});
      console.log(response);
  });
});


app.listen(3000, () => console.log("Server started on port 3000..."));