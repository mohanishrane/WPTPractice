const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "mysql1917",
  database: "wptexamprac",
};

const insert = async (obj) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into login values("${obj.name}", "${obj.email}", "${obj.password}");`;
  await connection.queryAsync(sql);
  await connection.endAsync();
};
let obj = { name: "Vasu", email: "Vasu@com", password: "hdhbdhvy" };
//insert(obj);

const select = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from login`;
  const list = await connection.queryAsync(sql);
  //console.log(list);
  await connection.endAsync();
  return list;
};
//select();
module.exports = { select, insert };
