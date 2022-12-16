const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// Get
router.get('/', async (req, res) => {
  // res.send('hello');
  const user = await loadUser();
  res.send(await user.find({}).toArray());
  user.close();
})

// Post
router.post('/', async (req, res) => {
  const user = await loadUser();
  await user.insertOne({
    name: req.body.name,
    number: req.body.num
  });
  res.status(201).send();
  user.close();
})
// Add

// Delete

async function loadUser() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://Snowice:pGxtZY6flusgYmRz@cluster0.kszga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})

  return client.db('snow').collection('user');
}

module.exports = router;
