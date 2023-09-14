import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ handleFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    handleFilterChange(newFilter);
  };

  return (
    <label className={css.filterTitle}>
      Filter
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
