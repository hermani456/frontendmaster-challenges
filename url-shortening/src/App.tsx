import AdvancedStatistics from "./components/advancedStatistics";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import UrlShortener from "./components/urlShortener";

function App() {
  return (
    <div className="font-poppins">
      <div className="max-w-screen-xl mx-auto px-4">
        <Navbar />
      </div>
      <Hero />
      <div className="max-w-screen-xl mx-auto px-4 relative top-[4.7rem] sm:top-16">
        <UrlShortener />
      </div>
      <AdvancedStatistics />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
