// components
import WorkSlider from "../../components/WorkSlider";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div>
      <Circles />
      <div className="h-full text-center xl:text-left container pt-40 mx-auto">
        <motion.h1
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2">
          My <span className="text-accent">Projects</span>
        </motion.h1>
        {/* projects */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden">
          <WorkSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
