import NavBar from "./NavBar";
import Home from "./Home";
import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";
import Work4 from "./Work4";
import Card from "./Card";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Work1
        title="National Service Scheme For The App Made Easy"
        content="App facilitates to track and oversee the smooth functioning of the
          committees."
        btnback="#D9DEEE"
        btncolor="#6878AC"
      />
      <Work2
        title="US Headquarter Logistics, Supply chain and E-Commerce Organization"
        content="Order management system for their B2B e-commerce business.Streamline their supply chain management."
        btnback="#DFDFDF"
        btncolor="#525665"
      />
      <Work3
        title="UK Headquarter cross border PE firm"
        content="The cross-border innovation fund aims to transfer technology between the UK and India, the top ranking unicorn countries of the world."
        btnback="#FFFFFF"
        btncolor="#5AB5D1"
      />
      <Work4
        title="SBCID  - Government Organization"
        content="Customized methods for displaying your data and managing information via personalized dashboards."
        btnback="#ECCFB8"
        btncolor="#AE7E56"
      />
      <Card />
      <Projects />
      <div class="text-center d-block mx-auto" style={{ width: "760px" }}>
        <p className="font-f mb-5">Other Projects</p>
        <p className="font-m mb-5">
          Our portfolio boasts diverse UI/UX projects, showcasing our
          versatility in crafting captivating and user-centric designs across
          varied industries and platforms.
        </p>
        <button
          type="button"
          class="btn px-5 py-2 mb-5"
          style={{
            backgroundColor: "#FF774C",
            fontFamily: '"Mulish", sans-serif',
            fontSize: "15px",
          }}
        >
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            View More ↗
          </a>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
