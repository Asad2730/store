const mongoose = require("mongoose");

module.exports = function () {
  const db =
    "mongodb://0.0.0.0:27017/store";
  mongoose.set("strictQuery", false);
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", function () {
    console.log("mongo connected to " + db);
  });

  mongoose.connection.on("error", function (err) {
    console.log("mongo connected error " + err);
  });

  mongoose.disconnect("disconnected", function (err) {
    console.log("mongo disconnected ", err);
  });
};
