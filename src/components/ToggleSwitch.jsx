import React, { useState } from "react";

export default function ToggleSwitch(){
    
    const [isToggle,setIsToggle]=useState(false);
    

return(
    <div className={`flex items-center w-20 h-100 cursor-pointer 
    ${
        isToggle ? 'justify-end' : 'justify-start'
    }
    bg-gray-300`}>
        
    </div>

);


}