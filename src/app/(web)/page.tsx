import CountUpNumber from "@/components/CountUpNumber/CountUpNumber";
import FeaturedSpa from "@/components/FeaturedSpa/FeaturedSpa";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import LearnMore from "@/components/LearnMore/LearnMore";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import OurTeam from "@/components/OurTeam/OurTeam";
import PageSearch from '@/components/PageSearch/PageSearch';
import SpacialSpa from "@/components/SpacialSpa/SpacialSpa";
import Testimonial from "@/components/Testimonial/Testimonial";
import { getFeaturedSpa } from "@/libs/apis";

const Home = async () => {
  const featuredSpa = await getFeaturedSpa();


  return (
    <>
      <HeroSection />
      {/** 
      <CountUpNumber endValue={500} duration={33} />
      */}
      <PageSearch />
      <SpacialSpa />
      <FeaturedSpa featuredSpa={featuredSpa} />
      <LearnMore />
      <Gallery />
      <Testimonial />
      <NewsLetter />
      <OurTeam />
    </>
  );

};
export default Home;