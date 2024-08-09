import aboutImage from "../Assets/Icons/GOOOFYY2.png";
import { motion } from "framer-motion";  

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate:{ y: [10, -10],
  transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse"
  }
  },
})

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
                        transition={{}}
                        variants={iconVariants(1.3)}
                        initial="initial"
                        animate="animate"
        className="my-20 text-center text-5xl">About  
            <span className="text-neutral-500"> Me</span></motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity: 1, x: 1}}
                initial={{ opacity:0, x: 100}}
                transition={{duration: 0.5,}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" />
                </div>
                </motion.div>
                <motion.div
                   whileInView={{opacity: 1, x: 0}}
                   initial={{ opacity:0, x: -100}}
                   transition={{duration: 0.5,}}
                className="w-full lg:w-1/2">
                <div className="flex justify-center mt-56 items-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">I am a versatile professional excelling as a Fullstack 
                    Web Developer, Nature Photographer, and Drummer. Proficient in both front-end and back-end
                    technologies, I manage web projects from concept to deployment using tools like HTML, CSS,
                    JavaScript, Node.js, and Python. As a Nature Photographer, I travel to document wildlife 
                    and landscapes, producing high-quality images that promote environmental conservation. 
                    As a Drummer, I provide rhythm in various musical genres, enhancing live performances and
                    recording sessions with my exceptional timing and coordination.</p>
                    </div>
                    </motion.div>
            </div>
    </div>
  )
}

export default About