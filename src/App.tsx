import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/section/hero";
import Usps from "./components/section/usps";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <div>
          <Container>3 col</Container>
        </div>
        <div>
          <Container>Carousel</Container>
        </div>
      </main>
    </>
  );
}

export default App;
