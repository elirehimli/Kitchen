import './App.css';
import Header from "./Components/Header/Header"
import { BrowserRouter, Route } from "react-router-dom"
import Section1 from './Components/Section1/Section1'
import Section2 from "./Components/Section2/Section2"
import Section3 from './Components/Section3/Section3'
import Section4 from "./Components/Section4/Section4"
import Section5 from "./Components/Section5/Section5"
import RefikaninMutfagi from "./Components/RefikaninMutfagi/RefikaninMutfagi"
import Tarifler from './Components/Tarifler/Tarifler'
import GazeteYazilari from "./Components/GazeteYazilari/GazeteYazilari"
import DugunCorbasi from "./Components/DugunCorbasi/DugunCorbasi"
import TahinHelvasi from './Components/TahinHelvasi/TahinHelvasi'
import BulgurluPilav from "./Components/BulgurluPilav/BulgurluPilav"
import IslimKebabi from "./Components/IslimKebabi/IslimKebabi"
import YumurtaliPide from "./Components/YumurtaliPide/YumurtaliPide"
import Baklava from "./Components/Baklava/Baklava"
import TumTarifler from "./Components/TumTarifler/TumTarifler"
import Footer from "./Components/Footer/Footer"
import Page2 from './Components/Page2/Page2'
import BizimleCalismak from './Components/BizimleCalismak/BizimleCalismak'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route exact path="/">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </Route>


        {/* section3 */}
        <Route path="/duguncorbasi">
          <DugunCorbasi /> 
        </Route>
        <Route path="/tahinhelvasi">
          <TahinHelvasi />
        </Route>
        <Route path="/bulgurlupilav">
          <BulgurluPilav />
        </Route>
        {/* section4 */}
        <Route path="/islimkebabi">
          <IslimKebabi />
        </Route>
        <Route path="/yumurtalipide">
          <YumurtaliPide />
        </Route>
        <Route path="/baklava">
          <Baklava />
        </Route>
        <Route path="/tumtarifler">
          <TumTarifler />
        </Route>


        <Route exact path="/page2">
          <Page2 />
        </Route>
        <Route exact path="/bizimlecalismak">
          <BizimleCalismak />
        </Route>

        <Route path="/refikaninmutfagi">
          <RefikaninMutfagi />
        </Route>

        <Route path="/tarifler">
          <Tarifler />
        </Route>

        <Route path="/gazeteyazilari">
          <GazeteYazilari />
        </Route>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
