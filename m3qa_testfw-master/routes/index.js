"use strict";
/***
 * 786*/
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
var time;
//var msg:any;
//var payload:object;  
time = new Date();
router.get('/', (req, res) => {
    //msg.payload = res;
    console.log(`${res}`);
    var msgList = [];
    var letterList = res;
    for (var i = 0; i < 10; i++) {
        msgList.push({ _res: letterList[i],
            get res() {
                return this._res;
            },
            set res(value) {
                this._payload = value;
            },
        });
        console.info(msgList);
    }
    //        return [msgList];
    res.render('index', { username: 'm3-Quality Digital Service Portfolio' + `${msgList}`,
        //time: new Date(),
        context: 'We are trying to logged-you into the main console - local system time is ->' + `${time}`
        // response: `${res}`
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map