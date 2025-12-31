
import React, { useState } from "react";
import Rentals from "./Rentals";
import Rentout from "./Rentout";
import Secondcom from "./Secondcom";
import Secondpage from "./Secondpage";
import Related from "./Related";

const Pagethree = () => {
  const [activeTab, setActiveTab] = useState("rentout"); // default

  return (
    <div>
      {/* Hero + Buttons */}
      <Rentals activeTab={activeTab} setActiveTab={setActiveTab} />

    
      {activeTab === "rentout" && <Rentout />}
      {activeTab === "takeonrent" && <Secondcom />}

      <Secondpage />
      <Related />
    </div>
  );
};

export default Pagethree;

