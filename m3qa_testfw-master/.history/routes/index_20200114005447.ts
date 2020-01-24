/***
 * 786*/




import express = require('express');
const router = express.Router();

var time:any;

time = new Date();

router.get('/', (req: express.Request, res: express.Response) => {

    console.log (`${res}`)     


    res.render('index',{ username: 'm3-Quality Digital Service Portfolio' ,
            //time: new Date(),
            context: 'We are trying to logged-you into the main console - local system time is ->' + `${time}`

           
          // response: `${res}`
});
});

export default router;