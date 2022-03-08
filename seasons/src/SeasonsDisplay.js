import React from 'react';

const SeasonDisplay = () => {
  window.navigator.geolocation.getCurrentPostion(
      (position) => console.log(position),
      (err) => console.log(err)
  ); 
  return <div>Season Display</div>;
};
export default SeasonDisplay;


// App Challenges
// Need to get the users physical location
// Need to determine the current month
// Need to change text and styling based on location + month