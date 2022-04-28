const { Console } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const app2 = express();
const fs = require("fs");
app.use(express.json({limit: '200mb'}));

  app.get('/', function(req, res) {
    res.json("ola mundo");
  });


app.listen(3000)

console.log("servidor aberto na porta:"+3000)