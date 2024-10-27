import svg from "./online-learning-animate.svg";
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
          <p className="fs-5 mt-4 text-body-secondary pe-0 pe-sm-4">
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

export default Section1;
