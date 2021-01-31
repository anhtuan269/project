var low = require ('lowdb');
var FileSync = require ('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);
db.defaults({ products : [], slides: [], banners:[], blogs: [], logos: [] })
  .write();
  
module.exports = db;