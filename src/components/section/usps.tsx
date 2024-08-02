import Container from "../Container";
import Fadein from "../Fadein";

const Usps = () => {
  return (
    <Container className="text-4xl z-10 relative font-bold text-white space-y-12 py-36 max-w-[692px]">
      <Fadein>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </Fadein>
      <Fadein>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          facilis laudantium.
        </p>
      </Fadein>
      <Fadein>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </Fadein>
      <Fadein>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </Fadein>
    </Container>
  );
};

export default Usps;
