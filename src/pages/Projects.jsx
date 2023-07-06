import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { setProjectInView } from "../redux/reducer/viewReducer";
import { useSelector, useDispatch } from "react-redux";

const Projects = () => {
  const {
    ref: projectSection,
    inView: projectSectionVisible,
    entry,
  } = useInView({
    threshold: 1,
  });

  const { ref: projectView, inView: projectVisible, entry4 } = useInView();
  const { ref: projectView2, inView: projectVisible2, entry5 } = useInView();
  const { ref: projectView3, inView: projectVisible3, entry6 } = useInView();

  const projectInView = useSelector((state) => state.projectInView);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setProjectInView(
        projectVisible ||
          projectVisible2 ||
          projectVisible3 ||
          projectSectionVisible
      )
    );
  }, [
    projectVisible,
    projectVisible2,
    projectVisible3,
    projectSectionVisible,
    dispatch,
  ]);

  useEffect(() => {
    dispatch(setProjectInView(projectSectionVisible));
  }, [projectSectionVisible, dispatch]);

  return (
    <section
      ref={projectSection}
      id="projects"
      className="flex flex-col justify-center items-center min-h-screen pt-[24px] mb-10"
    >
      {/* <p className="font-Newsreader font-bold mx-auto text-center justify-center animate-slideup text-4xl mb-5">
        Projects
      </p> */}

      {/* project 1 */}
      <div
        ref={projectView}
        className={`flex flex-col justify-between mx-auto ${
          projectVisible ? "animate-slidedown" : ""
        }`}
      >
        <p className="font-extrabold text-4xl indent-4 pb-2">
          Featured Project
        </p>

        <hr className="border-t border-gray-500 my-2 mb-8"></hr>

        <div className="flex flex-row items-center">
          <p className="text-2xl font-bold italic text-black pl-4">.WAV</p>
          <a
            target="_blank"
            href="https://wav-port.herokuapp.com/"
            className="w-20"
          >
            <img
              src="https://portfolio-data-bucket17.s3.us-west-1.amazonaws.com/purpwav.png"
              className=" object-cover pt-3 pl-3"
            />
          </a>
          <img
            src="https://portfolio-data-bucket17.s3.us-west-1.amazonaws.com/left-arrow.svg"
            className="h-4 object-cover pl-4 mt-4 justify-center animate-wave"
          />
          <p className="ml-2 mt-[1px] pt-3 text-sm font-bold">Click to View</p>
        </div>

        <div className="">
          {/* first question div with answers */}

          <div className="m-2">
            <p className="pt-2 indent-2 text-md text-black font-bold">
              What Technologies were used?
            </p>

            <p className="italic font-semibold p-2 text-neutral-600">
              React, Tailwind, CSS, Express, Node.js, MongoDB, Redux, GIT, and
              AWS S3
            </p>
          </div>
          <div>
            <div className="m-2">
              <p className="pt-2 indent-2 text-md font-bold">
                What Makes this project special?
              </p>
              <p className="text-lg font-semibold p-2 md:w-[1000px] w-full text-neutral-600">
                {" "}
                This full stack application is designed around providing a
                simple and easy to use interface which allows users to create
                and alter their own playlists and save them to their account. A
                mongoDB database is resposible for storing all info pretaining
                to user and playlist data. Redux is also resposible for user and
                playlist state management, as well as allowing each user to have
                a pre configured playlist of all{" "}
                <span className="italic font-bold text-black">
                  Musical production
                </span>{" "}
                composed{" "}
                <span className="italic font-bold text-black">In-house</span>{" "}
                soley by Nicholas Ramirez. Music data that is not being pulled
                from the external API is stored in AWS S3 bucket, allowing for a
                wide variety of playlist options a user can configurate and save
                to their account.
              </p>
            </div>
            <div className="flex m-2">
              <p className="pt-2 indent-2 text-md font-bold">
                Where can I view the source code?
              </p>
              <a
                target="_blank"
                href="https://github.com/MoreRoundedCorners/wav-port/tree/master"
              >
                <img
                  src="https://portfolio-data-bucket17.s3.us-west-1.amazonaws.com/githubsource.png"
                  className="pl-2 h-[50px]"
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-500 my-8  mx-aut"></hr>
      </div>
      {/* project 2 */}

      <hr className="border-t border-gray-500"></hr>
    </section>
  );
};

export default Projects;
