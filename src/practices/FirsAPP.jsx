import React from 'react';
import PropTypes from 'prop-types';

export const FirstApp = ({ title = "Default Title", subTitle = "Default Subtitle", name = "Default Name" }) => {

  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
