const processResults = require('./searchQueryResults');
const hashTablesWithWordsCount = require('./hashTableWithWordsAndCount');
const summariesDataSet = require('./data.json');
const getRelevantSearchResults = (queries, numberOfResults) => {
    const hashMapResults = hashTablesWithWordsCount.formHashTableWithWordsCount(summariesDataSet);
    const result =  processResults.getNoOfWordsMatch(hashMapResults, queries, numberOfResults);
    return result;
}
module.exports = {
    getRelevantSearchResults
}

