const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const cookieParser = require("cookie-parser")

const db = new sqlite3.Database("./backend/Products.db");
const app = express();
const port = 3000;
// error with statix, ask chatGPT
app.use(express.static(path.join(__dirname, "homepage/dist")))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req,res) => {
    if(req.cookies.user && req.cookies.user == "authenticated"){
      res.send(path.join(__dirname,"hompage/dist"))
    }
    else{
      res.redirect("/#")
    }
});

app.get('/#', (req,res) => {
  res.sendFile(path.join(__dirname, 'login/dist/'))
})

app.get('/search', (req, res) => {

  const searchQ = req.query.q;
  console.log(searchQ)
  if(searchQ){
    db.all(`
        SELECT * FROM moss WHERE name LIKE '%${searchQ}%'
        UNION
        SELECT * FROM birdhouses WHERE name LIKE '%${searchQ}%'
        UNION
        SELECT * FROM spinners WHERE name LIKE '%${searchQ}%'
        UNION
        SELECT * FROM hanging WHERE name LIKE '%${searchQ}%'
        UNION
        SELECT * FROM wall WHERE name LIKE '%${searchQ}%'
      `, (err, rows) => {
      if(err){
        console.error(err)
        res.json([{"name":"Internal Server Error: 500", "image_url":"https://www.marthastewart.com/thmb/jOxXFYCSU3Q7iYkMCrcM6ZSfEmo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dracula-monkey-face-orchid-0718-23c698bf2d7d4cada62ca2b2e7696084-horiz-0623-7213943b22454acca6fd40584c2e718b.jpg","price":""}])
      } else{
        res.json(rows)
      }
    })
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
        console.error(err)
        res.json([{"name":"No Data Found", "image_url":"https://www.marthastewart.com/thmb/jOxXFYCSU3Q7iYkMCrcM6ZSfEmo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dracula-monkey-face-orchid-0718-23c698bf2d7d4cada62ca2b2e7696084-horiz-0623-7213943b22454acca6fd40584c2e718b.jpg","price":""}])

      } else {
        res.json(rows);
      }
    })
  }
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'test' && password === 'test') {
    // Set a temporary cookie with a 1-hour expiration time
    res.cookie('user', 'authenticated', { maxAge: 3600000, httpOnly: true });
    res.json({"valid":true});
  } else {
    res.json({"valid":false});
  }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
