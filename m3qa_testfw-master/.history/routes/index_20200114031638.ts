/***
 * 786*/




import express = require('express');
const router = express.Router();

var time:any;
var msg:object{

    payload


};  
time = new Date();

router.get('/', (req: express.Request, res: express.Response) => {

msg.payload = res;
    console.log (`${msg.payload}`)     
        var msgList = [];
        var letterList = msg.payload;
        for (var i =0 ; i < 10; i++){
            msgList.push({payload:letterList[i]});
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