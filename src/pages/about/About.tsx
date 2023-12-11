import AboutIntroSection from "@components/page-section/about-page/AboutIntroSection";
import AboutHeroSection from "@components/page-section/about-page/AboutHeroSection";
import FaqsSection from "@components/page-section/about-page/FaqsSection";
import AboutWhy from "@components/page-section/about-page/AboutWhy";
import AboutDivider from "@components/about-divider/AboutDivider";
import GeneralLayout from "@layouts/GeneralLayout";
import SubscribeNow from "@components/page-section/about-page/SubscribeNow";

type Props = {};

const About = (props: Props) => {
  return (
    <GeneralLayout>
      <AboutHeroSection heading="About Us" crum="About" />
      <AboutIntroSection />
      <AboutDivider />
      <AboutWhy />
      <AboutDivider />
      <FaqsSection />
      <AboutDivider />
      <SubscribeNow />
      <AboutDivider />
    </GeneralLayout>
  );
};

export default About;
