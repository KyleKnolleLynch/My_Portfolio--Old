import React, { useState, useEffect } from 'react';

const Copyright = ({ color }) => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    const curYear = new Date().getFullYear();
    setYear(curYear);
  }, []);

  return (
    <div className='copyright' style={{ color }}>
      <p>All Rights Reserved &copy; Kyle Lynch {year}</p>
    </div>
  );
};

export default Copyright;
