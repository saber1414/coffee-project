import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: "400px" }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Services
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <Link className="text-white" href="/">
                Home
              </Link>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Services</p>
          </div>
        </div>
      </div>
          <div class="container-fluid pt-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Our Services</h4>
                <h1 class="display-4">Fresh & Organic Beans</h1>
            </div>
            <div class="row">
                <div class="col-lg-6 mb-5">
                    <div class="row align-items-center">
                        <div class="col-sm-5">
                            <img class="img-fluid mb-3 mb-sm-0" src="/images/service-1.jpg" alt="" />
                        </div>
                        <div class="col-sm-7">
                            <h4><i class="fa fa-truck service-icon"></i>Fastest Door Delivery</h4>
                            <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-5">
                    <div class="row align-items-center">
                        <div class="col-sm-5">
                            <img class="img-fluid mb-3 mb-sm-0" src="/images/service-2.jpg" alt="" />
                        </div>
                        <div class="col-sm-7">
                            <h4><i class="fa fa-coffee service-icon"></i>Fresh Coffee Beans</h4>
                            <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-5">
                    <div class="row align-items-center">
                        <div class="col-sm-5">
                            <img class="img-fluid mb-3 mb-sm-0" src="/images/service-3.jpg" alt="" />
                        </div>
                        <div class="col-sm-7">
                            <h4><i class="fa fa-award service-icon"></i>Best Quality Coffee</h4>
                            <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-5">
                    <div class="row align-items-center">
                        <div class="col-sm-5">
                            <img class="img-fluid mb-3 mb-sm-0" src="/images/service-4.jpg" alt="" />
                        </div>
                        <div class="col-sm-7">
                            <h4><i class="fa fa-table service-icon"></i>Online Table Booking</h4>
                            <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                invidunt, dolore tempor diam ipsum takima erat tempor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Index;
