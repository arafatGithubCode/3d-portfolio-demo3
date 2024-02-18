import { motion } from "framer-motion";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className="flex xl:flex-row xl:mt-12 flex-col-reverse gap-10 overflow-hidden max-w-3xl mx-auto">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4">Your Name</span>
            <input
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              type="text"
              name="name"
              placeholder="What's your good name?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4">Your Email</span>
            <input
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              type="email"
              name="email"
              placeholder="What's your email address?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4">Your Message</span>
            <textarea
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
              name="message"
              rows={7}
              placeholder="What you want to say?"
            />
          </label>
          <button className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium shadow-lg shadow-primary">
            send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
