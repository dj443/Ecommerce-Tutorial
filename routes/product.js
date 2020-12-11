const express = require('express');
const { authenticateJWT } = require('../middleware/authenticator');
const router = express.Router();
const upload = require('../middleware/multer');
const productController = require('../controllers/product');

router.post('/', authenticateJWT, upload.single('productImage'), productController.create)

module.exports = router;