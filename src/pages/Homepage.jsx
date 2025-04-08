// Created by Abhishek Choudhary
import React from "react";
import HeroSection from "../components/HeroSection";
import DynamicSection from "../components/DynamicSection";
import FlippPlatform from "../components/FlipPlatform";
import Research from "../components/Research";
import FAQ from "../components/FAQ";
import CTACard from "../components/CTACard";
import CTAImage from "../images/CTAHomepage.jpg";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <DynamicSection />
      <FlippPlatform />
      <Research />
      <FAQ />
      <CTACard
        title="Grow your business with Flipp"
        subtitle="Get Started"
        buttonText="Become a Partner"
        imageSrc={CTAImage}
      />
    </div>
  );
};

export default Homepage;
