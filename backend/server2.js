const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/api');
require('dotenv').config();
const port = process.env.PORT;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://paaai:5iPc5VNPGfXxwxF6@cluster0.xfch9m1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('success')
  client.close();
});
