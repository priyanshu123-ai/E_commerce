import { Product } from "../model/productModel.js";
import uploadonCloudinary from "../utils/cloudinary.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = await uploadonCloudinary(req.files.image1[0].path);
    const image2 = await uploadonCloudinary(req.files.image2[0].path);
    const image3 = await uploadonCloudinary(req.files.image3[0].path);
    const image4 = await uploadonCloudinary(req.files.image4[0].path);

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,

      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);

    return res.status(201).json({
        success:true,
        message:"All Product created Successfully",
        product
    })
  } catch (error) {
    console.log(error);

    return res.status(401).json({
        success:false,
        message:error.message
    })
  }
};

export const listProduct = async(req,res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json({
      success:true,
      message:"All Product Found",
      product
    })
    
    
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      success:false,
      message:error.message
    })
    
  }
}

export const removeProduct = async (req,res) => {
  try {
    const {id} = req.params;

    const product = await Product.findByIdAndDelete(id);

    return res.status(200).json({
      success:true,
      message:"Product find and Delete",
      product
    })
    
  } catch (error) {
    console.log(error)
    return res.status(501).json({
      success:false,
      message:error.message
    })
    
  }
}
