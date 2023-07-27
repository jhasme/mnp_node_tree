import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/RenderTree/renderTree.css";
import { getData } from "./components/handleApi/api";
import RenderTree from "./components/RenderTree/RenderTree";
import Legends from "./components/Legend/Legends";

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
      setUserData(res.data.users);
    });
    firstNode();
  }, []);

  return (
    <>
      <Legends />
      <RenderTree userData={userData} />;
    </>
  );
};

export default App;
