"use strict";
/***
 * 786*/
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    //  res.send("respond with a resource");
    res.render('users', { username: 'farhan' });
    //   res.render('index', { title: 'Express' });
});
exports.default = router;
//# sourceMappingURL=user.js.map