const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { authenticate, authorizeRoles } = require("../middleware/auth");

router.post(
  "/",
  authenticate,
  authorizeRoles(["admin"]),
  productController.createProduct
);
router.get(
  "/",
  authenticate,
  authorizeRoles(["admin", "manager"]),
  productController.getProducts
);
router.put(
  "/:id",
  authenticate,
  authorizeRoles(["admin", "manager"]),
  productController.updateProduct
);
router.delete(
  "/:id",
  authenticate,
  authorizeRoles(["admin"]),
  productController.deleteProduct
);

module.exports = router;
