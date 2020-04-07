const getNoOfWordsMatch = (hashMapResults, queries, numberOfResults) => {
  const finalResults = {};
  for(let j=0; j<hashMapResults.length ; j++ ) {
    for(let k=0; k< queries.length; k++) {
        const words = queries[k].split(" ");
        let count = 0;
        let numberOfInstances = 0;
        let lengthOfWordMatched = 0;
        for(let m=0; m< words.length; m++) {
            const wordLowerCase = words[m].trim().toLowerCase();
            if(hashMapResults[j].wordsCount && hashMapResults[j].wordsCount[wordLowerCase]) {
                count = count + 1;
                numberOfInstances = numberOfInstances+ (hashMapResults[j].wordsCount[wordLowerCase]);
                lengthOfWordMatched = lengthOfWordMatched + wordLowerCase.length;
            }
        }
        if(!finalResults[queries[k]]) {
            finalResults[queries[k]] = [];
        }
        if(count > 0) {
          finalResults[queries[k]].push([
            {
              summary: hashMapResults[j].key,
              id:hashMapResults[j].id,
              title: hashMapResults[j].title,
              query: queries[k]
            }
            ,((count/words.length) *100), lengthOfWordMatched*numberOfInstances, count]);
        }
        
    }
  }
  return sortedResults(finalResults, queries, numberOfResults);
};


const sortedResults = (finalResults, queries, numberOfResults) => {
  const finalResultList = [];
  for(let k=0; k< queries.length; k++) {
    if(finalResults[queries[k]] && finalResults[queries[k]].length > 0) {
      finalResults[queries[k]].sort((a,b) => b[2] - a[2]);
      const resultSet = [];
      for(let n=0; n<numberOfResults; n++) {
          resultSet.push(finalResults[queries[k]][n][0]);
      }
      finalResultList.push(resultSet);
    }
  }
  return finalResultList;
};


module.exports = {
  getNoOfWordsMatch,
  sortedResults
};