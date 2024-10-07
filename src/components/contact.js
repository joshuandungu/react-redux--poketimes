import React, { useEffect } from 'react';

const Contact = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.history.push('/about');
    }, 3000); // Redirects after 3 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [props.history]);

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Contact;
