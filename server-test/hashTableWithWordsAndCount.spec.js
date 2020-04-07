const hashTablesWithWordsCount = require('../hashTableWithWordsAndCount');


describe("Testing hah table with words count", () => {
    it('should return ditionary with words and their count', () => {
        const testDataSet = {
            titles: [
                "test data set"
            ],
            summaries:[
                {
                    id:0,
                    summary: "This is not a joke. This can be more serious."
                }
            ] 
        }
        const result = hashTablesWithWordsCount.formHashTableWithWordsCount(testDataSet);
        const expectedResult = [{
            key: "This is not a joke. This can be more serious.",
            wordsCount: {
                this: 2,
                is: 1,
                not: 1,
                a: 1,
                joke: 1,
                can: 1,
                be: 1,
                more:1,
                serious:1
            },
            id:0,
            title: "test data set"
        }];
        expect(result).toEqual(expectedResult);
    })
})
