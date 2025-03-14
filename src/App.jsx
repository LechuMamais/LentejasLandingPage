import { Box } from "@chakra-ui/react";
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

      <Box
        as="main"
        flex="1"
        bgColor={"bgCustom"}
        w="100vw"
        className="text-primary"
      >
        <Carousel />
        <Section1 />
        <ProductsSection />
        <About />
        <ParallaxImage />
        <Opinions />
      </Box>

      <Footer></Footer>
    </>
  );
}

export default App;
