import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
config.autoAddCss = false;

const Services = ({services}) => {
  return (
    <>
      <div class="container-fluid pt-5">
        <div class="container">
          <div class="section-title">
            <h4
              class="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Our Services
            </h4>
            <h1 class="display-4">Fresh & Organic Beans</h1>
          </div>
          <div class="row">
            {
              services.map((service) => (
                <ServiceItem key={service} {...service} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
