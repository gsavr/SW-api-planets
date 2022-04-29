import "./App.css";
import icon from "../../assets/death_star_by_radiusss.png";

import Planets from "../Planets";

const App = () => {
  return (
    <div className="App">
      <div className="cont">
        <h1 className="sw-font">
          Star Wars Planets{" "}
          <img className="landing-ds" src={icon} alt="death star" />
        </h1>
      </div>
      <Planets />
    </div>
  );
};

export default App;
