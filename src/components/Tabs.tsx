import React from "react";
import TabItem from "./TabItem";

interface Props{
    activeTab:string;
    setActiveTab:React.Dispatch<React.SetStateAction<string>>;
}

function Tabs({activeTab,setActiveTab}: Props) {
    
        
    return (
      <div className="bg-[#1D1D42] h-screen w-[20%] text-white text-center hidden">
        <div className=" h-[50px] pt-1">
          <h1 className="text-3xl font-semibold">
            Admin<span className="text-[#F38D15]">.</span>
          </h1>
        </div>
        <ul className="mt-4">
         <TabItem activeTab={activeTab} setActiveTab={setActiveTab} id='dashboard' name='Dashboard'/>
         <TabItem activeTab={activeTab} setActiveTab={setActiveTab} id='employees' name='Employees'/>
         <TabItem activeTab={activeTab} setActiveTab={setActiveTab} id='projects' name='Projects'/>

        </ul>
      </div>
    );
}

export default Tabs;