let { people } = require('../data.js');

const getPeopleList = (req, res) => {
	res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
	console.log(req.body);
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: 'Please enter name of the person' });
	}
	res.status(201).json({ success: true, person: name });
};

const updatePerson = (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const person = people.find((item) => item.id === Number(id));
	if (!person) {
		return res.status(400).json({
			success: false,
			msg: `No person with id ${id} found in the database`,
		});
	}
	const newPeople = people.map((item) => {
		if (item.id === Number(id)) {
			item.name = name;
		}
		return item;
	});
	res.status(200).json([...newPeople]);
};

const deletePerson = (req, res) => {
	const { id } = req.params;
	const person = people.find((item) => item.id === Number(id));
	console.log(person);
	if (!person) {
		return res.status(400).json({
			success: false,
			msg: `No person with id ${id} found in the database`,
		});
	}
	const newPeople = people.filter((item) => item.id !== Number(id));
	people = newPeople;
	res.status(200).json([...newPeople]);
};

const postman = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.send({ success: false, msg: 'Name was not provided' });
	}
	res.status(200).json({ success: true, data: [...people, name] });
};

module.exports = { getPeopleList, updatePerson, createPerson, deletePerson, postman };
