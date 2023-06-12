const newman = require('newman');
 
newman.run({
    //collection: require("./collection/Dmoney.json"),
    collection:"https://api.postman.com/collections/24973005-5b24bc18-493d-489c-8d05-f6c69e880cf3?access_key=PMAT-01H2QYERP90QD35J372F48WXBX",
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});