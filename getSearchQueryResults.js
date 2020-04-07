const processResults = require('./searchQueryResults');
const hashTablesWithWordsCount = require('./hashTableWithWordsAndCount');
const summariesDataSet = require('./data.json');
const queries = ["is your problems" ,"achieve take book"];
const numberOfResults = 3;

const getRelevantSearchResults = (queries, numberOfResults) => {
    const hashMapResults = hashTablesWithWordsCount.formHashTableWithWordsCount(summariesDataSet);
    const result =  processResults.getNoOfWordsMatch(hashMapResults, queries, numberOfResults);
    return result;
}

console.log(getRelevantSearchResults(queries, numberOfResults));


module.exports = {
    getRelevantSearchResults
}