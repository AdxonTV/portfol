import React from 'react';

interface Place {
  name1: string;
  name2: string;
}

const Placeholder: React.FC<Place> = ({ name1, name2 }) => {
  return (
    <div className='text-sm'>
      <div className='font-medium'>{name1}</div>
      <div  className='font-bold'>{name2}</div>
    </div>
  );
}

export default Placeholder;