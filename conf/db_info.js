var sql = require('mssql');


var dbconnInfo = {
	dev:{
		user: 'sa',
		password: 'Mic_7126',
		server: '192.168.56.90',
		database: 'VAN_DOONPO_2019_DEV'
	}
};

var dbconnection = {
	init : function(){
		var connection = new sql.connect(dbconnInfo.dev, function (err) {

		if (err) {
			return console.error('error is', err);
		}
		else{
			console.info("mssql connection successfully.");
		}
		var request = new sql.Request(connection);

		connection.on('error', function (err) {
			// ... error handler 
			});
		});
	},
	
	dbopen : function(con){
		con.connect(function(err){
			if(err){
				console.error("mssql connection error : " + err);
			}else{
				console.info("mssql connection successfully.");
			}
		});
	}
};

module.exports = dbconnection;

//var connection = new sql.connect(config, function (err) {
//
//		if (err) return console.error('error is', err)
//		
//		// or: var request = connection.request();
//		var request = new sql.Request(connection);
//		
//		var data = "'나영빈'"; //변수 쓰는법
//
//		strSql = "select * from TB_User where userName =" + data;
//
//		request.query(strSql, function(err, recordset) {
//			if (err) return console.error('error query is', err)				
//			console.log('result query is', recordset);
//		});
//
//connection.on('error', function (err) {
//	// ... error handler 
//	});
//});