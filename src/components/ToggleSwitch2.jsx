import React, { useState } from "react";

export default function ToggleSwitch() {
  const [isToggle2, setIsToggle2] = useState(false);

  return (
    <div
      className={` relative  items-center border bg-black w-16 h-8 cursor-pointer rounded-full p-1`}
    >
      <div
        className={`absolute transition-all duration-300 bg-white w-7 h-6  flex border rounded-full 
            ${isToggle2 ? "left-90" : "left-0"}
    bg-white-300`}
        onClick={() => setIsToggle2(!isToggle2)}
      />
    </div>
  );
}
