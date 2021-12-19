import React from 'react';
import PropTypes from 'prop-types'


const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return <button type="button" className="filter-btn" key={index} onClick={() => filterItems(category)}>{category}</button>
      })}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  filterItems: PropTypes.func.isRequired,
}

export default Categories;
