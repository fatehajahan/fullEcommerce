const uploadImage = require("../middleware/cloudinary")
const categorySchema = require("../models/categorySchema")
const productSchema = require("../models/productSchema")

async function productCtrl(req, res) {
    try {
        const { name, description, 
            price, 
            fragrance, 
            category, 
            subCategory, 
            discount 
        } 
            = req.body
        // console.log(category)
        const foundCategory = await categorySchema.findOne({ categoryName: category })

        const imgPath = req.file.path
        const imgUrl = await uploadImage(imgPath)

        if (!name || !price || !description || !flavour) {
            return res.status(400).json({ message: "All fields are required" })
        }
        if (!foundCategory) {
            return res.status(200).json({ message: "Category not found" })
        }
        const product = new productSchema({
            name, description, 
            price, 
            fragrance,
            image: imgUrl.secure_url,
            subCategory,
            category: foundCategory.categoryName,
            discount
        })
        await product.save()
        await categorySchema.findOneAndUpdate(
            { categoryName: category },
            {
                $push: { product: product.name }
            },
            { new: true }
        )
        res.status(200).json({
            message: "product created successfully", statues: "success",
            data: product
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "product creation failed", statues: "Failed"
        })
    }
}
async function getAllProductCtrl(req, res) {
    try {
        const allProduct = await productSchema.find({})
        res.status(200).json({
            message: "get all category",
            statues: "success",
            data: allProduct
        })
    } catch (error) {
        res.status(400).json({ error: "internal server error", statues: "failed" })
    }
}
async function updateSingleProductCtrl(req, res) {
    try {
        const { id } = req.params;
        const { categoryName, categoryDescription } = req.body;

        const updateData = {};
        if (categoryName) updateData.categoryName = categoryName;
        if (categoryDescription) updateData.categoryDescription = categoryDescription;

        const updatedCategory = await categorySchema.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category updated successfully", data: updatedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", status: "failed" });
    }
}
async function deleteProduct(req, res) {
    try {
        const { id } = req.params;
        const deleteProduct = await productSchema.findByIdAndDelete(id);

        res.status(200).json({
            message: "Category deleted successfully",
            data: deleteProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
            status: "error"
        });
    }
}
module.exports = { productCtrl, getAllProductCtrl, deleteProduct, updateSingleProductCtrl }
