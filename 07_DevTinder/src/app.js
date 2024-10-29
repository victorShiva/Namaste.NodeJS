const express = require('express');

const app = express();

//app.get("/user", (req, res) => {
//    res.send({ firstName: "Raghava", age: 23 });
//})
//app.post("/user", (req, res) => {
//    res.send("Create User Successfully!");
//})
//app.patch("/user", (req, res) => {
//    res.send("Update User successfully!");
//})
//app.delete("/user", (req, res) => {
//    res.send("Delete User successfully!");
//})


//app.get("/ab?c", (req, res) => {                    // b is optional
//    res.send("Something is Find for you!");
//})

//app.get("/ab+c", (req, res) => {                    // multiple b is insert routes  +(one or more )
//    res.send("Something is Find for you!");
//})

//app.get("/ab*c", (req, res) => {                    // after b multiple charater write inside routes is optional
//    res.send("Something is Find for you! multiple char");
//})

//app.get("/a(bc)?d", (req, res) => {                 //group bc is optional
//    res.send("Some data find using group optional")
//})


//app.get('/user/:id', (req, res) => {
//    res.send(`This is user id is ${req.params.id}`);
//})

//app.get('/post/:id?', (req, res) => {                           // using optional parameter ?(Zero or One) 
//    res.send(`here post id is ${req.params.id || '000'}`);
//})

//app.get('/post/:id+', (req, res) => {                           // using  Operator +(One or More) 
//    console.log(req.params);
//    res.send(`here post id is ${req.params.id || '000'}`);
//})

//app.get('/post/*', (req, res) => {                           // using cathAll(wildCard) operator *(Zero or More) 
//    res.send(`here post is every path starting with /post `);
//})


//app.get("/post/:month*?", (req, res) => {
//    console.log(req.params);
//    res.send(`This Post is Public in ${req.params.month ?? 'januay'} `)
//})

//app.get(/a/, (req, res) => {                                    // when a is anywhere inside routes then executed
//    res.send({ firstName: "Shivba", lastName: "Gupta" });
//})


//app.get(/.*fly$/, (req, res) => {                               // in last fly then res.send is executed
//    res.send({ firstName: "Shivba", lastName: "Gupta" });         // /draganfly , /butterfly , /fly
//})

//app.get('/user', (req, res) => {                            // /user?firstName=Shivba&password=1234456
//    console.log(req.query);
//    res.send(`Hello Mr / Miss ${req.query.firstName}`);
//})

app.get('/user/:id', (req, res) => {                            // /user/775
    console.log(req.params);
    res.send(`This Post id is no : ${req.params.id}`);
})
app.get('/user/:userName/:userId/:UserPass', (req, res) => {                            // /user/775
    console.log(req.params);
    res.send(`This Post id is no : ${req.params.userId}\n User Name is : ${req.params.userName} \n User's Password is : ${req.params.UserPass}`);
})

app.get(/^\/(about|contact)$/, (req, res) => {                  // /about or /contact     -> strict mode 
    res.send({ username: "Raghava", password: "12345" });
})

//app.get(/^\/home$/, (req, res) => {                               // only for /home 
//    res.send({ username: "Manish", password: "modan123" });
//})

app.get(/^\/home$/i, (req, res) => {                               // only for /home  , /Home , /hoME
    res.send({ username: "Manish", password: "modan123" });
})



app.listen(4000, () => {
    console.log("server is successfully listening on port 4000......");
});