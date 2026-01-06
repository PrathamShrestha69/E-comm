import React, { useState } from "react";
import { shoe } from "../data/Shoe.js";
import FilterPanel from "./FilterPanel.jsx";
import StoreCard from "./StoreCard.jsx";

const ShopContent = () => {
  const [filters, setFilters] = useState({
    gender: [],
    collection: [],
    price: [],
  });

  const getPriceRange = (price) => {
    const p = parseFloat(price);
    if (p < 50) return "under50";
    if (p < 80) return "50-80";
    if (p < 120) return "80-120";
    return "120plus";
  };

  const filteredShoes = shoe.filter((item) => {
    // Filter by gender - map "Men" to "male" and "Women" to "female"
    if (filters.gender.length > 0 && !filters.gender.includes("All")) {
      const genderMap = { Men: "male", Women: "female" };
      const selectedGenders = filters.gender.map((g) => genderMap[g]);
      if (!selectedGenders.includes(item.gender)) {
        return false;
      }
    }

    // Filter by collection (tag)
    if (
      filters.collection.length > 0 &&
      !filters.collection.includes(item.tag)
    ) {
      return false;
    }

    // Filter by price
    if (filters.price.length > 0) {
      const itemPrice = item.price || "0";
      const itemPriceRange = getPriceRange(itemPrice);
      if (!filters.price.includes(itemPriceRange)) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="flex min-h-screen gap-10 bg-white py-12 sm:px-10 lg:px-16 ">
      {/* Sidebar Filter */}
      <aside className="hidden w-40 flex-shrink-0 lg:block">
        <FilterPanel onFilterChange={setFilters} />
      </aside>

      {/* Products Grid */}
      <main className="flex-1 px-2">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Shop</h1>
          <p className="text-sm text-gray-600 mr-7 lg:mr-0">
            {filteredShoes.length} product
            {filteredShoes.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:gap-15 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {filteredShoes.length > 0 ? (
            filteredShoes.map((item) => <StoreCard key={item.id} shoe={item} />)
          ) : (
            <div className="col-span-full flex h-40 items-center justify-center text-gray-500">
              No products match your filters
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ShopContent;
