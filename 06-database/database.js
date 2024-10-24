const { MongoClient } = require('mongodb');

const url =
    'mongodb+srv://joker5775:XV8ahEQSHCisVyeA@namastenode.igtp8.mongodb.net/';

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data1 = {
        firstName: "Prapti",
        lastName: "shah",
        city: "mumbai",
        phone: "65940954"
    }
    const data2 = {
        firstName: "Princi",
        lastName: "jak",
        city: "jaunpur",
        phone: "4565498449"
    }

    ////write
    //const insertData = await collection.insertMany([data1, data2]);
    //console.log("inserted Document => ", insertData);

    ////write one
    //const insertData = await collection.insertOne(data2);
    //console.log(insertData);


    //// Read
    const findResult = await collection.find({}).toArray();
    console.log("found document", findResult);

    //// read 
    //const findResult = await collection.findOne({ city: "chennai" });
    //console.log(findResult);

    //// count 
    //const countResult = await collection.countDocuments({ lastName: "Gupta" });
    //console.log(countResult);

    //// update 
    //const updateResult = await collection.findOneAndUpdate({ city: "chennai", lastName: "Gupta" }, { $set: { lastName: "Bharat" } });
    //console.log(updateResult);

    //Delete
    //const deleteResult = await collection.findOneAndDelete({ lastName: "jak" })


    return "done";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());















//NOTE

// Go to mongodb website
// Create a free M0 Cluster
// Create a User
// Get the connection string
// install MongoDb compass
