/*
Make options {value,label} array for location select component.
*/
const locationsToOptions = (locations) => {
  if (!locations || locations.length === 0) return [];
  let options = [];
  options = locations.map((loc) => ({ value: loc.Key, label: loc.LocalizedName }));
  return options;
};

export default locationsToOptions;
