import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = (props) => {
  const { id, title, price, discount_price, image } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image,
        price,
        discount_price,
      })
    );
    toast.success("Item added to cart!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
  };

  return (
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        {image && <img className="product__img w-50" src={`http://127.0.0.1:8000/product/${image}`} alt="Product" />}
        <h5>
          <Link to={`/allfoods/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <span className="product__price mb-2">₱{discount_price ? discount_price : price}.00</span>
        <button className="addTOCART__btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;