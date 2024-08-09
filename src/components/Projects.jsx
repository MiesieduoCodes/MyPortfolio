import {motion} from "framer-motion";

import {MyProjects} from "../../constants/index";
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
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <motion.h2 
                transition={{}}
                variants={iconVariants(1.3)}
                initial="initial"
                animate="animate"
    className="my-20 text-center text-5xl">Pro  
        <span className="text-neutral-500">jects</span></motion.h2>
        <div className=" ">
            {MyProjects.map((project, index) => (
                <div key={index} className="flex flex-wrap lg:justify-center">

                <motion.div
                whileInView={{opacity: 1, x: 1}}
                initial={{ opacity:0, x: 100}}
                transition={{duration: 0.8}}
                className="w-full lg:w-1/2 lg:p-8">

            <div className="flex items-center justify-center">    
                <div  className="w-full lg:w-1/4">
                    <a href={project.link} target="_blank">
                    <img src={project.image} className="mb-10 rounded" width={200} height={150}  alt={project.title} />
                    </a>
                </div>
            </div>
                </motion.div>

                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{ opacity:0, x: -100}}
                    transition={{duration: 0.8}}
                    className="w-full lg:w-1/2 lg:p-8">

                    <div className="w-full max-w-xl lg:w-3/4"> <br />
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech, index) =>(
                        <span key={index} className="mr-2 rounded bg-blue-900 px-2 py-1 text-sm font-medium">{tech}</span>
                    ))}
                    </div>
                </motion.div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Projects