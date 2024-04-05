import React, { useState } from "react";

export default function Categories({ items, onClick }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const changeCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => changeCategory(null)}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => changeCategory(index)}
            key={`${index}_${name}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
