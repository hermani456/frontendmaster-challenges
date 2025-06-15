import AdvancedStatistics from "./components/advancedStatistics";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import UrlShortener from "./components/urlShortener";

export default function Home() {
  return (
    <div className="font-poppins">
      <div className="max-w-screen-xl mx-auto px-4">
        <Navbar />
      </div>
      <Hero />
      <div className="mt-20 bg-gray-100 relative">
        <UrlShortener />
        <AdvancedStatistics />
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
