const mongoose = require("mongoose");

let Gunung = mongoose.model("Gunung");
const { send, json } = require("micro");

// const gunungShow = async (req, res) => {
// 	try {
// 		const gunung = await Gunung.find({});
// 		res.status(200).json({
// 			status: "success",
// 			data: gunung,
// 		});
// 	} catch (err) {
// 		res.status(500).json({
// 			status: "failed",
// 			error: err,
// 		});
// 	}
// };
const gunungShow = async (req, res) => {
	try {
		const gunung = await Gunung.find({});
		send(res, 200, {
			status: "success",
			data: gunung,
		});
	} catch (err) {
		send(res, 500, {
			status: "failed",
			error: err,
		});
	}
};

const gunungCreate = async (req, res) => {
	const newGunung = new Gunung({
		nama: req.body.nama,
		ketinggian: req.body.ketinggian,
		deskripsi: req.body.deskripsi,
		lokasi: req.body.lokasi,
		foto: req.body.foto,
		lat: req.body.lat,
		lon: req.body.lon,
	});

	try {
		const savedGunung = await newGunung.save();
		res.status(200).json({
			status: "success",
			data: savedGunung,
		});
	} catch (err) {
		res.status(500).json({
			status: "failed",
			error: err,
		});
	}
};

const gunungDetail = async (req, res) => {
	try {
		const gunung = await Gunung.findById(req.params.id);
		if (!gunung) {
			res.status(404).json({
				status: "failed",
				message: "Gunung not found with that ID",
			});
			return;
		}

		res.status(200).json({
			status: "success",
			data: gunung,
		});
	} catch (err) {
		res.status(500).json({
			status: "failed",
			error: err,
		});
	}
};

module.exports = {
	gunungShow,
	gunungCreate,
	gunungDetail,
};
