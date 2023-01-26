const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) throw err;
    const db = client.db("mydb");
    const collection = db.collection("customers");
    collection.insertOne({ name: "John", address: "Highway 37" }, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        client.close();
    });
});