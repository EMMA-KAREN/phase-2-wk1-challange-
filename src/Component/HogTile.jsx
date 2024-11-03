// Import React and useState hook
import React, { useState } from 'react';

function HogTile({ hog, toggleHideHog }) {
  // State to toggle details visibility for each hog
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui card mb-4 shadow-sm">
      
      {/* Display hog image with set height and width to ensure consistency */}
      <div className="image">
        <img 
          src={hog.image}               // Display the image from hog data
          alt={hog.name}                 // Alt text for accessibility
          style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Ensures consistent image size
        />
      </div>
      
      {/* Content section of the card */}
      <div className="content card-body">
        
        {/* Button to toggle hog details on click */}
        <button 
          onClick={() => setShowDetails(!showDetails)} // Toggles the showDetails state
          style={{
            background: 'grey',
            border: 'red',
            color: 'black',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          <h5 className="card-title">{hog.name}</h5> {/* Display hog name as title */}
        </button>
        
        {/* Conditional rendering to display hog details when showDetails is true */}
        {showDetails && (
          <div className="description">
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p> {/* Shows 'Yes' or 'No' based on greased status */}
            <p>Highest Medal: {hog["highest medal achieved"]}</p>
          </div>
        )}
        
        {/* Button to hide the hog, calls toggleHideHog with the hog's name as an argument */}
        <button 
          className="btn btn-danger mt-2"
          onClick={() => toggleHideHog(hog.name)} // Triggers hide function
        >
          Hide Hog
        </button>
      </div>
    </div>
  );
}

// Export HogTile as the default export
export default HogTile;
