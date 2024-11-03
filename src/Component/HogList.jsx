// Import React and the HogTile component
import React from 'react';
import HogTile from './HogTile';

// Define the HogList component, which takes hogs and toggleHideHog as props
function HogList({ hogs, toggleHideHog }) {
  return (
    <div className="ui grid container">
      <div className="row">
        {/* Map over each hog in the hogs array and render a HogTile component for each */}
        {hogs.map(hog => (
          <div className="col-md-4" key={hog.name}> {/* Each hog tile has a unique key (name) */}
            <HogTile hog={hog} toggleHideHog={toggleHideHog} /> {/* Pass hog data and toggleHideHog function as props */}
          </div>
        ))}
      </div>
    </div>
  );
}

// Export HogList as the default export
export default HogList;
