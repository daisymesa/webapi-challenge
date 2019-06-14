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

// CREATE = add a new project
router.post('/', (req, res) => {

    const newProject = { name: req.body.name, description: req.body.description };
    projectData.insert(newProject)
    .then(addedProject => {
        res.status(201).json(addedProject);
    })
    .catch(error => {
        res.status(500).json({ error: 'The new project could not be added.' })
    })
})

module.exports = router;