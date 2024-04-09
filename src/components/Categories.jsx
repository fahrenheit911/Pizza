import React, { useState } from "react";

export default function Categories({ items }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => setActiveCategory(null)}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items.map((name, index) => (
          <li
            key={index}
            className={activeCategory === index ? "active" : ""}
            onClick={() => setActiveCategory(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
