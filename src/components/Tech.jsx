import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvasBackend, BallCanvasFrontend } from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      <p className="text-sm sm:text-md text-slate-300">
        Here are some of my skills on which I have been working on for the past
        2 years.
      </p>
      <div className="max-w-5xl mx-auto">
        {technologies.map((technology, index) => (
          <div key={index}>
            <h3 className="text-center py-7 text-2xl text-slate-400 mt-5">
              {technology.title}
            </h3>
            <div>
              <>
                {technology.title === "Frontend" && (
                  <div className="grid grid-cols-2 border px-2 py-5 border-teal-500 rounded-xl gap-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
                    {technology.skills.map((item, index) => (
                      <div key={`frontend-${index}`}>
                        <BallCanvasFrontend icon={item.icon} name={item.name} />
                      </div>
                    ))}
                  </div>
                )}
              </>
              <>
                {technology.title === "Backend" && (
                  <div className="grid grid-cols-2 border px-2 py-5 border-teal-500 rounded-xl gap-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
                    {technology.skills.map((item, index) => (
                      <div key={`backend-${index}`}>
                        <BallCanvasBackend icon={item.icon} name={item.name} />
                      </div>
                    ))}
                  </div>
                )}
              </>
              <>
                {technology.title === "Others" && (
                  <div className="grid grid-cols-2 border px-2 py-5 border-teal-500 rounded-xl gap-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
                    {technology.skills.map((item, index) => (
                      <div key={`others-${index}`}>
                        <img
                          className="rounded-full w-[4rem]"
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
                      </div>
                    ))}
                  </div>
                )}
              </>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
