import { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth <= 640) {
      setShowLinks(prev => !prev);
    }
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <ul>
          <li className='navbar-brand' onClick={handleToggle}>
            Sarah .<span>H</span>
          </li>

          <div className={`nav-links ${showLinks ? 'show' : ''}`}>
            <Link to={"/portfolio"} className='a'><li>Home</li></Link>
            <li><a href="#exp" className='a'>Experience</a></li>
            <li><a href="#edu" className='a'>Education</a></li>
            <li><a href="#contact" className='a'>Contact</a></li>
          </div>

          <li id='email'><i className="fa-solid fa-envelope"></i> <span>salibahe123@gmail.com</span></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
