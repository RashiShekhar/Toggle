import React from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import ToggleSwitch2 from "./components/ToggleSwitch2";

function App() {
  return (
    <div className="flex flex-col space-y-4 h-screen justify-center items-center">
      <ToggleSwitch />

      <ToggleSwitch2 />
    </div>
  );
}

export default App;
