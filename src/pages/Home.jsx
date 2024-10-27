import { useEffect } from "react";

import "../components/Home/styles/Home.css";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";

function Home() {
  useEffect(() => {
    // Add the 'my-auto' class to the div with id 'root'
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.classList.add("my-auto");
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      if (rootElement) {
        rootElement.classList.remove("my-auto");
      }
    };
  }, []); // Empty dependency array to run effect only once on mount
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
