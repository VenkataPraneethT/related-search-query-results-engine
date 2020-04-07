const http = require('https');
const getBookAuthorsDetails =  (bookIds) => {
    return new Promise(async (resolve, reject) =>  {
        const booksObj = bookIds;
        for(let i=0; i< bookIds.length; i++) {
            for(let j=0; j< bookIds[i].length ; j++) {
                const result = await getAuthors(bookIds[i][j]);
                booksObj[i][j].author = result.author;
                if( (j === (bookIds[i].length - 1)) && (i === (bookIds.length -1) ) ) {
                    resolve(booksObj);
                }
            }
        }
    } )
    
}

const getAuthors = (reqObj) => {
    return new Promise(function(resolve, reject) {
        const options = {
            "method": "POST",
            "hostname": "ie4djxzt8j.execute-api.eu-west-1.amazonaws.com",
            "port": null,
            "path": "/coding",
            "headers": {
              "content-type": "application/json",
            }
          };
        const authorApiCall = http.request(options, (res) => {
            let resData = '';
            res.setEncoding('utf8');
            res.on('data', (d) => {
                resData += d;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(resData);
                    // console.log(reqObj)
                    reqObj.author = parsedData.author; 
                    resolve(parsedData);
                  } catch (e) {
                    console.error(e.message, "test");
                    reject(err);
                }
            })
        });
        authorApiCall.write(JSON.stringify({book_id : reqObj.id}));
        authorApiCall.end();
    });
}


module.exports = {
    getBookAuthorsDetails,
    getAuthors
}