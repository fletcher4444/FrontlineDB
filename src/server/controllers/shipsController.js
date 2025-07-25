    const express = require('express');
const ships = express.Router();  

const getShips = (req, res) =>{
  const {id} = req.params;
  if (id) {
    res.send(`Ship with ID: ${id}`);
  } else {
    res.send('List of ships');  
  }
}

const createShip = (req, res) => {
  const shipData = req.body;
  res.status(201).send(`Ship created with data: ${JSON.stringify(shipData)}`);
}
const updateShip = (req, res) => {
  const { id } = req.params;
  const shipData = req.body;
  res.send(`Ship with ID: ${id} updated with data: ${JSON.stringify(shipData)}`);
}
const deleteShip = (req, res) => {
  const { id } = req.params;
  res.send(`Ship with ID: ${id} deleted`);
}
   
// Register routes
ships.get('/:id?', getShips);
ships.post('/', createShip);
ships.put('/:id', updateShip);
ships.delete('/:id', deleteShip);     

module.exports = ships;
