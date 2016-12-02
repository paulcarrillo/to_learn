import React from 'react';

  const filterLink = (text, current, cb) => {
    if (text === current)
        return (<span>{text}</span>);
      return (<span onClick={() => cb(text)} style={{ textDecoration: 'underline', color: 'black' }}>{text}
      </span>);
    }

  const Filter = ({ currentFilter, setFilter }) => (
    <div>
      {filterLink('All', currentFilter, setFilter)}
      {' '}
      {filterLink('Study', currentFilter, setFilter)}
      {' '}
      {filterLink('Understood', currentFilter, setFilter)}
      {' '}
    </div>
);

export default Filter;
