import { motion } from "motion/react";
import React from "react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 80] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team2}
            className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 100 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#3c33ff", "#fff033"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            News!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
