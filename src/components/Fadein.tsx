import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Fadein = ({ children }: Props) => {
  return <motion.div>{children}</motion.div>;
};

export default Fadein;
