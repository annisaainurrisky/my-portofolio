import React, { useState } from "react";

//  data
const aboutData = [
  {
    title: "achievements",
    info: [
      {
        title: "Gold Medal in Global Youth Invention and Innovation (GYIIF)",
        stage: "2023",
        link: "https://drive.google.com/file/d/1Uh0KIofNwCaRUpbAThXBSMp_iFe5iZI6/view?usp=sharing",
      },
      {
        title:
          "Bronze Medal in International Young Moslem Inventor Award (IYMIA)",
        stage: "2023",
        link: "https://drive.google.com/file/d/1_YuwQozLvlObsHKaUR5lWMhxAseBQlgS/view?usp=sharing",
      },
      {
        title:
          "Silver Medal in Indonesia International Applied Science Project Olympiad (i2ASPO)",
        stage: "2022",
        link: "https://drive.google.com/file/d/1go8MhI_Fa-B8bLdkfgzt_WlPNxdwR60z/view?usp=sharing",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "JavaScript Intermediate - Sololearn",
        stage: "July 2023",
        link: "https://www.sololearn.com/certificates/CC-KAYLMT78",
      },
      {
        title: "Web Development - Sololearn",
        stage: "June 2023",
        link: "https://www.sololearn.com/certificates/CC-DG1XGDLS",
      },
      {
        title: "Basic Programming with JavaScript - Dicoding",
        stage: "April 2023",
        link: "https://www.dicoding.com/certificates/81P23292JXOY",
      },
    ],
  },
  {
    title: "languages",
    info: [
      {
        title: "Bahasa Indonesia",
        stage: "Native",
      },
      {
        title: "English",
        stage: "Professional Working Proficiency",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log("index", index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[200px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2">
            About <span className="text-accent">me</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-6 px-2 xl:px-0 text-sm md:text-lg">
            As a Frontend Engineer who has completed the bootcamp at Alterra
            Academy, I was proficient in HTML, CSS, JavaScript, Typescript, and
            React. Excels in responsive design, crafting aesthetic layouts, and
            seamless API integration. Meticulously balances design and
            functionality for optimal user experiences.
          </motion.p>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[50%]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 text-sm md:text-lg">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:bg-accent after:w-[100%] after:h-[3px] after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[3px] after:bg-accent after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col py-2 gap-y-2 xl:gap-y-4 items-center xl:items-start rounded-lg text-sm md:text-lg">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col max-w-max gap-x-2 xl:items-start text-white/60 hover:text-accent">
                  {/* title */}
                  <a
                    href={item.link}
                    className="font-light mb-0 cursor-pointer">
                    {item.title}
                  </a>
                  <div className="italic">{item.stage}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
