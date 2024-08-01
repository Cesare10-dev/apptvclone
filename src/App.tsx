import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[300vh]">
          <Container>Hero</Container>
        </div>
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
