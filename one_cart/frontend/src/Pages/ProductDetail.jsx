import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext';

const ProductDetail = () => {

    const {productId} = useParams();

    const {products,currency} = useContext(shopDataContext)
    const {productData,setProductData} = useState(false)

    const [image,setImage] = useState('')
    const [image1,setImage1] = useState('')
    const [image2,setImage2] = useState('')
    const [image3,setImage3] = useState('')
    const [image4,setImage4] = useState('')
    const [size,setSize] = useState('')

  return (
    <div>
      
    </div>
  )
}

export default ProductDetail
