import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown w-full">
      <select
        class="select select-bordered w-full"
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
        placeholder="Select Market Name"
      >
        <option value="">Select Market Name</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
