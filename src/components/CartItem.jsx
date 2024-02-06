import React from "react";
import styles from "../component_css/CartItem.module.css";
import { useCartContext } from "../context/CartProvider";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function CartItem({ id, title, thumbnail, price, quantity }) {
  const { removeData, increaseQaunt, decreaseQaunt } = useCartContext();
  return (
    <div className={styles.CartItem}>
      <img className={styles.img} src={thumbnail} alt={title} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>${price * quantity}</p>
      <span className={styles.quantityContainer}>
        <button
          onClick={() => {
            decreaseQaunt(id);
          }}
        >
          <FaMinus />
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => {
            increaseQaunt(id);
          }}
        >
          <FaPlus />
        </button>
      </span>
      <button
        className={styles.delBtn}
        onClick={() => {
          removeData(id);
        }}
      >
        <ImCross />
      </button>
    </div>
  );
}

export default CartItem;
