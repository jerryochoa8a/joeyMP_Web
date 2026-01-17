const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Established a Connection to the database"))
  .catch(err => console.log("Something went Wrong: " + err));