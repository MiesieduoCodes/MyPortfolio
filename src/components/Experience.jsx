import { experience } from "../../constants/Experience";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        transition={{}}
        variants={iconVariants(1.3)}
        initial="initial"
        animate="animate"
        className="my-10 text-center text-3xl md:text-5xl"
      >
        Exper<span className="text-neutral-500">iences</span>
      </motion.h2>
      <div className="">
        {experience.map((experience, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-10 md:mb-20">
            <motion.div
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 p-4 md:p-8"
            >
              <div className="flex items-center justify-center">
                <div className="w-full sm:w-3/4 lg:w-1/4">
                  <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={experience.image}
                      className="mb-4 md:mb-10 rounded"
                      alt={experience.title}
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 p-4 md:p-8"
            >
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 text-lg font-semibold md:text-xl">
                  {experience.title}
                </h6>
                <p className="mb-4 text-neutral-400 text-sm md:text-base">
                  {experience.description}
                </p>
                <div>
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 rounded bg-blue-900 px-2 py-1 text-xs md:text-sm font-medium inline-block"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
