import React, { useContext, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { City } from "@/Context/ContextProvider";
import { MainContext, mainContextType } from "@/Context/Services/Procider/Provider";


const Destination = () => {
  const {selectedDestination, setSelectedDestination}=useContext<mainContextType>(MainContext)
  const cities: City[] = [
    { name: "New York"},
    { name: "Rome"},
    { name: "London",},
    { name: "Istanbul",},
    { name: "Paris",},
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedDestination}
        onChange={(e: DropdownChangeEvent) => setSelectedDestination(e.value)}
        options={cities}
        optionLabel="name"
        editable
        placeholder="Select a City"
        className="w-full"
      />
    </div>
  );
};

export default Destination;
