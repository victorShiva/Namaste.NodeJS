const express = require('express');

const app = express();
const { adminAuth, userAuth } = require('./middlewares/auth')
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



// +++++++++++++++++++++++ Dynamic router explore ------------------------------



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

//app.get('/user/:id', (req, res) => {                            // /user/775
//    console.log(req.params);
//    res.send(`This Post id is no : ${req.params.id}`);
//})

//app.get('/user/:userName/:userId/:UserPass', (req, res) => {                            // /user/775
//    console.log(req.params);
//    res.send(`This Post id is no : ${req.params.userId}\n User Name is : ${req.params.userName} \n User's Password is : ${req.params.UserPass}`);
//})

//app.get(/^\/(about|contact)$/, (req, res) => {                  // /about or /contact     -> strict mode 
//    res.send({ username: "Raghava", password: "12345" });
//})

//app.get(/^\/home$/, (req, res) => {                               // only for /home 
//    res.send({ username: "Manish", password: "modan123" });
//})

//app.get(/^\/home$/i, (req, res) => {                               // only for /home  , /Home , /hoME
//    res.send({ username: "Manish", password: "modan123" });
//})


// // ++++++++++++++++++++++++++++++++++ multiple response+++++++++++++++

/*
app.use('/user',
    (req, res, next) => {
        console.log("Handling the routes user!");
        next();
        //res.send("Response !!");
    },
    (req, res, next) => {
        console.log("Handling the routes user2!");
        next()
        res.send("2nd Response!!");
    }, [
    (req, res, next) => {
        console.log("Handling the routes user3!");
        next()
        res.send({ response: "3nd Response!!" })
    },
    (req, res, next) => {
        console.log("Handling the routes user4!");
        //res.send("4nd Response!!");
        next()
    }]
);
*/

/*        ---    Explore router's callback    -----
    app.use('/router',cb1,cb2,cb3,cb4,cb5,cb6);
    app.use('/router',[cb1,cb2,cb3,cb4,cb5,cb6]);
    app.use('/router',cb1,cb2,[cb3,cb4,cb5],cb6);
    app.use('/router',[cb1,cb2,cb3],cb4,cb5,cb6);
*/


// // ++++++++++++++++++++++++ next() other ways ++++++++++++++++++++++++

//app.get('/user', (req, res, next) => {
//    console.log("Handling User1 !");
//    next();
//    res.send("1st Response!! ");
//})

//app.get('/user', (req, res, next) => {
//    console.log("Handling User2 !");
//    //res.send("2st Response!! ");
//    next();
//})


// ++++++++++++++++++++++++ middleware ++++++++++++++++++++++++

// GET /user ==> It checks all the app.xxx("matching route") function
// GET /user ==> middleware check ==> request handler(route handler).  

//app.use('/', (req, res, next) => {
//    console.log("Handling / route");
//    //res.send("Handle all routes starting with / ");
//    next();
//})

//app.get('/user', (req, res, next) => {
//    console.log("1st handling /user");
//    next();
//}, (req, res, next) => {
//    next();
//}, (req, res, next) => {
//    res.send({ firstName: "Raghava", pass: "1234@qwsd" })
//})



// ++++++++++++++++++++++++++ 

//app.get('/admin/getAllData', (req, res) => {
//    //logic of checking if the request is authorized
//    const token = "xyzasd";
//    const isAdminAuthorized = token === "xyz";
//    if (isAdminAuthorized) {
//        res.send("All Data send!!");
//    } else {
//        res.status(401).send("Unauthorized Request!");
//    }
//})

//app.get('/admin/deleteUser', (req, res) => {
//    //logic of checking if the request is authorized
//    const token = "xyz";
//    const isAdminAuthorized = token === "xyz";
//    if (isAdminAuthorized) {
//        res.send("Delete a User!");
//    } else {
//        res.status(401).send("Unauthorized Request!");
//    }

//})


//+++++++++++++++++++++++ app.use() & app.all() +++++++++++++++++

//app.use('/admin', (req, res) => {
//    res.send({ firstName: "Raghava", pass: "1234@qwsd" });
//});

//app.all('/admin', (req, res) => {
//    res.send({ firstName: "Narayana", pass: "nryn@8765" });
//});


// +++++++++++++++++++++ 

///-----------------------------/Handle Autho Middleware for All GET,POSt,PUT,...request.
//app.use('/admin', adminAuth);
////app.use('/user', userAuth);

//app.get('/user', userAuth, (req, res) => {
//    res.send("User Info send!!");
//})

//app.post('/user/login', (req, res) => {
//    res.send("User Logged In Successfully!!!");
//})

//app.get("/user/data", userAuth, (req, res) => {
//    res.send("Getting the user data profile!!");
//})

//app.get("/admin/getAllData", (req, res) => {
//    res.send("All Data Sent1")
//})
//app.get("/admin/deleteUser", (req, res) => {
//    res.send("All Data is celebrate2")
//})


// ++++++++++++++++++++++++  Error Handling ------------------

app.use('/', (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong-1");
    }
    console.log("/ route-1");
});

app.get('/getUserData', (req, res) => {
    //try {
    // Logic of Db to call the user data

    throw new Error("qwerthgfds");
    res.send("User data send!!");
    //} catch (err) {
    //    res.status(500).send("Some Error Please Contact help support team!");
    //}
})

app.use('/', (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong-2");
    }
    console.log("/ route-2");
});

app.listen(4000, () => {
    console.log("server is successfully listening on port 4000......");
});