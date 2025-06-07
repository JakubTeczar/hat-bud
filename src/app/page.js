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
      <Hero></Hero>
      <Brands></Brands>
      <Fature></Fature>
      <Faq></Faq>
      <Gallery images={imagesArray} />
      <Testimonials></Testimonials>
      <div     id="lokalizacja">
      <VideoSection></VideoSection>
      </div>

      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}