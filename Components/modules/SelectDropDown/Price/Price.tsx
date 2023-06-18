import React, { useContext, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { MainContext, mainContextType } from "@/Context/Services/Procider/Provider";

export interface IPrice {
    name: number;
}

const Price = () => {
  const {selectedMaxPrice, setSelectedMaxPrice} = useContext<mainContextType>(MainContext)
  const Prices: IPrice[] = [
    { name: 100000 },
    { name: 200000 },
    { name: 300000},
    { name: 400000 },
    { name: 500000 },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedMaxPrice}
        onChange={(e: DropdownChangeEvent) => setSelectedMaxPrice(e.value)}
        options={Prices}
        optionLabel="name"
        editable
        placeholder="Select Maximum price "
        className="w-fitcontent"
      />
    </div>
  );
};

export default Price;


