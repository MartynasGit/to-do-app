import React from 'react';
import picture from '../../data/error.webp'

const NotFound = () => (
  <div className="text-center">
    <img src={picture} alt='Error' className='error'/>
  </div>
);

export default NotFound;
