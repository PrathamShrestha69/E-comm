import React, { useState } from "react";
import { Icon } from "@iconify/react";

const FilterPanel = ({ onFilterChange }) => {
  const [gender, setGender] = useState([]);
  const [collection, setCollection] = useState([]);
  const [price, setPrice] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    size: false,
    color: false,
    price: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleGenderChange = (value) => {
    let newGender;
    if (value === "All") {
      newGender = gender.includes("All") ? [] : ["All"];
    } else {
      newGender = gender.includes("All")
        ? [value]
        : gender.includes(value)
        ? gender.filter((g) => g !== value)
        : [...gender, value];
    }
    setGender(newGender);
    onFilterChange({ gender: newGender, collection, price });
  };

  const handleCollectionChange = (value) => {
    const newCollection = collection.includes(value)
      ? collection.filter((c) => c !== value)
      : [...collection, value];
    setCollection(newCollection);
    onFilterChange({ gender, collection: newCollection, price });
  };

  const handlePriceChange = (value) => {
    const newPrice = price.includes(value)
      ? price.filter((p) => p !== value)
      : [...price, value];
    setPrice(newPrice);
    onFilterChange({ gender, collection, price: newPrice });
  };

  return (
    <div className="w-full space-y-6 font-[DM_Sans]">
      <div className="flex items-center gap-2">
        <Icon icon="solar:settings-linear" width="20" height="20" />
        <h2 className="text-lg font-semibold">Filter</h2>
      </div>

      <hr className="border-[#e5e5e5]" />

      {/* Gender Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-black">Gender (0)</h3>
        <div className="space-y-2">
          {["All", "Men", "Women"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={gender.includes(item)}
                onChange={() => handleGenderChange(item)}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />
              <span className="text-sm text-blue-600">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-[#e5e5e5]" />

      {/* Collection Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-black">Collection (0)</h3>
        <div className="space-y-2">
          {["New", "Popular", "Sale"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={collection.includes(item)}
                onChange={() => handleCollectionChange(item)}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />
              <span className="text-sm text-blue-600">{item}</span>
            </label>
          ))}
        </div>
      </div>
      <hr className="border-[#e5e5e5]" />

      {/* Price Section */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection("price")}
          className="flex w-full items-center justify-between text-sm font-semibold text-black"
        >
          <span>Price (0)</span>
          <span className="text-lg">{expandedSections.price ? "−" : "+"}</span>
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            {["under50", "50-80"].map((range) => {
              const labels = {
                under50: "Under €50",
                "50-80": "€50 - €80",
               
              };
              return (
                <label
                  key={range}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={price.includes(range)}
                    onChange={() => handlePriceChange(range)}
                    className="h-4 w-4 cursor-pointer accent-blue-600"
                  />
                  <span className="text-sm text-blue-600">{labels[range]}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
