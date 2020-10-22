module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Create a customer
  app.post("/customers", customers.create);

  // get all customers
  app.get("/customers", customers.index);

};