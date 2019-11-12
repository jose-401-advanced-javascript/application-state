import React from 'react';
import PropTypes from 'prop-types';
import styles from './Face.css';

const faceStyle = {
  display: 'none'
};


const Face = ({ emoji, start }) => {
  
  if(start) faceStyle.display = '';
  return (

    <p className={styles.Face} style={faceStyle} >{emoji}</p>
  );

};

Face.propTypes = {
  emoji: PropTypes.string.isRequired,
  start: PropTypes.bool
};

export default Face;
