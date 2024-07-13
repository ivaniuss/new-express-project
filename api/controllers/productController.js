import db from '../models/index.js';
const { Product } = db;

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteAllProducts = async (req, res) => {
  try {
    await Product.destroy({ where: {}, truncate: true });
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loadTestProducts = async (req, res) => {
  try {
    const testProducts = [];
    for (let i = 0; i < 50; i++) {
      testProducts.push({
        name: `Test Product ${i + 1}`,
        price: (Math.random() * 100).toFixed(2),
        description: `Description for test product ${i + 1}`
      });
    }
    await Product.bulkCreate(testProducts);
    res.status(201).json({ message: '50 test products loaded' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};