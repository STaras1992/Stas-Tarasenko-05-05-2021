import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getLocationAutocomplete } from '../../api/AccuWeatherAPI';
import AutocompleteSelect from './AutocompleteSelect';
import locationsToOptions from '../../utils/locationsToOptions';
// import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../MuiAlert/MuiAlert';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const defaultOptions = [
  { value: '210841', label: 'Tehran' },
  { value: '60592', label: 'Tengzhou' },
  { value: '215854', label: 'Tel Aviv' },
];

const SearchBar = ({ onLocationChange }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const error = useSelector((state) => state.location.error);
  const [showError, setShowError] = useState(false);

  const handleSearchInputChange = (text) => {
    setSearchValue(text);
  };

  const handleSelectOption = (option) => {
    setSelectedLocation(option);
  };

  const loadLocationSuggestions = async (inputText, callback) => {
    // setIsLoading(true);
    // const response = await getLocationAutocomplete(inputText);
    // console.log('response autocomplete', response);
    // if (!response) {
    //   setLocationSuggestions([]);
    //   callback([]);
    // } else {
    //   const options = locationsToOptions(response.data);
    //   console.log(options);
    //   setLocationSuggestions(options);
    //   callback(options);
    // }
    // callback(locationSuggestions);
    callback(defaultOptions);
  };

  const handleAlertClose = () => {
    setShowError(false);
  };

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, [locationSuggestions]);

  useEffect(() => {
    selectedLocation && onLocationChange({ key: selectedLocation.value, name: selectedLocation.label });
  }, [selectedLocation]);

  useEffect(() => {
    if (error && !showError) setShowError(true);
  }, [error]);

  // useEffect(() => {
  //   if (showError) setShowError(false);
  // }, [showError]);

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
      {/* {showError && (
        <Snackbar open={setShowError} autoHideDuration={3000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity='error'>
            {error}
          </Alert>
        </Snackbar>
      )} */}
    </div>
  );
};

export default SearchBar;
