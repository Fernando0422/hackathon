const express = require('express');
const fetch = require("node-fetch");
const { response } = require('express');
const app = express();
const port = 8000;
app.set('json spaces', 2);

// to query, call: http://localhost:8000/gettoken

app.get('/gettoken', async function (req, res) {

    console.log(req);
    //res.send("res")

    //Set up URL to query
    let appId = "2qea8q65if";
    let hashToken = "MnFlYThxNjVpZnx3RWNHSmtYMmJVN0VJTERhalJMME8xWVRpaml4SmlrNWFhNE5RNmN4";
    let url = `https://api.iq.inrix.com/auth/v1/appToken?appId=${appId}&hashToken=${hashToken}`;

    //Set up query method
    var requestOptions = {
        method: 'GET' ,
        headers: {Authorization: 'Bearer' + hashToken},
        redirect: 'follow'
    };

    //Query INRIX for token
    let response = await fetch(url, requestOptions);
    let json = await response.json();
    let output = json.result.token;

    //Return token
    res.json({
        token: output,
    });
})

//app.listen(8000, ()=>console.log("proxy has beem started at port 8000"));
//Starting server using listen function
app.listen(port, function () {
    console.log("Server has been started at " + port);
})