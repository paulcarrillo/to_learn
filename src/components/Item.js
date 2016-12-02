import React from 'react';

const Item = ({ id, name, complete, onTolearnClick }) => (
  <li
    onClick={() => onTolearnClick(id)}
    style={ complete ? { textDecoration: 'line-through', color: 'black' } : {} }
  >
    {name}
  </li>
);

export default Item;
