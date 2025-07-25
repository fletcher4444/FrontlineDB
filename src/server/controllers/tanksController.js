const express = require('express');
const tanks = express.Router();

// GET all tanks
const getTanks = (req, res) =>{
  const {id} = req.params;
  if (id) {
    res.send(`Ship with ID: ${id}`);
  } else {
    res.send('List of ships');  
  }
}
// GET tank by ID
const getTankById = (req, res) => {
  const { id } = req.params;
  res.send(`Tank with ID: ${id}`);
}           
// POST create new tank
const createTank = (req, res) => {
    const tankData = req.body;
    res.status(201).send(`Tank created with data: ${JSON.stringify(tankData)}`);
    }           
// PUT update tank
const updateTank = (req, res) => {      

    const { id } = req.params;
    const tankData = req.body;
    res.send(`Tank with ID: ${id} updated with data: ${JSON.stringify(tankData)}`);
    }   
// DELETE tank
const deleteTank = (req, res) => {
    const { id } = req.params;
    res.send(`Tank with ID: ${id} deleted`);
}                   
// Register routes
tanks.get('/', getTanks);
tanks.get('/:id', getTankById);
tanks.post('/', createTank);            