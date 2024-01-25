const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database("./backend/Products.db");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/homepage/dist")))
app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/homepage/dist/'));
});

app.get('/search', (req, res) => {

  const searchQ = req.query.q;
  console.log(searchQ)
  if(searchQ){
    res.send('This is the products page.');
  }
  else{
    res.redirect("/")
  }

});

app.get("/products", (req, res) => {
  const table = req.query.cat;
  if(!table){
    res.redirect("/")
  } else{
    db.all(`SELECT * FROM ${table}`, (err,rows) => {
      if(err){
        console.error(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(rows);
      }
    })
  }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
