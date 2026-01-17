const itemController = require('../controllers/item.controllers');
const upload = require('../config/multer.config');

module.exports = function(app){
    app.post('/api/appt/create', upload.single('image'), itemController.createItem);
    app.get('/api/itemList', itemController.getItemList);
    app.delete('/api/item/:id/delete', itemController.deleteItem);
    app.get('/api/getItem/:id', itemController.getItem);
    
}