const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const preLoader = require( './src/preload' );
const { PORT } = process.env

conn.sync({ force: true }).then(() => {

  server.listen( PORT, () => {

    console.log( `Server listening at port ${PORT}` );
    preLoader()
  });
});
