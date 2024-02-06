import styles from "../component_css/Product.module.css";
import { useCartContext } from "../context/CartProvider";
import { toast } from "react-toastify";

function Product({ id, title, price, thumbnail }) {
  const { cartData, addData } = useCartContext();

  function handleClick() {
    console.log(cartData);
    for (let data of cartData) {
      if (data.id == id) {
        toast.error("Item Already Added", {
          duration: 3000,
          position: "bottom-right",
        });
        return;
      }
    }
    const newObj = {
      id: id,
      title: title,
      thumbnail: thumbnail,
      price: price,
      quantity: 1,
    };
    addData(newObj);
    toast.success("Item Added", {
      duration: 3000,
      position: "bottom-right",
    });
  }

  return (
    <div className={styles.product}>
      <img src={thumbnail} alt={title} />
      <div className={styles.details}>
        <p className={styles.price}>${price}</p>
        <p className={styles.title}>{title}</p>
        <button className={styles.addBtn} onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
