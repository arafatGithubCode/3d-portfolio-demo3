/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../../assets";
import { fadeInUp } from "../../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_app,
}) => {
  return (
    <motion.div variants={fadeInUp} initial="hidden" animate="show">
      <Tilt className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] group border-b-2 border-blue-600">
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
        <div className="bg-pink-500 p-2 mt-3 rounded text-center hidden group-hover:block transition duration-300 ease-in-out cursor-pointer hover:bg-pink-600">
          See Details & Source Code
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
