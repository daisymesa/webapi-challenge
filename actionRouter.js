const express = require('express');

const actionsData = require('./data/helpers/actionModel');

const router = express.Router();

// READ - send back a list of all actions
router.get('/', (req, res) => {
    actionsData.get()
        .then(allProjects => {
            res.json(allProjects);
        })
        .catch(error => {
            res.status(500).json({ error: 'The data could not be retrieved.' })
        })
})

// CREATE = add a new action
router.post('/', (req, res) => {
    const newAction = { project_id: req.body.project_id, description: req.body.description, notes: req.body.notes };

    actionsData.insert(newAction)
        .then(addedAction => {
            res.status(201).json(addedAction);
        })
        .catch(error => {
            res.status(500).json({ error: 'The data could not be added.' })
        })
})

// DELETE/DESTROY - remove an action
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    actionsData.remove(id)
        .then(id => {
            if (id) {
                res.json(id);
            } else {
                res.status(404).json({ message: 'The data with the specified ID does not exist.' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: 'The data could not be removed.' })
        })
})

// UPDATE - update an action
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    actionsData.update(id, changes)
      .then(changes => {
        if (changes) {
          res.json(changes);
        } else {
          res.status(404).json({ error: 'Incorrect project ID.' })
        }
      })
      .catch(error  => {
        res.status(500).send(code).json({ error: 'The project data could not be updated.' });
      })
  })

module.exports = router;