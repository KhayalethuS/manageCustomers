const Customer = require("../model/customer.model");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Body required!"
    });
  }

  // Create a Customer
  const customer = new Customer({
    email: req.body.email,
    name: req.body.name,
    status: req.body.status
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Something went wrong please try again, if error persist contact our support team."
      });
    else
    res.send(data);
  });
  
};

exports.index = (req, res) => {
  Customer.index((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Something went wrong please try again, if error persist contact our support team."
      });
    else 
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.setHeader("Access-Control-Allow-Headers", "content-type")
    res.send(data) ;
  });
};