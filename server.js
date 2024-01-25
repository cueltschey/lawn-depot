const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/homepage/dist")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/homepage/dist/'));
});

app.get('/products', (req, res) => {

  const searchQ = req.query.search;
  console.log(searchQ)
  if(searchQ){
    res.send('This is the products page.');
  }
  else{
    res.redirect("/")
  }

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
