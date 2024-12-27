import React from 'react';

interface NameProps {
  name: string; // Define the expected type for the 'name' prop.
}

const Name: React.FC<NameProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Name;
