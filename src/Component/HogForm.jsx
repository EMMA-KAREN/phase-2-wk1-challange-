// Import React and the useState hook
import React, { useState } from 'react';

// Define the HogForm component, which takes an onAddHog prop
function HogForm({ onAddHog }) {
  // Initialize state for each form field
  const [name, setName] = useState("");            // For hog's name
  const [specialty, setSpecialty] = useState("");   // For hog's specialty
  const [weight, setWeight] = useState("");         // For hog's weight
  const [greased, setGreased] = useState(false);    // Checkbox for greased status
  const [image, setImage] = useState("");           // URL for hog's image

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    
    // Create a new hog object with the inputted data
    const newHog = {
      name,
      specialty,
      weight: parseFloat(weight),       // Convert weight to a number
      greased,
      image,
      "highest medal achieved": "none"  // Default value for medal achieved
    };
    
    // Call the onAddHog function passed as a prop with the new hog data
    onAddHog(newHog);
    
    // Reset the form fields after submission
    setName("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setImage("");
  };

  // Render the form with input fields and a submit button
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {/* Input for hog's name */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Input for hog's specialty */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </div>

      {/* Input for hog's weight */}
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      {/* Checkbox to indicate if the hog is greased */}
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
          id="greased"
        />
        <label className="form-check-label" htmlFor="greased">
          Greased
        </label>
      </div>

      {/* Input for hog's image URL */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      {/* Submit button to add the hog */}
      <button type="submit" className="btn btn-primary">
        Add Hog
      </button>
    </form>
  );
}

// Export HogForm as the default export
export default HogForm;
