import React from "react";

import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Pizza from "./components/Pizza";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <Pizza title="Cheese" price={300} />
            <Pizza title="BBQ" price={400} />
            <Pizza title="Peperoni" price={385} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
