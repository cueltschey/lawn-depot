const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const cookieParser = require("cookie-parser")

const db = new sqlite3.Database("./backend/Products.db");
const auth_db = new sqlite3.Database("./backend/Auth.db")
const app = express();
const port = 3000;



app.use(express.static(path.join(__dirname, "dist")))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


const authenticate = (req, res, next) => {
  const isAuthenticated = req.cookies.user === 'authenticated';

  if (isAuthenticated) {
    next();
  } else {
    res.redirect('/auth')
  }
};

app.get('/',authenticate, (req,res) => {
    res.sendFile(path.join(__dirname,"dist/homepage/index.html"))
});


app.get('/auth', (req,res) => {
    res.sendFile(path.join(__dirname, "dist/login/index.html"))
})

app.get('/search', (req, res) => {

  const searchQ = req.query.q;
  if(searchQ){
    db.all(`SELECT * FROM Products WHERE name LIKE '%${searchQ}%'`, (err, rows) => {
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
  const category = req.query.cat;
  const product_id = req.query.product_id;
  console.log(category)
  if(category == "none"){
    db.all(`SELECT * FROM Products WHERE id='${product_id}'`, (err, rows) => {
      if(err){
        console.log(err)
        res.status(500).json({error:'Internal Server Error'})
      } else{
        res.json(rows)
      }
    })
  } else{
    db.all(`SELECT * FROM Products WHERE category='${category}'`, (err,rows) => {
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
  auth_db.all(`SELECT password FROM Users WHERE username='${username}'`, (err,rows) => {
    if(err || rows.length <= 0){
      console.log(err);
      res.json({"valid":false})
    } else{
      if(rows[0]["password"] == password){
        res.cookie('user', 'authenticated', { maxAge: 3600000, httpOnly: true });
        res.json({"valid":true});
      } else{
        console.log(rows[0]["password"])
        console.log("incorrect password");
        res.status(403).json({"valid":false})
      }
    }
  })
  });

app.post('/register', (req, res) => {
  const {username, password, name, creditCardNumber, dob} = req.body;
  try {
    const result = auth_db.run(
      'INSERT INTO Users (username, password, name, creditCardNumber, dob) VALUES (?, ?, ?, ?, ?)',
      [username, password, name, creditCardNumber, dob]
    )
    console.log(result)
    res.status(201).json({"valid": true})
  } catch(err){
    console.log(err)
    res.status(500).json({error:"Internal Server Error"})
  }
})

app.route('/cart')
  .post((req, res) => {
  const {product_id, user_id, quantity, category} = req.body;
  try{
    db.run(
      'INSERT INTO Cart (product_id, user_id, quantity, category) VALUES (?,?,?,?)',
      [product_id, user_id, quantity, category]
    )
    res.status(200).json({valid: true})
  } catch(err){
    res.status(500).json({error: "Internal Server Error"})
  }
})
  .get((req, res) => {
    const user_id = req.query.user_id;
    db.all(`SELECT * FROM Cart WHERE user_id='${user_id}'`, (err, rows)=>{
      if(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
      } else{
        res.json(rows)
      }
    })
  })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
