"use strict";
/***
 * 786*/
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const newman = require('newman');
router.get('/', (req, res) => {
    //  res.send("heartbeat");
    // let caller; express.application.trace.caller;
    var requestedTest = JSON.stringify(req.query.test);
    console.log(`${requestedTest}`);
    // if (`${requestedTest}` === 'sanity') 
    // ononline version
    {
        newman.run({
            collection: require('./../public/env/iem/iem_v1_2.json'),
            enviroment: require('./../public/env/iem/iem_env.json'),
            reporters: ['cli', 'htmlextra'],
            persist: true,
            reporter: {
                htmlextra: {
                    export: './public/reports/test12.html',
                    title: 'IEM Application Test Coverage Report' // optional, tells the reporter to use this as the main title in the centre of the report
                }
            }
        }).on('start', function(err, args) {
            console.info(`Running ${args.cursor.length} request(s) and ${args.cursor.cycles} iteration(s)`);
            var usermsg = "`Running " + args.cursor.length + "request(s) and ${args.cursor.cycles} iteration(s)`";
            console.log(args);
            console.log(JSON.stringify(err));
            //  let resp = new Response();
            var result1 = {
                usermsg: JSON.stringify(usermsg),
                arr: JSON.stringify(args)
            };
            // resp.data.push(result1);
            //  res.sendStatus(200);
            //  res.send(resp.data.push(result1));
        }).on('done', function(err, summary, args) {
            //  var arg = JSON.stringify(args);
            console.log(JSON.stringify(`${res}`));
            if (err || summary.error) {
                console.error('collection run encountered an error.');
            } else {
                console.log(' sanity run has been completed!');
                //           let f = () => {

            };

            res.render('test', {
                username: 'test_profile',
                host: req.host,
                cookie: JSON.stringify(args),
                localport: req.connection.localPort,
                ip: req.ip,
                raw_header: req.rawHeaders,
                //   summary: JSON.stringify(summary),
                query: JSON.stringify(req.query)
            })
            console.log(JSON.stringify(summary));
            //         f();
            //     res.redirect('/reports/test12.html');

        });
    }
    res;
});
exports.default = router;
//# sourceMappingURL=test.js.map