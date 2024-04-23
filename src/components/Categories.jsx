import React, {useState} from 'react';

export default function Categories({categories}) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => setActiveCategory(null)}
          className={activeCategory === null ? 'active' : ''}
        >
          Все
        </li>
        {categories.map((value, i) => (
          <li
            key={i}
            className={activeCategory === i ? 'active' : ''}
            onClick={() => setActiveCategory(i)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
