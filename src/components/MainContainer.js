import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const url = "http://localhost:3001/stocks";
  const [stocksList, setStocksList] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  function handleClick(stock) {
    if (!portfolio.includes(stock)){
      setPortfolio([...portfolio, stock])
    };
  };

  useEffect(() => {
    getStocks();
  }, [])

  function getStocks() {
    fetch(url)
      .then(res => res.json())
      .then(stocks => {setStocksList(stocks)});
  }

  return (
    <div>
      <SearchBar {...{ setSortBy, setFilterBy }} />
      <div className="row">
        <div className="col-8">
          <StockContainer {...{ stocksList, onClick : handleClick, sortBy, filterBy }} />
        </div>
        <div className="col-4">
          <PortfolioContainer {...{ portfolio, setPortfolio }} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
