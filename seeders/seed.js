var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true
});

var transactionSeed = [
  {
    name: "Gas",
    value: "40",
    date: new Date(Date.now())
  },
  {
    name: "dinner",
    value: "22",
    date: new Date(Date.now())
  },
  {
    name: "groceries",
    value: "34",
    date: new Date(Date.now())
  },
  {
    name: "Car Wash",
    value: "20",
    date: new Date(Date.now())
  }
];

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(transactionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
