//console.log("hello express package");

const express = require("express");

const app = express();

// req = request, res = response
app.get("/todos", (req, res) => {
    // console.log(res);
    // res.send("Hello world, Kev's here now");

    const user = {
        name: "John",
        age: 30
    };
    res.send(user);
});

app.listen(3000);  //to listen from port


//console.log(app);