const mongoose = require("mongoose");

let Alat = mongoose.model("Alat");

const alatShow = async (req, res) => {
	try {
		const alat = await Alat.find({});
		return res.status(200).json({
			status: "success",
			data: alat,
		});
	} catch (err) {
		return res.status(500).json({
			status: "error",
			message: err.message,
		});
	}
};

const alatDetail = async (req, res) => {
	try {
		const alat = await Alat.findById(req.params.id);
		if (!alat) {
			return res.status(404).json({
				status: "error",
				message: "Alat not found with that ID",
			});
		}
		return res.status(200).json({
			status: "success",
			data: alat,
		});
	} catch (err) {
		return res.status(500).json({
			status: "error",
			message: err.message,
		});
	}
};

module.exports = {
	alatShow,
	alatDetail,
};
