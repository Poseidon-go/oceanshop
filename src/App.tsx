import Container from "./components/Layout/Container";
import Header from "./components/Layout/Header";
import { FeaturedProducts } from "./components/Sections/FeaturedProducts";
import HeroSection from "./components/Sections/HeroSection";

function App() {
  return (
    <div id="app">
      <Header />
      <div className="bg-content">
        <Container>
          <HeroSection />

          <FeaturedProducts />
        </Container>
      </div>
    </div>
  );
}

export default App;
