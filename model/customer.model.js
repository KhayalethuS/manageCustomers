const sql = require("../config/connection");

// constructor
const Customer = function(customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.status = customer.status;
};


Customer.create = (customer, result) => {
  sql.query("INSERT INTO Customers SET ?", customer, (err, res) => {
    if (err) {
      console.log("error: ", err.message);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...customer });
  });
  
};

Customer.index = result => {
  sql.query("SELECT * FROM Customers", (err, res) => {
    if (err) {
      console.log("error: ", err.message);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Customer;