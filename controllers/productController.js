const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { title, description, inventoryCount } = req.body;

    const newProduct = new Product({
      title,
      description,
      inventoryCount,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (err) {
    res.status(500).json({ message: "Error creating product" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { title, description, inventoryCount } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { title, description, inventoryCount },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res
      .status(200)
      .json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
  } catch (err) {
    res.status(500).json({ message: "Error updating product" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
