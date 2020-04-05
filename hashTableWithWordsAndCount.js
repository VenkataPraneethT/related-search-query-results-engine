const  formHashTableWithWordsCount = (summariesDataSet) => {
    const hashMapWithWordCounts = [];
    for(let i=0; i < summariesDataSet.summaries.length ; i++) {
        let sentence = summariesDataSet.summaries[i].summary.replace(/[^\x00-\x7F]/g, " ");
        // sentence = sentence.replace(/[^a-zA-Z ]/g, '');
        sentence = sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        const words = sentence.split(" ");
        const wordsAndCount = {};
        for(let j=0; j< words.length ; j++) {
            if(words[j]) {
                const processedWord = words[j].trim().toLowerCase();
                wordsAndCount[processedWord] = wordsAndCount[processedWord] ? wordsAndCount[processedWord] +1 :1;
            } 
        }
        hashMapWithWordCounts.push({
            key: summariesDataSet.summaries[i].summary,
            wordsCount: wordsAndCount,
            id: summariesDataSet.summaries[i].id,
            title: summariesDataSet.titles[i]
        })
    }
    return hashMapWithWordCounts;
  }

  exports.formHashTableWithWordsCount=formHashTableWithWordsCount;