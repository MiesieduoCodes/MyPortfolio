import { motion } from "framer-motion"; 
import  {useEffect} from "react";  
import { TypeAnimation } from 'react-type-animation';
import { preLoaderAnim } from "../animations";

const Preloader = () => {
useEffect (() =>{
    preLoaderAnim() },[]);
  return (

<div className=" w-full h-full justify-center items-center text-neutral-300 bottom-0 left-0 right-0 flex z-50 fixed bg-[#000000 selection:text-cyan-900] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

    <div className="flex items-center justify-between font-bold text-3xl font-mono text-white">

        <motion.h1 variants={(0)} initial={{ x: 100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{duration: 1, delay: 0.2}} className="pb-16 text-6xl font-thin tracking-tight sm:justify-center sm:items-center flex lg:mt-16 :lg:text-8xl">

            <TypeAnimation sequence={[ "Developer . Photographer . Drummer .", 4000, ]} wrapper="span" speed={20} repeat={Infinity}/>
                
        </motion.h1>
        
    </div>
</div>

)}
export default Preloader