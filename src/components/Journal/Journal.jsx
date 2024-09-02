import img1 from "../../assets/5.jpg";
import img2 from "../../assets/6.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const JournalData = [
  {
    id: 1,
    title: "An Unforgettable Experience",
    about: "If you only have one day to visit Yosemite National Park, here's how to make the most of it.",
    date: "May 15, 2022",
    url: "#",
    image: img1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Desert Serenade",
    about: "From the bustling city to the endless dunes, your journey unfolds like a timeless story written in the desert.",
    date: "April 11, 2021",
    url: "#",
    image: img2,
    delay: 0.4,
  },
];

export const Journal = () => {
  return (
    <>
      <section className="container mt-40" id="journal">
        {/* header section */}
        <motion.div
          className="text-center md:max-w-[650px] mx-auto space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <p className="text-3xl font-semibold">The Journal</p>
          <p>
          Explore our top stories about public lands and discover how you can play a role in preserving your outdoor adventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-20">
          {/* cards section */}
          {JournalData.map((data) => (
            <motion.div variants={SlideUp(data.delay)} 
            initial="hidden" 
            animate="visible"
             key={data.id}>
              <div className="overflow-hidden">
                <img
                  src={data.image}
                  alt="img"
                  className="w-full h-[350px] object-cover"
                />
              </div>
              {/* Card text section */}
              <div className="space-y-1 py-6 text-center px-12">
                <p className="uppercase">{data.date}</p>
                <p className="text-xl font-semibold font-merriweather">
                  {data.title}
                </p>
                <p className="!mt-8">{data.about}</p>
              </div>
            </motion.div>
          ))}
        </div>
      
      </section>
    </>
  );
};
