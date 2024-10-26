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
              <Section2Card title={"Card 1"} icon={"bi-moon"} />
            </div>
            {/* Card 2 */}
            <div className="col-12 col-md-4">
              <Section2Card title={"Card 2"} icon={"bi-moon"} />
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
      </div>
    </>
  );
}

export default Section2;
