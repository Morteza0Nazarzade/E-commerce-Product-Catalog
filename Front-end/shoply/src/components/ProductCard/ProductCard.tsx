import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Product Name</h3>
    </div>
  );
}

export default ProductCard;
