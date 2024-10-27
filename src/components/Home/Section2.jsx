import Section2Card from "./Section2Card";
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
              <Section2Card title={"C++ Programming"} icon={"bi-moon"} to={"topics/topic1"}/>
            </div>
            {/* Card 2 */}
            <div className="col-12 col-md-4">
              <Section2Card title={"Python Programming"} icon={"bi-moon"} to={"topics/topic2"} />
            </div>
            {/* Card 3 */}
            <div className="col-12 col-md-4">
              <Section2Card title={"DS & Algorithms "} icon={"bi-moon"} to={"topics/topic3"} />
            </div>
            {/* Card 4 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"OOP"} icon={"bi-moon"}  to={"topics/topic4"}/>
            </div>
            {/* Card 5 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"Java Programming"} icon={"bi-moon"}  to={"topics/topic5"}/>
            </div>
            {/* Card 6 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"Learn SQL"} icon={"bi-moon"}  to={"topics/topic5"}/>
            </div>
            {/* Card 7 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"Web Dev (HTML, CSS, JS)"} icon={"bi-moon"}  to={"topics/topic6"}/>
            </div>
            {/* Card 8 */}
            <div className="col-6 col-md-4 d-none d-md-block">
              <Section2Card title={"DS, AI, ML, NLP"} icon={"bi-moon"}  to={"topics/topic7"}/>
            </div>
            {/* Card 9 */}
            <div className="col-12 col-md-4">
              <Section2Card title={"View all topics"} icon={"bi-moon"}  to={"topics/"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
