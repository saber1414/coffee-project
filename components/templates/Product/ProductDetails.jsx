import React from "react";
import styles from "@/styles/Product.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ product }) => {
  return (
    <>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom overlay-top">
        <div
          className={`${styles.product_main}   align-items-center mb-5 text-decoration-none justify-content-center`}
        >
          <img
            className={`${styles.product_img}  mb-3 mb-sm-0`}
            src={product.img}
            alt=""
          />
          <div style={{ width: "500px" }}>
            <h4 className="text-white mb-3">{product.title}</h4>
            <hr style={{ borderColor: "white" }} />
            <div className={styles.stars}>
              {Array(Math.trunc(product.score))
                .fill()
                .map(() => (
                  <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
                ))}
              {Array(5 - Math.trunc(product.score))
                .fill()
                .map(() => (
                  <FontAwesomeIcon icon={faStar} />
                ))}
            </div>
            <div className={styles.price_details}>
              {product.off ? (
                <>
                  <p>${product.price - (product.price * product.off) / 100}</p>
                  <p>${product.price}</p>
                </>
              ) : (
                <p>${product.price}</p>
              )}
            </div>
            <p style={{ color: "#fff" }} className="m-0 pr-5">
              {product.desc}
            </p>
            <button className={styles.shopping_btn}>
              buy
              <FontAwesomeIcon className="ml-2" icon={faShoppingBag} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
