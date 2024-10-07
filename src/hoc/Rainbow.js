import React from 'react';

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']; // Fixed typo in 'colors'
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Use colors.length for dynamic size

  const className = randomColor + '-text'; // Adding the random color to the text

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow; // Exporting the Rainbow HOC, not About
