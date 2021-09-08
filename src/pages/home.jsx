import React, { useState, useEffect } from "react";
import { workSummary } from "../data/workSummary";
import bgVid from "/src/images/bgvid.mp4";
import ReactImageAppear from "react-image-appear";
import shuffleLetters from "shuffle-letters";
import AnimatedCursor from "react-animated-cursor";
// import Delayed from "../data/delay";

const projects = [
  { name: "Redact.dev", value: "01" },
  { name: "TTM", value: "02" },
  { name: "Pets", value: "03" },
  { name: "Woodburn", value: "04" },
  { name: "Woobot.io", value: "05" },
];

const Home = () => {
  const [defaultProject, setProject] = useState("01");
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    shuffleLetters(document.querySelector("h1"), {
      iterations: 1,
      fps: 20,
      onComplete: (el) => {
        console.log("Effect was completed.");
        console.log(el);
      },
    });

    const loadImage = (images) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = images.image;
        loadImg.onload = resolve(images.image);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(workSummary.map((images) => loadImage(images))).then(() =>
      setImgsLoaded(true)
    );
  }, [defaultProject]);

  return (             
    <div
      style={{
        backgroundImage: `url(${bgVid})`,
        backgroundRepeat: `none`,
        backgroundPosition: `center`,
        height: `100vh`,
        backgroundSize: `cover`,
      }}
      className="flex cursor  items-center cursor  w-full text-white overflow-hidden"
    >
      <AnimatedCursor
        innerSize={10}
        outerSize={50}
        color={"255, 105, 180"}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={0.5}
        trailingSpeed={5}
      />
      <span id="circle" class="circle"></span>

      <video
        className="flex absolute object-fill  h-screen  w-screen "
        autoPlay
        loop
        muted
      >
        <source src={bgVid} type="video/mp4" />
      </video>

      <div className="z-10    p-5 grid grid-cols-8 gap-4  text-left ">
        {workSummary.map((summary) =>
          summary.id != defaultProject ? (
            <></>
          ) : (
            <div className="z-10 col-start-2 col-span-5">
              <h3 className="flex text-xs font-orbitron">
                PROJECT NAME
                <p className=" border-t-2 border-gray-800 w-40 ml-5 mt-1 bg"></p>
              </h3>
              <h1 className="text-7xl font-russo ">
                {summary.name}
              </h1>
            </div>
          )
        )}
        <p className=" p-3 text-7xl font-russo ">⠀</p>
        <ul className=" md:  col-start-8 col-span-2 row-span-5 font-orbitron sm:  mt-10 ">
          {projects.map((projects) =>
            projects.value != defaultProject ? (
              <li
                key={projects.value}
                onMouseOver={() => setProject(projects.value)}
                className="md: flex filter blur-sm  my-5 nav sm:"
              >
                <p className="w-5 text-xs font-black text-green2  transform  -rotate-90 mr-2">
                  {projects.value}
                </p>
                <p>
                  <a href="#">{projects.name}</a>
                </p>
              </li>
            ) : (
              <li
                key={projects.value}
                onMouseOver={() => setProject(projects.value)}
                className="flex my-5 navActive"
              >
                <p className="w-5 text-xs font-black text-green2  transform  -rotate-90 mr-2 ">
                  {projects.value}
                </p>
                <p>
                  <a href="#" className="wavey">
                    {projects.name}
                  </a>
                </p>
              </li>
            )
          )}
        </ul>

        {imgsLoaded
          ? workSummary.map((summary) =>
              summary.id != defaultProject ? null : (
                <>
                  <div className="  col-start-2 col-span-3 flex   ">
                    <ReactImageAppear
                      placeholderStyle={{
                        backgroundColor: "transparent",
                      }}
                      src={summary.image}
                      animation="fadeIn"
                      animationDuration="1s"
                      easing="ease-in"
                      showLoader={false}
                    />
                  </div>

                  <div className="z-10 font-orbitron col-start-2 col-span-5 flex">
                    <h2 className=" font-black text-green2 text-6xl">
                      {summary.id}
                    </h2>

                    <p className=" border-t-2 border-gray-800 w-20 m-4 bg"></p>

                    <p className="mt-7 -ml-20 ">
                      {summary.name}
                      <span className="text-green2 mx-2">◆</span>
                      {
                      summary.category.map((cat, i) => summary.category.length - 1 === i ? (cat) :(cat + ", "))}
                      <span className="text-green2 mx-2">◆</span>
                      {summary.year}
                    </p>
                  </div>

                  <div className="md: z-10 col-start-2 col-span-3 sm:  ">
                    <p className="font-buenard">{summary.summary}</p>
                  </div>

                  <div className="flex text-xl items-center justify-around font-russo transform rotate-90 ">
                    <p className=" text-green2">
                      <a href="#" className="wavey">
                        MORE
                      </a>
                    </p>
                  </div>
                </>
              )
            )
          : null}

        <div className="flex col-start-2 col-span-6  border-b border-gray-800 font-orbitron  py-5">
          <div className="flex-grow">
            <p className=" text-xl flex font-black">
              TOTOPC
              <a
                className="ml-2 flex items-center  "
                href="https://www.youtube.com/channel/UClXBtnbCQoeAyR5AQLMLCBg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:aymarlobaton@gmail.com">
                raymarlobaton@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-end  "></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
