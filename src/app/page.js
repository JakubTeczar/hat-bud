import Hero from "./home/Hero";
import Fature from "./home/Feature";
import Navigation from "./home/Navigation";
import Contact from "./home/Contact";
import Testimonials from "./home/Testimonials";
import Brands from "./home/Brands";
import Faq from "./home/Faq";
import Footer from "./home/Footer";
import Gallery from "./home/Gallery";
import VideoSection from './home/Film';
import ProjectInfo from "./home/ProjectInfo";
import ScrollToTopButton from "./home/ScrollToTopButton";
import Steps from "./home/Steps";
import Options from "./home/Options";

const imagesArray = [
  './imgs/W2_Photo - 1.png',
  './imgs/W2_Photo - 2.png',
  './imgs/W2_Photo - 3.png',
  './imgs/W2_Photo - 4.png',
  './imgs/W2_Photo - 7.png',
  './imgs/W2_Photo - 8.png',
];


export default function Home() {
  return (
    <>
      <Navigation></Navigation>
      <ScrollToTopButton></ScrollToTopButton>
      <Hero></Hero>
      <Brands></Brands>
      <ProjectInfo></ProjectInfo>
      {/* <Faq></Faq> */}
      <Options></Options>
      <div     id="lokalizacja">
      <VideoSection></VideoSection>
      </div>
      <Fature></Fature>
      <Gallery images={imagesArray} />
      <Steps></Steps>
      <Testimonials></Testimonials>

      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}