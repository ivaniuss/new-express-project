import { Router } from 'express';
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
  loadTestProducts
} from '../controllers/productController.js';
import { authorize } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', authorize, createProduct);
router.get('/', authorize, getProducts);
router.get('/:id', authorize, getProduct);
router.put('/:id', authorize, updateProduct);

router.post('/load-test-products', authorize, loadTestProducts);

router.delete('/delete-all', authorize, deleteAllProducts);

router.delete('/:id', authorize, deleteProduct);

export default router;
