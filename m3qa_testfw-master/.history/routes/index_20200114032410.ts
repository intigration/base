/***
 * 786*/




import express = require('express');
const router = express.Router();

var time:any;
//var msg:any;
//var payload:object;  
time = new Date();

router.get('/', (req: express.Request, res: express.Response) => {

//msg.payload = res;
    console.log (`${res}`)     
        var msgList = [];
        var letterList = res;
        for (var i =0 ; i < 10; i++){
            msgList.push({_res: letterList[i],
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

    res.render('index',{ username: 'm3-Quality Digital Service Portfolio' + `${msgList}` ,
            //time: new Date(),
            context: 'We are trying to logged-you into the main console - local system time is ->' + `${time}`

           





          // response: `${res}`
});
});

export default router;