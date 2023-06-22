const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.n6wfj5p.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
  //  client.connect();

    const allToysCollection = client.db("toys-marketplace").collection("all-toys");


    // creating index for search
    const indexKey = {name: 1}
    const indexOption = {name: "name"}

  const result = await allToysCollection.createIndex(indexKey, indexOption);

  // search by name
  app.get('/searchtoys/:text', async(req, res) => {
    const searchedText = req.params.text;
    const result = await allToysCollection.find({
      $or: [
        {name: {$regex: searchedText, $options: "i"}}
      ]
    }).toArray()
    res.send(result)
  })

    

//inser data to database
    app.post('/addtoys', async (req, res) => {
      const data = req.body;
      const result = await allToysCollection.insertOne(data);
      console.log(data);
      res.send(result)
    })  


// get all data
    app.get("/alltoys/:text", async(req, res) => {
      const category = req.params.text;
      if(category === 'Regular' || category === "Truck" || category === "Sports"){
        const result = await allToysCollection.find({subCategory: category}).toArray();
        return res.send(result)
      } 
        const result = await allToysCollection.find().limit(20).toArray()
        res.send(result)
    })



    //get user data by email 
    app.get('/mytoys', async(req, res) => {
      const email = req.query.email;
      const query = {email: email};
      const sort = {price: req.query.sort}
      const result = await allToysCollection.find(query).sort(sort).toArray();
      res.send(result)
    })

// get single data
    app.get('/toydetails/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await allToysCollection.findOne(filter);
      res.send(result)
    })


// delete data
    app.delete('/mytoys/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await allToysCollection.deleteOne(filter)
      res.send(result)
    })


// update data
    app.patch('/updatetoy/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const body = req.body;
      const updateToy = {
        $set: {
          price: body.price,
          availableQuantity: body.availableQuantity,
          detailDescription: body.detailDescription
        }
      }
      const result = await allToysCollection.updateOne(filter, updateToy);
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}


app.get('/', (req, res) => {
  res.send("Server Started")
});

app.listen(port, () => {
  console.log("server Started");
})

// export express api
module.exports = app
run().catch(console.dir);
