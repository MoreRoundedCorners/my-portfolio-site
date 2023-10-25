import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const { ref: jumboRef, inView: jumboVisible, entry3 } = useInView();
  const { ref: jumboRef2, inView: jumboVisible2, entry4 } = useInView();

  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <motion.div>
      <section
        id="jumbotron"
        className="hero bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-Newsreader min-h-screen flex flex-col justify-center items-center"
      >
        <div className="mx-auto flex justify-center flex-col md:flex-row {{ sm:p-0 md:p-40 }}">
          {/* <img
            src="https://portfolio-data-bucket17.s3.us-west-1.amazonaws.com/avi.png"
            className=" {{ sm:none md:h-96 }}"
          /> */}

          <div className="flex flex-col md:pl-10 pt-5 md:pt-20">
            <p className="text-3xl  font-medium text-[#222] text-center sm:text-left">
              Hi, my name is
            </p>
            <p className="text-6xl font-Newsreader font-semibold my-2  text-center sm:text-left">
              Nicholas Ramirez
            </p>
            <div className="text-5xl flex flex-row my-">
              <Typewriter
                words={["Securing, Building, and Maintaining. "]}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={33}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
                style={{ marginLeft: "10px" }} // Add space to the right of the first Typewriter
              />
            </div>

            <p className="text-lg mt-4 font-Newsreader text-gray-700 max-w-4xl intro text-center sm:text-left">
              Dedicated to creating, improving, and enhancing digital products,
              while enjoying every step of the way.
            </p>
            <hr
              ref={jumboRef}
              className={`border-t border-gray-500 my-2 ${
                jumboVisible ? "text-delay animate-slideright delay-500" : ""
              }`}
            ></hr>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
