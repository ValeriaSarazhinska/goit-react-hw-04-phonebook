import PropTypes from 'prop-types';

export function Filter({ value, onFilterChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onFilterChange}
      name="filter"
      placeholder="Filter"
    />
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
