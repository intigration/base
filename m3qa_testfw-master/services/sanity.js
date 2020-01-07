/***
 * 786*/
const newman = require('newman');
newman.run({
    collection: require('./../public/env/iem/sanity.json'),
    reporters: ['cli', 'html']
}, function (err) {
    if (err) {
        throw err;
    }
    exports.err = (err) => err;
    console.log(' sanity run has been completed!');
});
//# sourceMappingURL=sanity.js.map