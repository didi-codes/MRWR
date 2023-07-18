import React from 'react';

const getSeason = (lat, month) => {

}

const SeasonDisplay = (props) => {
 const season = getSeason(props.lat, new Date().getMonth());
  
  return <div>Season Display</div>;
};
export default SeasonDisplay;

/*
Two Hemispheres: North and South
Logic: If we are between April and September it is summer in the Northern Hemisphere and if we are between October and March it is summer in the Southern Hemisphere
new Date().getMonth() returns an integer indicating the current month of the year. It is a zero index date 10 indicates 11
 */
// App Challenges
// Need to get the users physical location
// Need to determine the current month
// Need to change text and styling based on location + month