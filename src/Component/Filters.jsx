// This component allows users to filter a list of items (presumably hogs) by 
// whether they are greased or not. It also allows users to sort the list 
// by name or weight.

import React from 'react';

function Filters({ greasedOnly, setGreasedOnly, sortBy, setSortBy }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      
      {/* Checkbox to filter by greased status */}
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={greasedOnly}               // Controlled input - checked if greasedOnly is true
          onChange={(e) => setGreasedOnly(e.target.checked)}  // Updates greasedOnly state when checked/unchecked
          id="greased-only"
        />
        <label className="form-check-label" htmlFor="greased-only">
          Greased Only
        </label>
      </div>
      
      {/* Dropdown to select sorting criteria */}
      <div>
        <label className="me-2">Sort By:</label>
        <select
          className="form-select d-inline w-auto"
          value={sortBy}                     // Controlled input - current sort selection
          onChange={(e) => setSortBy(e.target.value)}  // Updates sortBy state based on user selection
        >
          <option value="">None</option>       {/* Default option with no sorting */}
          <option value="name">Name</option>   {/* Option to sort by name */}
          <option value="weight">Weight</option> {/* Option to sort by weight */}
        </select>
      </div>
    </div>
  );
}

export default Filters;
