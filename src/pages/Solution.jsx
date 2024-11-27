import React from "react";
import Stats from "../components/Stats";
import FlippPlatform from "../components/FlipPlatform";
import CTAComponent from "../components/CTAComponent";
import MapImage from "../images/map.png";
import SolutionImg from "../images/solution.png";
import CTACard from "../components/CTACard";
import Partners from "../components/Partners";
const Solution = () => {
  return (
    <div>
      <Stats />
      <FlippPlatform />
      <CTAComponent
        subheading="Amplify Your Reach"
        title="With unparalleled presence, Flipp puts you in 4 out of 5 households"
        description="Reach over 100 million high intent, head of household shoppers across the entire shopping journey. Diversify your media strategy to connect with loyal, contested and new customers."
        image={MapImage}
      />
      <Partners />
      <CTACard
        title="Grow your business with Flipp"
        subtitle="Get Started"
        buttonText="Become a Partner"
        imageSrc={SolutionImg}
      />
    </div>
  );
};

export default Solution;
