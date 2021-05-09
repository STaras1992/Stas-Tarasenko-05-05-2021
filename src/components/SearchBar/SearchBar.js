import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getLocationAutocomplete } from '../../api/AccuWeatherAPI';
import AutocompleteSelect from './AutocompleteSelect';
import locationsToOptions from '../../utils/locationsToOptions';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const defaultOptions = [
  { value: '210841', label: 'Tehran' },
  { value: '60592', label: 'Tengzhou' },
  { value: '215854', label: 'Tel Aviv' },
];

const SearchBar = ({ onLocationChange }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (text) => {
    setSearchValue(text);
  };

  const handleSelectOption = (option) => {
    setSelectedLocation(option);
  };

  const loadLocationSuggestions = async (inputText, callback) => {
    if (process.env.REACT_APP_WEATHER_NODE_ENV === 'production') {
      setIsLoading(true);
      const response = await getLocationAutocomplete(inputText);
      if (!response) {
        setLocationSuggestions([]);
        callback([]);
      } else {
        const options = locationsToOptions(response.data);
        setLocationSuggestions(options);
        callback(options);
      }
      callback(locationSuggestions);
    } else callback(defaultOptions);
  };

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, [locationSuggestions]);

  useEffect(() => {
    selectedLocation && onLocationChange({ key: selectedLocation.value, name: selectedLocation.label });
  }, [selectedLocation]);

  return (
    <div className={classes.root}>
      <AutocompleteSelect
        inputValue={searchValue}
        value={selectedLocation}
        options={locationSuggestions}
        name='locationSearch'
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        isLoading={isLoading}
        loadOptions={loadLocationSuggestions}
        onChange={handleSelectOption}
        onInputChange={handleSearchInputChange}
        placeholder='Search location'
        hideSelectedOptions={false}
        loadingMessage={() => 'Searching...'}
        noOptionsMessage={() => 'No results'}
      />
    </div>
  );
};

export default SearchBar;
