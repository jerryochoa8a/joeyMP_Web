const { request, response } = require('express');
const { Item } = require('../models/item.models');

module.exports.getItemList = (request, response) => {
    Item.find({})
        .then(list => response.json(list))
        .catch(err => response.status(err))
}

module.exports.createItem = (request, response) => {
    const { name, price, description } = request.body;
    Item.create({
        name,
        price,
        description,
        image: `/images/${request.file.filename}`,
    })
        .then(list => response.json(list))
        .catch(err => console.log(err))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteItem = (request, response) => {
    Item.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.getItem = (request, response) => {
    Item.find({ _id: request.params.id})
    .then(item => response.json(item))
    .catch(err => response.json(err))
}