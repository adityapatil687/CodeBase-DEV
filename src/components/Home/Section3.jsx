import Section3Card from "./Section3Card";
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

export default Section3;
