const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const preLoader = require('./src/preload');

conn.sync({ force: true }).then(() => {

  server.listen(3001, () => {

    console.log('Server listening at port 3001');
    preLoader()
  });
});