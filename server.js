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
    getBookAuthors.getBookAuthorsDetails(results)
        .then((data) => {
            // console.log(data)
           // console.log(data, "test")
            res.send(data);
        })
    
});

app.listen(port, () => console.log(`Listening on port ${port}`))