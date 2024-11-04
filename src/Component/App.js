// Import necessary libraries and components
import React, { useState } from 'react';
import hogsData from '../PorkersData'; // Importing the hog data with a new name
import Nav from './Nav'; // Navigation component
import HogList from './HogList'; // Component to display list of hogs
import HogForm from './HogForm'; // Component for adding new hogs
import Filters from './Filters'; // Component for filtering and sorting hogs

// Define the main App component
function App() {
  // State for all hogs, filter/sort options, and hidden hogs
  const [hogs, setHogs] = useState(hogsData); // Initialize hogs with data from hogsData
  const [greasedOnly, setGreasedOnly] = useState(false); // State for filtering greased hogs
  const [sortBy, setSortBy] = useState(null); // State for sorting option (name or weight)
  const [hiddenHogs, setHiddenHogs] = useState([]); // State for tracking hidden hogs

  // Filter and sort the hogs based on user input
  const displayedHogs = hogs
    .filter(hog => (greasedOnly ? hog.greased : true)) // Filter by greased status if greasedOnly is true
    .filter(hog => !hiddenHogs.includes(hog.name)) // Exclude hidden hogs from the display
    .sort((a, b) => {
      // Sort hogs based on selected criteria
      if (sortBy === "name") return a.name.localeCompare(b.name); // Sort by name alphabetically
      if (sortBy === "weight") return a.weight - b.weight; // Sort by weight numerically
      return 0; // Return unsorted if no sortBy option is selected
    });

  // Function to add a new hog
  const handleAddHog = (newHog) => {
    setHogs([...hogs, newHog]); // Update hogs state by appending the new hog
  };

  // Function to toggle visibility of hogs by adding/removing from hiddenHogs array
  const toggleHideHog = (hogName) => {
    setHiddenHogs(hiddenHogs.includes(hogName) // Check if the hog is already hidden
      ? hiddenHogs.filter(name => name !== hogName) // If hidden, remove it from hiddenHogs
      : [...hiddenHogs, hogName]); // If not hidden, add it to hiddenHogs
  };

  return (
    <div className="App container mt-5"> {/* Main app container with margin */}
      <Nav /> {/* Render the navigation component */}
      <Filters
        greasedOnly={greasedOnly} // Pass the state to filter component
        setGreasedOnly={setGreasedOnly} // Pass setter function for greasedOnly
        sortBy={sortBy} // Pass current sort option
        setSortBy={setSortBy} // Pass setter function for sortBy
      />
      <HogForm onAddHog={handleAddHog} /> {/* Render form to add new hogs */}
      <HogList hogs={displayedHogs} toggleHideHog={toggleHideHog} /> {/* Render list of hogs */}
    </div>
  );
}

// Export App as the default export
export default App;
