import '../components/Home/styles/Home.css'
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";

function Home() {
  return (
    <>
      <div className="container py-3">
        <Section1 />
        <Section2 />
        <Section3 />
        {/* Section 4 Contibutors/Review TBI*/}
      </div>
    </>
  );
}

export default Home;