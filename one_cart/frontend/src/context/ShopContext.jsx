import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthDataContext } from './authContext';
import axios from "axios";

export const shopDataContext = createContext();

const ShopContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [showsearch, setShowsearch] = useState(false); // NOTE: keep capital S

  const { serverUrl } = useContext(AuthDataContext);

  const currency = "₹";
  const delivery_fee = 40;

  const getProducts = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/product/list`);
      console.log("Product", result.data);
      setProducts(result.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    getProducts,
    search,
    setSearch,
    showsearch,
    setShowsearch // Keep the same name here
  };

  return (
    <shopDataContext.Provider value={value}>
      {children}
    </shopDataContext.Provider>
  );
};

export default ShopContext;
