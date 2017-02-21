/* Opens a connection to the database inorder to populate the
   system under test
*/
'use strict';

function dbConnection() {

  var mysql = require('../../mysql');

  this.connection = mysql.createConnection({
    host: '',
    database: '',
    user: '',
    password: ''
  });
};

// insert tool -- verify out come
function populateDB() {
  var sql1 = 'INSERT INTO IssuedTools (SerialNumber,ToolID,DateIssued,EmployeeId,ParentId,ChildId,WorkOrder,PastDueSent) VALUES ('Z41BJ001','160',GETUTCDATE(),'22',NULL,NULL,NULL,'0')';
  var sql2 = 'INSERT INTO ToolStatuses (ToolId,SerialNumber,EmployeeId,DateApplied,StatusId,State) VALUES ('160','Z41BJ001','22',GETUTCDATE(),'3','1')';
  
  // insert tool
  this.connection.query(sql1, function(err,rows));
  if (!err) {
  	before = rows[0].result;
  }

  // assign status
  this.connection.query(sql2, function(err,rows));
  if (!err) {
  	before = rows[0].result;
  }
};

function closeConn() {
	this.connection.end();
}

module.exports = dbConnection;
