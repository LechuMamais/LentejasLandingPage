import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Section1 from "./components/Section1";
import ProductsSection from "./components/ProductsSection";
import About from "./components/About";
import Opinions from "./components/Opinions";
import ParallaxImage from "./components/ParallaxImage";

function App() {
  return (
    <>
      <Header></Header>

      <main className="text-primary w-[100svw] bg-bgCustom flex-[1] font-Kalnia">
        <Carousel />
        <Section1 />
        <ProductsSection />
        <About />
        <ParallaxImage />
        <Opinions />
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
