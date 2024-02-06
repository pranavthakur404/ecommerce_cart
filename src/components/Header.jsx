import styles from "../component_css/Header.module.css";
import Container from "./Container";
import logo from "../assets/logo.jpg";
import Modal from "./Modal";
import { useState } from "react";
import { useCartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import { ImCart } from "react-icons/im";

function Header() {
  const [isModal, setIsModal] = useState(false);
  const { cartData } = useCartContext();

  const totalAmount = cartData.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalCartItem = cartData.reduce((acc, data) => {
    return acc + data.quantity;
  }, 0);

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.container}>
          <span className={styles.logoContainer}>
            <img src={logo} alt="" className={styles.logoImg} />
            <h2 className={styles.logoText}>E-SHOP</h2>
          </span>
          <button
            className={styles.cartBtn}
            onClick={() => {
              setIsModal(true);
            }}
          >
            <span className={styles.cartIcon}>
              <ImCart />

              {totalAmount > 0 && (
                <span className={styles.cartNumber}>{totalCartItem}</span>
              )}
            </span>
            Cart
          </button>
        </div>
      </Container>
      {isModal && (
        <Modal setIsModal={setIsModal}>
          {cartData.length == 0 ? (
            <h2>No Item Found !!</h2>
          ) : (
            cartData.map((data) => {
              return <CartItem {...data}></CartItem>;
            })
          )}
          <br />
          {cartData.length > 0 && <h3>Total : ${totalAmount}</h3>}
        </Modal>
      )}
    </div>
  );
}

export default Header;
