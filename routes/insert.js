// ? Lib
const express = require("express");
const router = express.Router();
const Member = require("../models/Member");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// ? Select * FROM Talbe
router.get("/", (req, res) =>
	Member.findAll()
		.then((insert) => res.render("insert", { insert }))
		.catch((err) => console.log(err))
);

// ? Display add data form
router.get("/add", (req, res) => res.render("add"));

// ? Send add data request (POST)
router.post("/add", (req, res) => {
	// const data = {
	//     StudentID: 80809080,
	//     FName: 'sherlock',
	//     LName: 'holmes',
	//     Sex: 'male',
	//     Degree: 'Diploma Degree',
	//     Faculty: 'Faculty of Psychology',
	//     Address: '221B Baker Street',
	// }
	let { StudentID, FName, LName, Sex, Degree, Faculty, Address } = req.body;
	let errors = [];

	if (!StudentID) {
		errors.push({ text: "Please enter student ID" });
	}
	if (!FName) {
		errors.push({ text: "Please enter first name" });
	}
	if (!LName) {
		errors.push({ text: "Please enter last name" });
	}
	if (!Sex) {
		errors.push({ text: "Please enter sex" });
	}
	if (!Degree) {
		errors.push({ text: "Please enter degree" });
	}
	if (!Faculty) {
		errors.push({ text: "Please enter faculty" });
	}
	if (!Address) {
		errors.push({ text: "Please enter address" });
	}

	if (errors.length > 0) {
		res.render("add", {
			errors,
			StudentID,
			FName,
			LName,
			Sex,
			Degree,
			Faculty,
			Address,
		});
	} else {
		//Insert
		Address = Address.toLowerCase().replace(/, /g, ",");

		Member.create({
			StudentID,
			FName,
			LName,
			Sex,
			Degree,
			Faculty,
			Address,
		})
			.then((Member) => res.redirect("/insert"))
			.catch((err) => console.log(err));
	}
});

// ? Search request
router.get("/search", (req, res) => {
	let { term } = req.query;

	term = term.toLowerCase();

	Member.findAll({ where: { StudentID: { [Op.like]: "%" + term + "%" } } })
		.then((insert) => res.render("insert", { insert }))
		.catch((err) => console.log(err));
});

module.exports = router;
