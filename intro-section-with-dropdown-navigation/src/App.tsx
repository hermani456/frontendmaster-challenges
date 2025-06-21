import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-4">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
