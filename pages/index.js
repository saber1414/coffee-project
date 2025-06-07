import About from "@/components/templates/Index/About";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import Menu from "@/components/templates/Index/Menu";
import React from "react";
import Reservation from "@/components/templates/Index/Reservation";
import Testimonial from "@/components/templates/Index/Testimonial";

const Index = () => {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Offer />
      <Menu />
      <Reservation />
      <Testimonial />
    </>
  );
};

export default Index;
