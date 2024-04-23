import React from 'react';

import {Categories, Header, PizzaBlock, Sort} from './components';
import pizzas from './assets/pizzas.json';

const categories = ['Мясная', 'Вегитарианская', 'Гриль', 'Острые', 'Закрытые'];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories categories={categories} />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map(obj => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
