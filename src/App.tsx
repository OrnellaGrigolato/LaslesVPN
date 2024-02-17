import { Navbar } from "./Components/Navbar";
import Header from "./Components/Header";
import Stadistics from "./Components/Stadistics/Stadistics";
import SecondaryHeader from "./Components/Secondary Header/SecondaryHeader";
import PlanSection from "./Components/Plan Section/PlanSection";
import MapSection from "./Components/MapSection";
import CarruselSection from "./Components/CarruselSection/CarruselSection";
import FormSection from "./Components/Form Section/FormSection";
import Footer from "./Components/Footer";
import "./App.css";

export const BASE_URL =
  "https://b1hh8w6utk.execute-api.us-east-1.amazonaws.com";
function App() {
  return (
    <div className="font-[Rubik]">
      <Navbar />
      <Header />
      <Stadistics />
      <SecondaryHeader />
      <PlanSection />
      <MapSection />
      <CarruselSection />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
