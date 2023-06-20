const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
	console.log(`Mongoose connected to ${process.env.MONGODB_URI}`);
});

mongoose.connection.on("error", (err) => {
	console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose disconnected");
});

require("./gunung");
require("./alat");
