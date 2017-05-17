var React = require('react');

// Stateless functional component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a simple weather app based on React-Technology.
      </p>
      <p>
        Used tools:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Used to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
