import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/section/hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div>
          <Container>usps</Container>
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
