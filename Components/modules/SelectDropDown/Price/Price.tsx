import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

interface IPrice {
    name: number;
}

const Price = () => {
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<IPrice | null>(null);
  const Prices: IPrice[] = [
    { name: 100 },
    { name: 200 },
    { name: 300 },
    { name: 400 },
    { name: 500 },
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
        className="w-full md:w-14rem"
      />
    </div>
  );
};

export default Price;


