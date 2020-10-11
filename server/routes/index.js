import express from 'express';
import * as tranzilate from '../controllers/tranzilateControllers';
import * as add from '../controllers/addController';
const router = express.Router();
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
router.post('/tran', tranzilate.tran);
router.post('/add', add.add);
export default router;