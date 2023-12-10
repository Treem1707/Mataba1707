import FacultySection from "@components/page-section/FacultySection";
import MissionVision from "@components/page-section/MissionVision";
import HeroSection from "@components/page-section/HeroSection";
import GeneralLayout from "@layouts/GeneralLayout";
import { ReactElement, useState } from "react";
import NewsSection from "@components/page-section/NewsSection";
import ContactSection from "@components/page-section/ContactSection";

type Props = {};

const Home = (props: Props): ReactElement => {
  return (
    <GeneralLayout>
      <HeroSection />
      <MissionVision />
      <FacultySection />
      <NewsSection />
      <ContactSection />
    </GeneralLayout>
  );
};

export default Home;
