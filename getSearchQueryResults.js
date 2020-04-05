const processResults = require('./searchQueryResults');
const hashTablesWithWordsCount = require('./hashTableWithWordsAndCount');
const summariesDataSet = require('./data.json');
const queries = ["is your problems" ,"achieve take book"];
const numberOfResults = 3;
const hashMapResults = hashTablesWithWordsCount.formHashTableWithWordsCount(summariesDataSet);
const result = processResults.getNoOfWordsMatch(hashMapResults, queries, numberOfResults);
console.log(result);

