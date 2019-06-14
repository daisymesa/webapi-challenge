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

// DELETE/DESTROY - remove a project
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    projectData.remove(id)
        .then(id => {
            if (id) {
                res.json(id);
            } else {
                res.status(404).json({ message: 'The post with the specified ID does not exist.' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: 'The project could not be removed.' })
        })
})

// UPDATE - update a hub
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    projectData.update(id, changes)
      .then(updatedProject => {
        if (updatedProject) {
          res.json(updatedProject);
        } else {
          res.status(404).json({ error: 'Incorrect project ID.' })
        }
      })
      .catch(({ code, message }) => {
        res.status(500).send(code).json({ error: 'The project data could not be updated.' });
      })
  })


module.exports = router;