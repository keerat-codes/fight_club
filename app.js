const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8000;

require('dotenv').config();

const PostMalonev4Route = require('./routes/PostMalonev4Router');
const PostMalonev4Route = require('./routes/PostMalonev4Router');
const PostMalonev6Route = require('./routes/PostMalonev6Router');
app.use('posty4', PostMalonev6Route);
app.use('undefined', PostMalonev4Route);
app.use('undefined', PostMalonev4Route);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const conn = require('./middlewares/tidb');
console.log("Trying to establish a connection to TiDB...");

if (conn) {
  console.log("Connection to TiDB successful");
  var adminBroRouter = require('./routes/admin_bro');
  //setting up admin bro
  app.use('/admin', adminBroRouter)
} else {
  console.log("Connection to TiDB failed");
}


//Please don't delete this health API
var usersRouter = require('./routes/user_routes');
app.use('/api/health', (req, res) => {
    res.send('Hello Autopilot');
  });




app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;
