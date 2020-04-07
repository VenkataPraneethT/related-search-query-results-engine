const searchQUeryResults = require('./searchQueryResults');

describe("Tests the result set with relevant query matches", () => {
    const queries = ["test samples are ready"];
    const numberOfResults = 1;
    const testDataSet = {
        "test samples are ready": [
            [
            {
                id:0,
                query: "test samples are ready",
                summary: "The coronavirus has no vaccine. It's hard to test and get samples from the patients. We are not ready with the vaccine trials. The world is not prepared for this.",
                title: "test data set"
            },
            100,
            19,
            4
            ],
            []
        ],
        "test the paragraph":[]
    };
    const expectedResult = [[
        {
            id:0,
            query: "test samples are ready",
            summary: "The coronavirus has no vaccine. It's hard to test and get samples from the patients. We are not ready with the vaccine trials. The world is not prepared for this.",
            title: "test data set"
        }
    ]];
    const implementation = ((testDataSet, queries,numberOfResults) => expectedResult);
    const mockFn = jest.fn()
    it("should return the relevant results with number of results that are defined", () => {
        
        
        const result = searchQUeryResults.sortedResults(testDataSet,queries,numberOfResults);
        expect(result).toEqual(expectedResult);
    })

    it("test getNoOfWordsMatch() function", () => {
        const hashedWordsCount = [{
            key: "The coronavirus has no vaccine. It's hard to test and get samples from the patients. We are not ready with the vaccine trials. The world is not prepared for this.",
            wordsCount: {
                the: 4,
                coronavirus: 1,
                has: 1,
                no: 1,
                its: 1,
                hard: 1,
                to: 1,
                test:1,
                and:1,
                get:1,
                samples:1,
                from:1,
                patients:1,
                we:1,
                are:1,
                not:2,
                ready:1,
                with:1,
                vaccine:1,
                trials: 1,
                world:1,
                is:1,
                prepared:1,
                for:1,
                this:1
            },
            id:0,
            title: "test data set"
        }];
        const result = searchQUeryResults.getNoOfWordsMatch(hashedWordsCount, queries,numberOfResults);
        expect(result).toEqual(expectedResult);
    })
})