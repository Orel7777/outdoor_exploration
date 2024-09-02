import Footerimg from "../../assets/footer.jpg"
import { motion } from "framer-motion"


const bgImg = {
    backgroundImage: `url(${Footerimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    
}
const Footer = () => {
  return (
    <motion.footer style={bgImg} className="mt-17 h-[500px]
    bg-brandDark relative flex justify-center items-end"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5, delay:0.3}}
    >
        <div style={{background:"radial-gradient(11,11,13,0.5)70% ,rgba(11,11,13,0.8)90%"}} className="absolute inset-0 bg-gradient-radial via-black/50 to-black z-10 from-transparent ">
        </div>
        <p className="relative z-20 mb-5">All right reserved </p>
    </motion.footer>
  )
}

export default Footer