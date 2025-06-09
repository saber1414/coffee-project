import Menu from "@/components/templates/Menu/Menu";
import Link from "next/link";
import React from "react";

const Index = ({menus}) => {
  return (
    <>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: "400px" }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Menu
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <Link className="text-white" href="/">
                Home
              </Link>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Menu</p>
          </div>
        </div>
      </div>
      <Menu menus={menus} />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:4000/pricing");
    if (!res.ok) throw new Error("notfound data server");
    const result = await res.json();

    return {
      props: { menus: result },
    };
  } catch (err) {
    console.error("notfound data server", err);
    return {
      props: { menus: [] },
    };
  }
};

export default Index;
