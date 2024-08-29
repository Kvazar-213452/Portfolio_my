import React from 'react';
import './css/style.css';
import PropTypes from 'prop-types';

const ProgressBar = ({ percentage, name }) => {
  return (
    <div className='div_proset_margin'>
        <p className="name_progress-bar">{name} {percentage}%</p>
        <div className="progress-bar">
            <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    </div>
  );
};

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default ProgressBar;