
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products, categories } from "../data";
import ProductCard from "./ProductCard.jsx"

const Products = () => {
  const { categoryName } = useParams();

  // Original Products (Never Changes)
  const [allProducts,setAllProducts] = useState([]);

  // Filter States
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [rating, setRating] = useState(0);
  const [selectedCategories, setSelectedCategories] =
    useState([]);

  // Products shown on UI
  const [filteredProducts, setFilteredProducts] =
    useState([]);
    useEffect(()=>{
      fetch("https://pregrad-clothe.vercel.app/products")
      .then(res=>res.json())
      .then((res=>{
        setAllProducts(res)
        setFilteredProducts(res)

      }),[])

      
    },[])
  // Common Filter Function
  const applyFilters = (
    searchValue = search,
    genderValue = gender,
    ratingValue = rating,
    categoriesValue = selectedCategories
  ) => {
    let updatedProducts = [...allProducts];

    // Route Category Filter
    if (categoryName) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category.toLowerCase() ===
          categoryName.toLowerCase()
      );
    }

    // Search Filter
    if (searchValue) {
      updatedProducts = updatedProducts.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
    }

    // Gender Filter
    if (genderValue) {
      updatedProducts = updatedProducts.filter(
        (product) => product.gender === genderValue
      );
    }

    // Rating Filter
    updatedProducts = updatedProducts.filter(
      (product) => product.ratings >= ratingValue
    );

    // Checkbox Category Filter
    if (
      !categoryName &&
      categoriesValue.length > 0
    ) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          categoriesValue.includes(product.category)
      );
    }

    setFilteredProducts(updatedProducts);
  };

  // Search
  const searchHandler = (e) => {
    const value = e.target.value;

    setSearch(value);

    applyFilters(
      value,
      gender,
      rating,
      selectedCategories
    );
  };

  // Gender
  const genderHandler = (e) => {
    const value = e.target.value;

    setGender(value);

    applyFilters(
      search,
      value,
      rating,
      selectedCategories
    );
  };

  // Rating
  const ratingHandler = (e) => {
    const value = Number(e.target.value);

    setRating(value);

    applyFilters(
      search,
      gender,
      value,
      selectedCategories
    );
  };

  // Category Checkbox
  const categoryHandler = (category) => {
    let updatedCategories;

    if (
      selectedCategories.includes(category)
    ) {
      updatedCategories =
        selectedCategories.filter(
          (item) => item !== category
        );
    } else {
      updatedCategories = [
        ...selectedCategories,
        category,
      ];
    }

    setSelectedCategories(updatedCategories);

    applyFilters(
      search,
      gender,
      rating,
      updatedCategories
    );
  };

  // Runs only when route changes
  useEffect(() => {
    applyFilters();
  }, [categoryName]);

  return (
    <>
      <section className="product-head">
        <h3>
          {categoryName
            ? `${categoryName}`
            : "All Products"}
        </h3>

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={searchHandler}
        />
      </section>

      <section className="products-layout">
        <div className="filters">
          <h3>Filters</h3>

          {/* Gender */}

          <div className="filter-section">
            <h4>Gender</h4>

            <label>
              <input
                type="radio"
                name="gender"
                value=""
                checked={gender === ""}
                onChange={genderHandler}
              />
              All
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={genderHandler}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={genderHandler}
              />
              Female
            </label>
          </div>

          {/* Rating */}

          <div className="filter-section">
            <h4>Minimum Rating</h4>

            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={rating}
              onChange={ratingHandler}
            />

            <p>{rating} ⭐ & Above</p>
          </div>

          {/* Categories */}

          {!categoryName && (
            <div className="filter-section">
              <h4>Categories</h4>

              {categories.map((category) => (
                <label
                  key={category.categoryName}
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      category.categoryName
                    )}
                    onChange={() =>
                      categoryHandler(
                        category.categoryName
                      )
                    }
                  />

                  {category.categoryName}
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.productName}
                product={product}
              />
            ))
          ) : (
            <h2>No Products Found</h2>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;


// Frontend se backend ke domain ko call krte =>fetch(http://)=> That domain route us to any IP Adress=> BackendServer