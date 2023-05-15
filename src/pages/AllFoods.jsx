import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import guyImg from "../assets/images/hero-banner2.gif";
import axios from "axios";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import "../styles/pagination.css";

const AllFoods = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "http://127.0.0.1:8000/api/products";
    
        if (category !== "ALL") {
          url += `?category=${category}`;
        }

        console.log(url);
    
        const response = await axios.get(url);
        const responseData = response.data.products;
    
        setAllProducts(responseData);
      } catch (error) {
        console.error(error);
        setAllProducts([]); // Set an empty array in case of an error
      }
    };
    

    fetchProducts();
  }, [category]);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <Helmet title="Foodie Express">
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12" sm="12">
              <div className="hero__img text-center">
                <img
                  src={guyImg}
                  alt="delivery-guy"
                  className="w-50 justify-content-center"
                />
              </div>
            </Col>

            <Col lg="12" className="text-center">
              <h2>Popular Menu</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } py-1`}
                  onClick={() => handleCategoryChange("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Japanese" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => handleCategoryChange("Japanese")}
                >
                  Japanese
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Filipino" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => handleCategoryChange("Filipino")}
                >
                  Filipino
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Italian" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => handleCategoryChange("Italian")}
                >
                  Italian
                </button>
              </div>
            </Col>

            {allProducts && allProducts.length > 0 ? (
              allProducts.map((item) => (
                <Col lg="3" md="4" key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))
            ) : (
              <Col lg="12" className="text-center">
                <p>No products found.</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
