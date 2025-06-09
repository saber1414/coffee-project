import MenuItem from "@/components/modules/MenuItem/MenuItem";
import React from "react";

const Search = ({ menus }) => {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5">Hot Coffee</h1>
              {menus.length ? (
                menus
                  .filter((item) => item.type === "hot")
                  .map((menu) => <MenuItem key={menu.id} {...menu} />)
              ) : (
                <p>no products found</p>
              )}
            </div>
            <div className="col-lg-6">
              <h1 className="mb-5">Cold Coffee</h1>
              {menus.length ? (
                menus
                  .filter((item) => item.type === "cold")
                  .map((menu) => <MenuItem key={menu.id} {...menu} />)
              ) : (
                <p>no products found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
