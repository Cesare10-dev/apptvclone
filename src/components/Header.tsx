import Button from "./Button";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="items-center flex min-h-11">
          <a href="/" className="-ml-6 flex items-center h-11 px-6">
            🍏<span className="sr-only">Back to Homepage</span>
          </a>
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky top-0 text-white">
        <Container className="flex items-center justify-between min-h-11">
          <p>Apple TV+</p>
          <Button size="small">Test</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
