import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import guyImg from "../assets/images/hero-banner.gif";
import "../styles/hero-section.css";
import "../styles/home.css";
import axios from "axios";
import ProductCard from "../components/UI/product-card/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 6;
  const visitedProducts = pageNumber * productsPerPage;
  const displayProducts = products.slice(
    visitedProducts,
    visitedProducts + productsPerPage
  );

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        const responseData = response.data.products;
        setProducts(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Cuisine
                </h1>
                <p className="hero__paragraph">
                  We bring you a wide variety of delicious dishes right to your
                  doorstep. Whether you crave Japanese sushi, Filipino cuisine,
                  or Italian pasta, we have it all. Place your order and
                  experience the convenience and joy of having your favorite
                  cuisine delivered to your home.
                </p>
                <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/allfoods">
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="text-center">
              <h2>All Time Favorites</h2>
            </Col>
            {displayProducts.map((item) => (
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="6"
                key={item.id}
                className="mb-4 mt-4"
              >
                <ProductCard item={item} />
              </Col>
            ))}
            <div className="d-flex justify-content-center my-4">
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"<"}
                nextLabel={">"}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
