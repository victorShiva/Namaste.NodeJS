const express = require('express');

const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName: "Raghava", age: 23 });
})
app.post("/user", (req, res) => {
    res.send("Create User Successfully!");
})
app.patch("/user", (req, res) => {
    res.send("Update User successfully!");
})
app.delete("/user", (req, res) => {
    res.send("Delete User successfully!");
})


app.listen(4000, () => {
    console.log("server is successfully listening on port 4000......");
});