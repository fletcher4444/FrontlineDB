const express = require('express');
const airplanes = express.Router();

// GET all airplanes
const getAirplanes = (req, res) => {
  // Logic to get all airplanes
  res.send('List of airplanes');
};

// GET airplane by ID
const getAirplaneById = (req, res) => {
  const { id } = req.params;
  res.send(`Airplane with ID: ${id}`);
};

// POST create new airplane
const createAirplane = (req, res) => {
  const airplaneData = req.body;
  res.status(201).send(`Airplane created with data: ${JSON.stringify(airplaneData)}`);
};

// PUT update airplane
const updateAirplane = (req, res) => {
  const { id } = req.params;
  const airplaneData = req.body;
  res.send(`Airplane with ID: ${id} updated with data: ${JSON.stringify(airplaneData)}`);
};

// DELETE airplane
const deleteAirplane = (req, res) => {
  const { id } = req.params;
  res.send(`Airplane with ID: ${id} deleted`);
};

// Register routes
airplanes.get('/', getAirplanes);
airplanes.get('/:id', getAirplaneById);
airplanes.post('/', createAirplane);
airplanes.put('/:id', updateAirplane);
airplanes.delete('/:id', deleteAirplane);

module.exports = airplanes;

