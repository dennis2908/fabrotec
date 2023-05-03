"user strict";

const User = function (user) {
	this.Uid = user.Uid;
	this.Username = user.Username;
	this.City = user.City;
	this.Friend = user.Friend;
};

User.create = async function (user, result) {
	
  connection.query("INSERT INTO Users set ?", user, function (err, res) {
    if (err) {
		connection.rollback(function(){
                  console.log(err);
                   connection.query("SELECT * FROM Users", (err, res) => {
			result(null, {
		status: "error",
		error:err,
		dbState: res});
		  });
                  });
    } else {
		 connection.query("SELECT * FROM Users", (err, res) => {
			result(null, {
		status: "ok",
		dbState: res});
		  });
      
    }
  });
};

module.exports = User;
