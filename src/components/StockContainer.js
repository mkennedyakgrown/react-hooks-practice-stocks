import React, { useState } from "react";
import Stock from "./Stock";

function StockContainer({ stocksList, onClick, sortBy, filterBy }) {

  const stocksToRender = stocksList.toSorted(compare).filter((stock) => stock.type.includes(filterBy));

  const renderStocks = stocksToRender.map(stock => <Stock {...{ stock, onClick }} key={stock.id} />);

  function compare( a, b ) {
    let i = 0;
    if (sortBy === "Alphabetically") {
      if (a.name > b.name) {
        i = 1;
      } else if (a.name < b.name) {
        i = -1;
      } else {
        i = 0;
      }
    };
    if (sortBy === "Price") {
      if (a.price > b.price) {
        i = -1;
      } else if (a.price < b.price) {
        i = 1;
      } else {
        i = 0;
      };
    };
    return i;
  }

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
