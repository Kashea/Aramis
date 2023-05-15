import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios library

import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useSelector } from "react-redux";

import "../styles/product-details.css";
import "../styles/product-card.css";

import ProductCard from "../components/UI/product-card/ProductCard";

const PizzaDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [extraIngredients, setExtraIngredients] = useState([]);
  const [isUpdateNotificationDisplayed, setIsUpdateNotificationDisplayed] = useState(false);
  const [product, setProduct] = useState(null); // Initialize product state as null
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const [previewImg, setPreviewImg] = useState(null); // Initialize previewImg state as null
  const relatedProduct = useSelector((state) => state.products.filter((item) => item.category === product?.category)); // Use state.products to filter related products

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`); // Make API call to fetch product details
        const productData = response.data;
        setProduct(productData); // Set product state with fetched data
        setPreviewImg(productData?.image01); // Set previewImg state with image01 from fetched data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the fetchData function on component mount

    return () => {
      // Clean up any running async tasks or event handlers
      // if needed
    };
  }, [id]);

  useEffect(() => {
    const existingPizza = cartProducts.find((item) => item.id === id);
    if (existingPizza) {
      setExtraIngredients(existingPizza.extraIngredients);
    } else {
      setExtraIngredients([]);
    }
  }, [cartProducts, id]);

  const addItem = () => {
    setIsUpdateNotificationDisplayed(true);
    setTimeout(function () {
      setIsUpdateNotificationDisplayed(false);
    }, 3000);

    dispatch(
      cartActions.addItem({
        id,
        title: product?.title,
        price: product?.price,
        image01: product?.image01,
        extraIngredients,
      })
    );
  };

  useEffect(() => {
    setPreviewImg(product?.image01);
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details">
      {isUpdateNotificationDisplayed && (
        <div className="updateCartNotifiation py-3">
          <span>You successfully updated your cart!</span>
        </div>
      )}

      {product && (
        <CommonSection title={product?.title}>
          <section>
            <Container>
              <Row>
                <Col lg="2" md="2">
                  <div className="product__images">
                    <div
                      className="img__item mb-3"
                      onClick={() => setPreviewImg(product?.image01)}
                    >
                                            <img src={product?.image01} alt="" className="w-50" />
                    </div>
                    <div
                      className="img__item mb-3"
                      onClick={() => setPreviewImg(product?.image02)}
                    >
                      <img src={product?.image02} alt="" className="w-50" />
                    </div>

                    <div
                      className="img__item"
                      onClick={() => setPreviewImg(product?.image03)}
                    >
                      <img src={product?.image03} alt="" className="w-50" />
                    </div>
                  </div>
                </Col>

                <Col lg="4" md="4">
                  <div className="product__main-img">
                    <img src={previewImg} alt="" className="w-100" />
                  </div>
                </Col>

                <Col lg="6" md="6">
                  <div className="single__product-content">
                    <h2 className="product__title mb-3">{product?.title}</h2>
                    <p className="product__price">
                      Price: <span>₱{product?.price}</span>
                    </p>
                    <p className="category mb-5">
                      Category: <span>{product?.category}</span>
                    </p>

                    <button onClick={addItem} className="addTOCART__btn">
                      {cartProducts.find((item) => item.id === id)
                        ? "Update Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </Col>

                <Col lg="12">
                  <h6 className="description mt-5">Description</h6>
                  <div className="description__content">
                    <p>{product?.desc}</p>
                  </div>
                </Col>

                <Col lg="12" className="mb-5 mt-4">
                  <h2 className="related__Product-title">You might also like</h2>
                </Col>

                {relatedProduct.map((item) => (
                  <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                    <ProductCard item={item} />
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </CommonSection>
      )}
    </Helmet>
  );
};

export default PizzaDetails;

                     
