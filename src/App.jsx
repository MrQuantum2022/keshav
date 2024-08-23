import Alerts from "./components/Alerts";
import Banner from "./components/Banner";
import Bubble from "./components/Bubble";
import Navbar from "./components/Navbar";
import Notices from "./components/Notices";
import PrincipalCard from "./components/PrincipalCard";
import QuickLinks from "./components/QuickLinks";
import Title from "./components/Title";
import Ugadmission from "./components/Ugadmission";
function App() {
  return (
    <>
    
    <Navbar/>
    <Title />
    <Banner/>
    <Alerts/>
    <div className="flex flex-wrap">

    <PrincipalCard/>
    <QuickLinks/>
    <Bubble name={"UGAdmission"}/>
    <Ugadmission/>
    <Notices/>
    </div>
    </>
  );
}
export default App;