import PropTypes from 'prop-types';
import React from 'react';

function DynamicList({ n }) {
  const stos = [];
  for (let index = 1; index <= n; index++) {
    stos.push(<li key={index}>List element {index}</li>);
  }
  return (
    <>
      <ul>{stos}</ul>
    </>
  );
}
DynamicList.propTypes = {
  n: PropTypes.number.isRequired,
};
export default DynamicList;
