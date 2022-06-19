import React from 'react';
import PropTypes from 'prop-types';

function PageMiss({ staticContext = {} }) {
  staticContext.notFound = true;
  return (
    <div className="ui container">
      <h1>Oh Dear </h1>
      <p>We seemed to have misplaced your favourites</p>
    </div>
  );
}

PageMiss.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.any)
};

PageMiss.defaultProps = {
  staticContext: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: PageMiss
};