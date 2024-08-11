// Home.js
import React from 'react';


const Home = ({Info}) => {
  return (
    <div className='mt-8'>
      {Info()}
    </div>
  );
};

export default Home;
