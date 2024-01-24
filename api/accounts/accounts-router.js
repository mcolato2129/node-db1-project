const router = require('express').Router()
const md = require('./accounts-middleware');
router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  res.send('get accounts') ;
})

router.get('/:id', md.checkAccountId,(req, res, next) => {
  // DO YOUR MAGIC
  res.send('get accounts by id');
})

router.post(
  '/', 
md.checkAccountPayload,
md.checkAccountNameUnique, 
(req, res, next) => {
  // DO YOUR MAGIC
  res.send('post account');
})

router.put(
'/:id', 
md.checkAccountId, 
(req, res, next) => {
  // DO YOUR MAGIC
  res.send('update account');
});

router.delete(
'/:id', 
md.checkAccountId, 
md.checkAccountNameUnique,
md.checkAccountPayload,
(req, res, next) => {
  // DO YOUR MAGIC
  res.send('delete account');
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
