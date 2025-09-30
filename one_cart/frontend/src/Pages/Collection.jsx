import React, { useContext, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import Card from "../component/Card";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { products,search,showsearch } = useContext(shopDataContext);

  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // toggle category
  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  // toggle sub-category
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  // filter + sort
  const applyFilter = () => {
    let productCopy = [...products];

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if(showsearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (sortType === "highToLow") {
      productCopy.sort((a, b) => b.price - a.price);
    } else if (sortType === "lowToHigh") {
      productCopy.sort((a, b) => a.price - b.price);
    }

    setFilterProduct(productCopy);
  };

  // initial load
  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  // apply filters on change
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortType,search,showsearch]);

  return (
    <div className="min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col md:flex-row pt-[70px] z-[2] pb-[110px]">
      {/* Sidebar */}
      <div
        className={`
          md:w-[30vw] lg:w-[20vw] w-full md:min-h-[100vh]
          p-[20px] border-r border-gray-400 text-[#aaf5fa]
          lg:fixed overflow-y-auto bg-gradient-to-l from-[#141414] to-[#0c2025]
        `}
      >
        {/* Filter header */}
        <p
          className="text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer md:cursor-default"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          FILTERS
          {!showFilter && <FaChevronRight className="text-[18px] md:hidden" />}
          {showFilter && <FaChevronDown className="text-[18px] md:hidden" />}
        </p>

        <div className={`${showFilter ? "block" : "hidden"} md:block`}>
          {/* Categories */}
          <div className="border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600">
            <p className="text-[18px] text-[#f8fafa]">CATEGORIES</p>
            <div className="flex flex-col gap-[10px] mt-2">
              {["Men", "Women", "Kids"].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-[10px] text-[16px] font-light"
                >
                  <input
                    type="checkbox"
                    value={cat}
                    className="w-3"
                    onChange={toggleCategory}
                    checked={category.includes(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Sub-Categories */}
          <div className="border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600">
            <p className="text-[18px] text-[#f8fafa]">SUB-CATEGORIES</p>
            <div className="flex flex-col gap-[10px] mt-2">
              {["TopWear", "BottomWear", "WinterWear"].map((sub) => (
                <label
                  key={sub}
                  className="flex items-center gap-[10px] text-[16px] font-light"
                >
                  <input
                    type="checkbox"
                    value={sub}
                    className="w-3"
                    onChange={toggleSubCategory}
                    checked={subCategory.includes(sub)}
                  />
                  {sub}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="lg:pl-[22vw] w-full px-[20px]">
        {/* Header */}
        <div className="flex justify-between flex-col lg:flex-row gap-4 lg:px-[30px] py-[20px]">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="bg-slate-600 md:w-[200px] h-[50px] mt-[10px] px-[10px] text-[white] rounded-lg hover:border-[#46d1f7] border-[2px]"
          >
            <option value="relevant">Sort By: Relevant</option>
            <option value="highToLow">Sort By: High to Low</option>
            <option value="lowToHigh">Sort By: Low to High</option>
          </select>
        </div>

        {/* Products */}
        <div className="min-h-[70vh] flex  justify-center items-center flex-wrap gap-[30px] pb-[40px]">
          {filterProduct.length > 0 ? (
            filterProduct.map((item) => (
              <Card
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            ))
          ) : (
            <p className="text-white text-lg">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
