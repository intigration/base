/***
 * 786*/




import express = require('express');
const router = express.Router();

var time;



router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index',{ username: 'm3-Quality Digital Service Portfolio' ,
            //time: new Date(),
            context: 'We are trying to logged-you into the main console' + `${time}`

});
});

export default router;