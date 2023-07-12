import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/RenderTree/renderTree.css";
import { getData } from "./components/handleApi/api";
import RenderTree from "./components/RenderTree/RenderTree";

/*  
    Status legend:
    Not tested: 0,
    Tested and -ve: 1,
    Tested and +ve: 2
*/

/*  
    If the node continuation stops propogating for all nodes that show negative test result, then there is no need to pull edge data for those records.
*/


const App = () => {
  const [userData, setUserData] = useState([]);

  const firstNode = () => {
    const rootUlParElem = document.querySelectorAll("ul");
    rootUlParElem.forEach((elem) => {
      if (elem.parentElement.classList == "tree") {
        const divElement = elem;
        divElement.classList.add("root");
      }
    });
  };

  useEffect(() => {
    // the below getData function is to handle api is declared in "api.jsx" file
    getData(setUserData).then((res) => {
      setUserData(res.data);
    });
    firstNode();
  }, []);

  return <RenderTree userData={userData} />;
};

export default App;
