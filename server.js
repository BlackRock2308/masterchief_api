const express = require("express")
const mongo = require("mongodb").MongoClient
const cors = require('cors')
const app = express()



app.use(cors)
app.use(express.json())

const uri = "mongodb+srv://Groot:Masterchieft1234@masterchefcluster.yb0sbgj.mongodb.net/?retryWrites=true&w=majority";

//DB config
const mongo_uri = require('./config/keys').MongoURI;

let db, masterchief

mongo.connect(
    uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    console.log("MongoDB connected ...")
    db = client.db("MC_DB")
    masterchief = db.collection("MC_Collection")

  }
)

app.get("/recipes", (req, res) => {
    masterchief.find().toArray((err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ meals: items })
    })
  })

  


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));