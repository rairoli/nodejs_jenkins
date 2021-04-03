const express = require('express');
const app = express();

// Constants
const PORT = 8080;

// App
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, ()=>{
  console.log(`Running on ${PORT}`);
});