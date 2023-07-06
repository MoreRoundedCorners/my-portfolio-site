import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { setAboutInView } from "../redux/reducer/viewReducer";
import { useSelector, useDispatch } from "react-redux";
import Technologies from "../components/Technologies";
import { songArr } from "../utils/songsArr";

const About = () => {
  const dispatch = useDispatch();
  const aboutInView = useSelector((state) => state.aboutInView);
  const {
    ref: aboutRef,
    inView: visibleEle,
    entry,
  } = useInView({ threshold: 0.9 });

  const [currentSong, setCurrentSong] = useState(null);
  const songRefs = songArr.map(() => React.createRef()); // create refs for songs

  const isPlaying = (song, index) => {
    // Pause the current song if there is one
    if (currentSong !== null && currentSong !== index) {
      songRefs[currentSong].current.pause();
      songRefs[currentSong].current.currentTime = 0; // reset the song to the beginning
    }

    // If clicked on a new song or resume playing the paused one
    if (currentSong !== index) {
      songRefs[index].current.play();
      setCurrentSong(index);
    } else {
      setCurrentSong(null);
    }
  };

  useEffect(() => {
    dispatch(setAboutInView(visibleEle));
  }, [visibleEle, dispatch]);

  return (
    <section
      id="aboutMe"
      ref={aboutRef}
      className={`about min-h-screen text-black flex flex-col lg:flex-row justify-center items-center md:mt-0 mt-4 ${
        aboutInView ? "about-color-change " : ""
      }`}
    >
      <div className="max-w-3xl flex flex-col mt-10 mx-auto">
        <header>
          <p className="text-4xl text-center text-black font-Newsreader font-black">
            About Me
          </p>
        </header>

        <div
          className={`text-lg font-semibold mt-4  text-center ${
            visibleEle ? "text-delay animate-slideright" : ""
          }`}
        >
          <p className="mb-4 font-semibold text-lg indent-2 leading-8">
            From adolescence, my drive for satisfaction has since revolved
            around creating experiences for others to consume, enjoy, and
            appreciate. As a{" "}
            <span className="italic font-bold">Software Engineer</span> with a
            background in{" "}
            <span className="italic font-bold">Audio Engineering</span> and{" "}
            <span className="italic font-bold">Musical Composition</span>, I
            find immense satisfaction in contributing to the world's
            hand-crafted and technological building blocks, which the universe
            allows us to build upon in hopes of continuing the constant flow of
            tabletop ideas turning into tangible, maintainable solutions,
            whether independently or in collaboration with like-minded peers.
            Whether solidifying a foundation's groundwork or creating new
            ceilings, my primary focus is to ensure that the outcomes of one's
            contributions consistently meet the highest standards of quality and
            craftsmanship.
          </p>

          <div
            className="border-t border-gray-500 
          text-delay animate-slideright "
          ></div>
          <div className="songs-container flex md:flex-row flex-col justify-center">
            {/* <img
              src="./images/sec.png"
              className="h-40 w-40 object-cover justify-center mx-auto"
            /> */}
            {songArr.map((song, index) => (
              <div key={song.id} className="p-4 mx-auto lg:m-0">
                <audio
                  ref={songRefs[index]}
                  controls
                  className="w-[250px] audio-player"
                  onPlay={() => isPlaying(song, index)}
                  onPause={() => currentSong === index && setCurrentSong(null)}
                >
                  <source src={song.path} type="audio/wav" />
                </audio>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-row flex-wrap">
        <Technologies />
      </div>
    </section>
  );
};

export default About;
