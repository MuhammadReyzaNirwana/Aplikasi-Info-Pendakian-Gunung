const mongoose = require("mongoose");

const alatSchema = new mongoose.Schema({
	nama: String,
	deskripsi: String,
	foto: String,
});

mongoose.model("Alat", alatSchema, "alat");
