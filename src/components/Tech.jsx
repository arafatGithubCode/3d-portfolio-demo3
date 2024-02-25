import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      <p className="text-sm sm:text-md text-slate-300 mb-20">
        Here are some of my skills on which I have been working on for the past
        2 years.
      </p>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-5">
        {technologies.map((technology, index) => (
          <motion.div
            key={index}
            className="border p-7 my-5 rounded-xl border-teal-600"
          >
            <h3 className="text-center text-2xl text-slate-400">
              {technology.title}
            </h3>
            <div className="grid grid-cols-4 xs:grid-cols-5">
              {technology.frontend &&
                technology.frontend.map((item, index) => (
                  <div key={`frontend-${index}`}>
                    <BallCanvas
                      icon={item.icon}
                      name={item.name}
                      index={index}
                    />
                  </div>
                ))}
            </div>
            <div className="grid grid-cols-4 px-2 py-5 rounded-xl gap-3">
              {technology.backend &&
                technology.backend.map((item, index) => (
                  <div key={`frontend-${index}`}>
                    <BallCanvas
                      icon={item.icon}
                      name={item.name}
                      index={index}
                    />
                  </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-5">
              {technology.others &&
                technology.others.map((item, index) => (
                  <motion.div
                    variants={fadeIn("right", "tween", 0.5 * index, 0.85)}
                    className="flex items-center"
                    key={`frontend-${index}`}
                  >
                    <img
                      className="rounded-full w-[3rem]"
                      src={item.icon}
                      alt={item.name}
                    />
                    <div className="mt-1 ml-1 bg-gradient-to-r from-sky-500 via-pink-500 to-green-500 inline-block text-transparent bg-clip-text text-lg font-bold border-b border-gray-500 relative whitespace-pre-line">
                      {item.name}
                      <motion.div
                        animate={{
                          x: [0, 64, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                        className="w-10 h-5 bg-slate-300/10 absolute top-0 rounded-xl"
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skill");
