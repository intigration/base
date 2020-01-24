"use strict";
/***
 * 786*/
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
var time;
time = new Date();
router.get('/', (req, res) => {
    res.render('index', {
        username: 'm3-Quality Digital Service Portfolio',
        //time: new Date(),
        context: 'We are trying to logged-you into the main console - local system time is ->' + `${time}`,
        response: JSON.stringify(res)
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map