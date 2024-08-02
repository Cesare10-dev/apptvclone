import { useScroll, useTransform, motion } from "framer-motion";
import Button from "../Button";
import Container from "../Container";
import { useRef } from "react";

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="relative bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute h-[200vh] -top-[--header-height] w-full left-0"
      >
        <img
          className="sticky top-0 object-cover h-screen w-screen"
          src="/posters/img1.jpg"
          alt=""
        />
      </motion.div>
      <Container className="z-10 pb-7 relative h-[--hero-height]">
        <motion.div
          className="flex flex-col justify-end items-start h-full"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
        >
          <h1 className="font-bold text-5xl mb-10">
            All App Originals <br />
            Only on AppTv+
          </h1>
          <Button className="mb-16" size="large">
            Large
          </Button>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
