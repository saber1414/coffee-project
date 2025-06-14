import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <>
      <div class="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{minHeight: "400px"}}
        >
          <h1 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Testimonial
          </h1>
          <div class="d-inline-flex mb-lg-5">
            <p class="m-0 text-white">
              <Link class="text-white" href="">
                Home
              </Link>
            </p>
            <p class="m-0 text-white px-2">/</p>
            <p class="m-0 text-white">Testimonial</p>
          </div>
        </div>
      </div>
          <div class="container-fluid py-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Testimonial</h4>
                <h1 class="display-4">Our Clients Say</h1>
            </div>
            <div class="owl-carousel testimonial-carousel">
                <div class="testimonial-item">
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid" src="/image/testimonial-1.jpg" alt="" />
                        <div class="ml-3">
                            <h4>Client Name</h4>
                            <i>Profession</i>
                        </div>
                    </div>
                    <p class="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                </div>
                <div class="testimonial-item">
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid" src="/images/testimonial-2.jpg" alt="" />
                        <div class="ml-3">
                            <h4>Client Name</h4>
                            <i>Profession</i>
                        </div>
                    </div>
                    <p class="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                </div>
                <div class="testimonial-item">
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid" src="/images/testimonial-3.jpg" alt="" />
                        <div class="ml-3">
                            <h4>Client Name</h4>
                            <i>Profession</i>
                        </div>
                    </div>
                    <p class="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                </div>
                <div class="testimonial-item">
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid" src="/images/testimonial-4.jpg" alt="" />
                        <div class="ml-3">
                            <h4>Client Name</h4>
                            <i>Profession</i>
                        </div>
                    </div>
                    <p class="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Index;
