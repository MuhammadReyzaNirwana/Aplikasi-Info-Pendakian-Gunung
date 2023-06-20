const mongoose = require("mongoose");

const gunungSchema = new mongoose.Schema({
	nama: String,
	ketinggian: String,
	deskripsi: String,
	lokasi: String,
	foto: String,
	lat: Number,
	lon: Number,
});

mongoose.model("Gunung", gunungSchema, "gunung");
