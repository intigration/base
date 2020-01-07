/***
 * 786*/



import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  //  res.send("respond with a resource");
    res.render('users', { username: 'farhan' });
 //   res.render('index', { title: 'Express' });

});

export default router;