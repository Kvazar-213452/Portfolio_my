import React from 'react';
import './css/style.css';
import PropTypes from 'prop-types';

const Projects = ({ text, name, img, url }) => {
  return (
    <div className='div_prg'>
        <img className='img_prg' src={img}/>
        <div className='div_content'>
            <p className="name_prg color_g">{name}</p>
            <p className="text_prg">{text}</p>
            <br></br>
            <p className="text_prg">Source code of the project url: <a href={url}>{url}</a></p>
        </div>
    </div>
  );
}; 

Projects.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Projects;