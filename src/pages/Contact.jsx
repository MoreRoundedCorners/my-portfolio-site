import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="hero bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-Newsreader min-h-screen flex flex-col justify-center items-center animate-slideleft">
      <p className="font-black text-4xl m-4">Contact Me</p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/MoreRoundedCorners"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-2xl contact"
        >
          <img
            src="https://portfolio-data-bucket17.s3.us-west-1.amazonaws.com/githubsource.png"
            className="object-cover h-16"
          />
        </a>
        {/* <a
            href="https://www.aedin.com/in/your-aedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-2xl"
          >
            <img
              src="https://portfolio-data-bucket17.s3.us-west-1.amazonaws.com/lin.png"
              className="h-20 object-cover"
            />
          </a> */}
        <a
          href="mailto:nick2u99@gmail.com"
          className="text-blue-500 hover:text-blue-700 text-2xl"
        >
          <img
            src="https://portfolio-data-bucket17.s3.us-west-1.amazonaws.com/mail.png"
            className="h-16 object-cover"
          />
        </a>
        <a
          href="https://portfolio-data-bucket17.s3.us-west-1.amazonaws.com/FINAL_RESUME_NICHOLAS_RAMIREZ.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-2xl"
        >
          <FontAwesomeIcon
            icon={faFile}
            style={{
              color: "#000000",
              height: "40px",
              paddingTop: "10px",
              paddingLeft: "20px",
              objectFit: "contain",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
