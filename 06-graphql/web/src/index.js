import React from "react";
import ReactDOM from "react-dom";


import CharacterSheet from "./components/CharacterSheet"

const Index = () => (
  <div>
    <CharacterSheet />
  </div>
);

ReactDOM.render(<Index />, document.getElementById("index"));
