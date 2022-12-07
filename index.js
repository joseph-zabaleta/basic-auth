'use strict'

const { sequelizeDatabase } = require('./src/auth/models/index.js')
const server = require('./src/server.js');


// make sure our tables are created, start up the HTTP server.
/* 
  sequelizeDatabase.sync() ---- creates our database, and initilizes our tables
  THEN -----
  We start our API server with server.start();
  CATCH ---
  if anything goes wrong we will console.error a message
 */
sequelizeDatabase.sync()
  .then(() => {
    server.start();
  }).catch(e => {
    console.error('Could not start server', e.message);
  });