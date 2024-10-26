import React from "react";
import "./styles/Hero.css";
import svg from "../assets/online-learning-animate.svg";

function Hero() {
  return (
    <>
      <div className="">
        <div className="container py-3">
          <Section1 />
          <Section2 />
          <Section3 />
          {/* Section 4 Contibutors/Review TBI*/}
        </div>
      </div>
    </>
  );
}

// Hero Section
function Section1() {
  return (
    <>
      <div className="row py-3">
        <div className="col-12 col-sm-6 my-auto text-center text-sm-start">
          <div className="h1 fw-bold display-4 mb-4">
            {" "}
            {/* Increased the size for larger screens */}
            Learn Trending Technologies
            <br />
            for Free
          </div>
          <p className="fs-5 mt-4 text-body-secondary pe-4">
            Learn to program with our beginner-friendly tutorials and examples.
            Read tutorials, try examples, write code, and learn to program.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            nihil beatae officia debitis ad. Voluptates exercitationem nisi,
            quis consectetur nobis, eos laudantium at possimus similique
            deleniti quaerat iste iusto nesciunt.
          </p>
        </div>

        <div className="col-12 col-sm-6 text-center">
          <img
            src={svg}
            alt="Online Learning"
            className="animated-svg img-fluid mx-auto p-5 d-block"
          />
        </div>
      </div>
    </>
  );
}

// Choose to learn Section
function Section2() {
  return (
    <>
      <div className="row py-3">
        {/* Left Section: Hidden on small screens, visible on medium and above */}
        <div className="d-none d-lg-block col-lg-4 my-auto">
          <div className="h1 fw-bold">Choose what to learn</div>
          <p className="fs-5 mt-4 text-body-secondary">
            Start learning the best <br /> programming languages.
          </p>
        </div>

        {/* Right Section: Cards with Programming Languages */}
        <div className="col-12 col-lg-8">
          <div className="row g-3 px-3 px-sm-0">
            {/* Card 1 */}
            <div className="col-12 col-md-4">
              <Section2Card title={"Card 1"} icon={"bi-moon"} />
            </div>
            {/* Card 2 */}
            <div className="col-12 col-md-4">
              <a className="card card-bg-custom  text-decoration-none">
                <Section2Card title={"Card 2"} icon={"bi-moon"} />
              </a>
            </div>
            {/* Card 3 */}
            <div className="col-12 col-md-4">
              <Section2Card title={"Card 3"} icon={"bi-moon"} />
            </div>
            {/* Card 4 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"Card 4"} icon={"bi-moon"} />
            </div>
            {/* Card 5 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"Card 5"} icon={"bi-moon"} />
            </div>
            {/* Card 6 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"Card 6"} icon={"bi-moon"} />
            </div>
            {/* Card 7 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"Card 7"} icon={"bi-moon"} />
            </div>
            {/* Card 8 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"Card 8"} icon={"bi-moon"} />
            </div>
            {/* Card 9 */}
            <div className="col-12 col-md-4">
              <Section2Card title={"View all topics"} icon={"bi-moon"} />
            </div>
          </div>
        </div>
      </di
    </>
  );
}
function Section2Card({ title, icon }) {
  return (
    <>
      <a className="card card-bg-custom text-decoration-none">
        <div className="card-body d-flex align-items-center p-2">
          {/* Circular Icon */}
          <div className="card-icon-style ms-1 d-flex justify-content-center align-items-center me-3">
            <i className={`${icon} fs-4 text-light`}></i>
          </div>
          {/* Card Title */}
          <h5 className="card-title mb-0 text-truncate">{title}</h5>
        </div>
      </a>
    </>
  );
}

// Why codebase dev Section
function Section3() {
  return (
    <>
      <div className="container py-3 mt-5">
        <div className="h1 text-center fw-bold">Why CodeBase DEV?</div>

        <div className="row mt-5 g-4">
          {/* Card 1 */}
          <Section3Card
            title={"Programming made easy"}
            subtext={
              "We focus on simplicity. Programming tutorials and examples written in simple, understandable language for beginners."
            }
            icon={"bi bi-pen"}
          />

          {/* Card 2 */}
          <Section3Card
            title={"Content You Can Trust"}
            subtext={
              "A dedicated group of experts continually working to create programming resources that is accurate and easier to understand."
            }
            icon={"bi bi-shield-check"}
          />

          {/* Card 3 */}
          <Section3Card
            title={"Learn by Doing"}
            subtext={
              "The only way to learn to program is by writing code. We provide a lot of complete examples so that run and edit code on your own."
            }
            icon={"bi bi-code"}
          />
        </div>
      </div>
    </>
  );
}

function Section3Card({ title, subtext, icon }) {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-4">
        <div className="card p-4 h-100 text-start card-bg-custom">
          <div className="d-flex align-items-center mb-4">
            <div className="rounded-circle d-flex justify-content-center align-items-center card-icon-style">
              <i className={`${icon} fs-4 text-white`}></i>
            </div>
            <h5 className="ms-3 fw-bold mb-0">{title}</h5>
          </div>
          <p className="text-body-secondary">{subtext}</p>
        </div>
      </div>
    </>
  );
}

// Contibutors/Review Section (TBI)

export default Hero;
