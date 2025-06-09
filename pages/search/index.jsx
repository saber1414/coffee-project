import Search from "@/components/templates/Search/Search";
import Link from "next/link";
import React from "react";

const Index = ({ menus }) => {
  return (
    <>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: "400px" }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Search
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <Link className="text-white" href="/">
                Home
              </Link>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">search</p>
          </div>
        </div>
      </div>
      <Search menus={menus} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const { query } = context;
    const res = await fetch("http://localhost:4000/pricing");
    if (!res.ok) throw new Error("notfound data fetching");
    const result = await res.json();

    const searchResult = result.filter(
      (item) =>
        item.type.toLowerCase().includes(query.q.toLowerCase()) ||
        item.title.toLowerCase().includes(query.q.toLowerCase())
    );

    return {
      props: { menus: searchResult },
    };
  } catch (err) {
    console.log("notfound data fetching", err);
    return { props: { menus: [] } };
  }
};

export default Index;
