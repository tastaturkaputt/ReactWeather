var React = require('react');

// Stateless functional component
var WeatherMessage = ({location, temp}) => {

  return (
    <h3 className="text-center">It is {temp} in {location}!</h3>
  );
};
module.exports = WeatherMessage;
