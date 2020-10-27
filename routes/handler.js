const express = require('express');
const router = express.Router();
const processor = require('../object/storage')
const { reply } = require('../services/middlewares')


/* GET users listing. */
router.get('/list/:id', reply(async (req) => {
  return processor.getList(req.params.id)
}));

router.post('/list', reply(async (req) => {
  return processor.addList(req.body.list)
}));

router.put('/list', reply(async (req) => {
  return processor.updateList(req.body.list)
}));

router.delete('/list/:id', reply(async (req) => {
  return processor.deleteList(req.params.id)
}));

///
router.get('/list/:listId/item/:itemId', reply(async (req) => {
  return processor.getItem(req.params.listId, req.params.itemId)
}));

router.post('/list/:listId/item', reply(async (req) => {
  return processor.addItem(req.params.listId, req.body.item)
}));

router.put('/list/:listId/item', reply(async (req) => {
  return processor.updateItem(req.params.listId, req.body.item)
}));

router.delete('/list/:listId/item/:itemId', reply(async (req) => {
  return processor.deleteItem(req.params.listId, req.params.itemId)
}));

module.exports = router;
