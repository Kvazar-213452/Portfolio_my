import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import './css/media.css';
import './lib/bootstrap.min.css';
import ProgressBar from './ProgressBar';
import Projects from './Projects';
import { progressData, ProjectsMas } from './conf';

const App = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className='menu'>
        <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
          <header className='mb-auto'>
            <div>
              <h3 className='float-md-start mb-0 color_name color_g'>Portfolio <span className='color_def'>Consolas</span></h3>
              <nav className='nav nav-masthead justify-content-center float-md-end'>
                <a className='nav-link fw-bold py-1 px-0' onClick={() => scrollToSection(homeRef)}>Home</a>
                <a className='nav-link fw-bold py-1 px-0' onClick={() => scrollToSection(skillsRef)}>Skills</a>
                <a className='nav-link fw-bold py-1 px-0' onClick={() => scrollToSection(projectsRef)}>Projects</a>
                <a className='nav-link fw-bold py-1 px-0'href='https://github.com/Conar365'>Github</a>
              </nav>
            </div>
          </header>
        </div>
      </div>
      <div ref={homeRef} className='sectiont_1'>
        <div className='descr'>
          <p className='name_descr color_g'>Welcome to My Portfolio</p>
          <p className='my_name'>Consolas Sonar</p>
          <p className='what_l_know'>A Full Stack Developer</p>
          <p className='what_l_know_text'>
            I am a passionate Full Stack developer with a strong foundation in both front end and backend technologies. Over the years, I have honed my skills in creating interactive and dynamic web applications that provide a seamless user experience. My experience covers HTML, CSS, JavaScript, React, Node.js, React native, Python, TypeScript, PHP and other modern web technologies.
          </p>
        </div>
      </div>
      <div className='sectiont_2'>
        <p ref={skillsRef} className='text_center color_g'>Skills</p>
        <div className='div_my_skils'>
          <div className='div_lorem'>
            <p className='text_lorem'>My knowledge is in percentages. Knowledge in my main areas.</p>
            <p className='text_lorem_small'>My github is <a href='https://github.com/Conar365'>https://github.com/Conar365</a></p>
            <p className='text_more_lorem'>
              Besides coding, I enjoy collaborating with teams, brainstorming innovative solutions, and contributing to open source projects. My goal is to create user-centric applications that not only solve problems, but also provide a pleasant user experience.
            </p>
            <br />
            <p className='text_more_lorem'>
              I also specialize in developing bots for various platforms, including Telegram and Discord. My solutions are created using Python and Node.js, which allows you to implement a wide range of functionality and integrations.
            </p>
          </div>
          <div className='percentage_div'>
            {progressData.map((item, index) => (
              <ProgressBar key={index} percentage={item.percentage} name={item.name} />
            ))}
          </div>
        </div>
      </div>
      <div className='sectiont_3'>
        <p ref={projectsRef} className='text_center color_g'>Projects</p>
        <div className='Projects_div'>
          {ProjectsMas.map((item, index) => (
            <Projects key={index} text={item.text} name={item.name} img={item.img} url={item.url} />
          ))}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);