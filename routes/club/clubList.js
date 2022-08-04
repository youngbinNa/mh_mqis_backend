var sql = require('mssql');

var strSql = "";



var clubList = {
//클럽목록
	list : function(req, res){
			var connection = new sql.connect(doonpo1config, function (err) {

				if (err) return console.error('error is', err)
				
				// or: var request = connection.request();
				var request = new sql.Request(connection);
				
				var data = "'나영빈'"; //변수 쓰는법

				strSql = "select * from TB_PLANT"// where userName =" + data;

				request.query(strSql, function(err, recordset) {
					if (err) return console.error('error query is', err)				
					console.log('result query is', recordset);
					res.render('club/clubList', {clubList : recordset});
					//res.send(recordsets.recordset);
				});

			connection.on('error', function (err) {
				// ... error handler 
				});
			});
		
			
		}
	};

module.exports = clubList;