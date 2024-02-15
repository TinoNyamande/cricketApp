const express = require("express")
const { getAProduct,
    getAllProducts,
    addProduct,
    editProduct,
    deleteProduct} = require("./../controllers/productController")
const router = express.Router();

router.get("products",getAllProducts);
router.get("product/:id",getAProduct);
router.post("product",addProduct);
router.patch("product/:id",editProduct)
router.delete("product/:id",deleteProduct)


module.exports = router;

