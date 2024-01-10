import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, setPortfolio }) {
  
  function handleSellClick(stock) {
    setPortfolio(portfolio.filter((currStock) => currStock != stock));
  };

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map(stock => <Stock {...{ stock, onClick : handleSellClick }} key={`port${stock.id}`}/>)
      }
    </div>
  );
}

export default PortfolioContainer;
