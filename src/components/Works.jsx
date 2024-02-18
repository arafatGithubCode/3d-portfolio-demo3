/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { projects } from "../constants/index";
import { github } from "../assets";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_app,
  index,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            className="w-full h-full rounded-2xl"
            src={image}
            alt="project_image"
          />
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-105"
            >
              <img
                className="w-1/2 h-1/2 object-contain"
                src={github}
                alt="source_code"
              />
            </div>
          </div>
          <div className="absolute top-0 flex justify-end m-3">
            <div
              onClick={() => window.open(live_app, "_blank")}
              className="bg-green-500 p-1 w-32 rounded-xl flex justify-center items-center cursor-pointer hover:scale-105 text-slate-100 hover:bg-green-600 font-medium"
            >
              View Live App
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <p
              className={`text-[14px] ${tag.color}`}
              key={`${tag.name}-${index}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>My Works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described{" "}
          <span className="text-green-500">with links to code</span>{" "}
          repositories and <span className="text-red-500">live demos</span> in
          it. It reflects my ability to solve complex problems, work with
          different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-14 flex flex-wrap gap-6 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
