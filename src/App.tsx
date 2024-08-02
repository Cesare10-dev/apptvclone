import Header from "./components/Header";
import Hero from "./components/section/hero";
import Usps from "./components/section/usps";
import VideoCarousel from "./components/section/video-carousel";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>

        <VideoCarousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
}

export default App;
