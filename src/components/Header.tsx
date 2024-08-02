import Button from "./Button";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="items-center flex min-h-[--header-row-height]">
          <a
            href="/"
            className="-ml-6 flex items-center h-[--header-row-height] px-6 text-xl"
          >
            🍏<span className="sr-only">Back to Homepage</span>
          </a>
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky top-0 z-20 text-white">
        <Container className="flex items-center justify-between min-h-[--header-row-height]">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
