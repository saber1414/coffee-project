import ProductDetails from "@/components/templates/Product/ProductDetails";
import Link from "next/link";
import React from "react";

const Product = ({ product }) => {
  return (
    <>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5">
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            product
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <Link className="text-white" href="/">
                Home
              </Link>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">product</p>
          </div>
        </div>
      </div>
      <ProductDetails product={product} />
    </>
  );
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch("http://localhost:4000/pricing");
    if (!res.ok) throw new Error("data notfound");
    const result = await res.json();
    const paths = result.map((product) => ({
      params: { id: String(product.id) }
    }))

    return {
      paths,
      fallback: true
    }

  } catch (err) {
    console.log("data notfound");
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  try {
    const id = context.params.id;
    const res = await fetch(`http://localhost:4000/pricing/${id}`);
    if (!res.ok) throw new Error("data notfound");
    const result = await res.json();

    return {
      props: { product: result },
      revalidate: 60 * 60 * 12
    };
  } catch (err) {
    console.error("data notfound", err);
    return { props: { product: [] } };
  }
};

export default Product;
