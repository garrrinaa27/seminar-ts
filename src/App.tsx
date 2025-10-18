import EnergyFormula from "./components/EnergyFormula";
import PythagoreanTheorem from "./components/PythagoreanTheorem";
import CylinderVolume from "./components/CyliderVolume";
import QuadraticEquation from "./components/QuadraticEquation";
import SumSquare from "./components/SumSquare";
import WaterFormula from "./components/WaterFormyla";
import Logarithm from "./components/Logarithm";
 
function App() {
  return (
    <ol>
      <h3 className="appTitle" >Формулы для верстки:</h3>
      <EnergyFormula />
      <PythagoreanTheorem />
      <PythagoreanTheorem />
      <CylinderVolume />
      <QuadraticEquation />
      <SumSquare />
      <WaterFormula />
      <Logarithm />
    </ol>
  );
}
 
export default App;