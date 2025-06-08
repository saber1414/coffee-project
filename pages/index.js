import About from "@/components/templates/Index/About";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import Menu from "@/components/templates/Index/Menu";
import React from "react";
import Reservation from "@/components/templates/Index/Reservation";
import Testimonial from "@/components/templates/Index/Testimonial";

const Index = ({ services, menus }) => {
  return (
    <>
      <Slider />
      <About />
      <Services services={services} />
      <Offer />
      <Menu menus={menus} />
      <Reservation />
      <Testimonial />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/services");
  const data = await res.json();

  const menuRes = await fetch("http://localhost:4000/pricing");
  const result = await menuRes.json()

  return {
    props: { services: data, menus: result },
    revalidate: 60 * 60 * 12
  }
}

export default Index;
