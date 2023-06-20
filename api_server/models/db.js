const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
let dbLink = "mongodb+srv://dryzanetwork:ayamgoreng123@cluster0.c2x1qws.mongodb.net/my_api?retryWrites=true&w=majority";

mongoose.connect(dbLink, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
	console.log(`Mongoose connected to ${dbLink}`);
});
mongoose.connection.on("error", (err) => {
	console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose disconnected");
});

require("./gunung");
require("./alat");
