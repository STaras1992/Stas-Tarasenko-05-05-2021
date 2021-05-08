export function getMyLocation() {
  function success(position) {
    return { lat: position.coords.latitude, lon: position.coords.longitude };
  }

  function error() {
    return null;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
