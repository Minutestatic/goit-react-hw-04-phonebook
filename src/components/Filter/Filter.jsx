import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      className={css['filter-input']}
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
