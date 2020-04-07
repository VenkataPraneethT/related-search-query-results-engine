const express = require('express');
const bodyParser = require('body-parser');
const getBookSummaries = require('./getSearchQueryResults');
const getBookAuthors = require('./getBookAuthors');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/query/results', (req, res) => {
    const queries = req.body.queries;
    const resultCount = req.body.count ? Number(req.body.count) : 0;
    const results =  getBookSummaries.getRelevantSearchResults(queries, resultCount);
    if(results && results.length > 0) {
      getBookAuthors.getBookAuthorsDetails(results)
        .then((data) => {
            res.send(data);
        })
    } else {
      res.send(results);
    }
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

app.listen(port, () => console.log(`Listening on port ${port}`))