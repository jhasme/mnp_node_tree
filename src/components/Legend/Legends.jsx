import { useState } from "react";
import "./legends.css";

const Legends = () => {
  const [legandActive, setLegandActive] = useState(false);
  document.addEventListener("scroll", () => {
    window.scrollY > 50 ? setLegandActive(true) : setLegandActive(false);
  });

  return (
    <div className="legands">
      <div className={legandActive ? "legands_c active" : "legands_c"}>
        <div className="solids">
          <div className="primary">
            <div className="solid_c"></div>
            <p>Primary</p>
          </div>
          <div className="positive">
            <div className="solid_c"></div>
            <p>
              Test result: <span>Positive</span>
            </p>
          </div>
          <div className="negative">
            <div className="solid_c"></div>
            <p>
              Test result: <span>Negative</span>
            </p>
          </div>
          <div className="not_tested">
            <div className="solid_c"></div>
            <p>
              Test result: <span>Unknown</span>
            </p>
          </div>
        </div>
        <div className="borders">
          <div className="i_partner">
            <div className="border_c"></div>
            <p>
              Contact: <span>Injection Partner</span>
            </p>
          </div>
          <div className="spouse">
            <div className="border_c"></div>
            <p>
              Contact: <span>Spouse</span>
            </p>
          </div>
          <div className="s_partner">
            <div className="border_c"></div>
            <p>
              Contact: <span>Sexual Partner</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legends;
