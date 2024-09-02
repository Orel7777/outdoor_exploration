import { FaPlay } from "react-icons/fa";
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <>
      <section className="min-h-[900px] flex justify-center items-center">
        <div style={{background:"radial-gradient(11,11,13,0.5)70% ,rgba(11,11,13,0.8)90%"}} className="absolute inset-0 bg-gradient-radial via-black/50 to-black z-10 from-transparent ">
        </div>
        <motion.div initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1.5, delay:0.5}}
          className="container relative z-20
        text-center space-y-8">
          <h1 className="text-5xl md:text-8xl font-bold font-merriweather">The Great outdoors</h1>
          <p>Embrace curiosity, and let it guide you on endless adventures</p>
          <div
            className="inline-flex justify-center items-center border-2 h-14
          w-14 md::!mt-20 rounded-full">
            <FaPlay />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
