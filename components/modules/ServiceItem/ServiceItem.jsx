import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

const ServiceItem = ({ title, description, image, icon }) => {
  return (
    <>
      <div className="col-lg-6 mb-5">
        <div className="row align-items-center">
          <div className="col-sm-5">
            <img className="img-fluid mb-3 mb-sm-0" src={image} alt="" />
          </div>
          <div className="col-sm-7">
            <h4>
              <div className="service-icon">
                <FontAwesomeIcon icon={Icons[icon]} />
              </div>
              {title}
            </h4>
            <p className="m-0">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
