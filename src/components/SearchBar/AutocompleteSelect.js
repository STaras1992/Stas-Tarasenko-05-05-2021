import Select from 'react-select/async';
import PropTypes from 'prop-types';
import selectStyle from './selectAutocompleteStyles.js';

const AutocompleteSelect = ({ value, options, name, loadOptions, onChange, onInputChange, ...props }) => {
  return (
    <>
      <Select
        name={name}
        styles={selectStyle}
        value={value}
        // options={options}
        loadOptions={loadOptions}
        onChange={onChange}
        onInputChange={onInputChange}
        {...props}
      ></Select>
    </>
  );
};

AutocompleteSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  loadOptions: PropTypes.func,
  value: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
};

export default AutocompleteSelect;
