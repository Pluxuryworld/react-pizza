import { useState } from "react";

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const onActiveCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onActiveCategory(0)}
          className={activeCategory === 0 ? "active" : ""}
        >
          Все
        </li>
        <li
          onClick={() => onActiveCategory(1)}
          className={activeCategory === 1 ? "active" : ""}
        >
          Мясные
        </li>
        <li
          onClick={() => onActiveCategory(2)}
          className={activeCategory === 2 ? "active" : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => onActiveCategory(3)}
          className={activeCategory === 3 ? "active" : ""}
        >
          Гриль
        </li>
        <li
          onClick={() => onActiveCategory(4)}
          className={activeCategory === 4 ? "active" : ""}
        >
          Острые
        </li>
        <li
          onClick={() => onActiveCategory(5)}
          className={activeCategory === 5 ? "active" : ""}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
}
export default Categories;
