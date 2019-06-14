const express = require('express');

const projectData = require('./data/helpers/projectModel');

const router = express.Router();

// READ - send back a list of all projects
router.get('/', (req, res) => {
    projectData.get()
    .then(allProjects => {
        res.json(allProjects);
    })
    .catch(error => {
        res.status(500).json({ error: 'The project information could not be retrieved.' })
    })
})

module.exports = router;