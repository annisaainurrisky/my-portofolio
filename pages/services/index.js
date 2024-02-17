// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
} from "react-icons/si";

// data
const skillData = [
  { icon: <FaJs size={40} />, title: "JavaScipt" },
  { icon: <SiTypescript size={40} />, title: "TypeScipt" },
  { icon: <FaHtml5 size={40} />, title: "HTML" },
  { icon: <FaCss3 size={40} />, title: "CSS" },
  { icon: <FaReact size={40} />, title: "React JS" },
  { icon: <SiNextdotjs size={40} />, title: "Next JS" },
  { icon: <SiRedux size={40} />, title: "Redux" },
  { icon: <SiTailwindcss size={40} />, title: "TailwindCSS" },
  { icon: <SiBootstrap size={40} />, title: "Bootstrap" },
  { icon: <FaFigma size={40} />, title: "Figma" },
];

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// components
import Circles from "../../components/Circles";

const Services = () => {
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
          My <span className="text-accent">Skills</span>
        </motion.h1>
        {/* skill */}
        <div className="flex flex-wrap gap-5 container xl:p-0 items-center justify-center xl:items-start xl:justify-start">
          {skillData.map((item, itemIndex) => {
            return (
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                key={itemIndex}
                className="p-2 bg-white/10 hover:bg-accent hover:text-black shadow-md flex flex-col gap-5 items-center justify-center rounded-lg w-[70px] h-[70px] xl:w-[150px] xl:h-[150px]">
                <div className="">{item.icon}</div>
                <div className="hidden xl:flex">{item.title}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
