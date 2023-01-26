const express = require('express');
const {getPeopleList, createPerson, updatePerson, deletePerson, postman} = require('../controllers/people')
const router = express.Router();

// router.get('/', getPeopleList);

// router.post('/', createPerson);

// router.put('/:id', updatePerson);

// router.delete('/:id', deletePerson);

// router.post('/postman', postman);

router.route('/').get(getPeopleList).post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);
router.route('/postman').post(postman);

module.exports = router;