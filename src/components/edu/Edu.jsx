import './Edu.scss';
import img from '../../assets/devices.jpg';

const Edu = () => {
  return (
    <div className='edu' id='edu'>
      {/* swiper of samples */}
      <div className="text">
        <h3>My Education and Certificates:</h3>
        <p>I am a self-learner, I have learned everything I know from scratch ever since 
          I was 15 years old, I received a scholarship from <a href="https://www.htu.edu.jo/" target='_blank' rel="noopener noreferrer">Al Hussein Technical University </a>
          in Jordan because of my programming and self-learning skills. Also I have obtained 6 different 
          certifications in programming, including certifications of: frontend responsive web design and full stack web development.</p>

          <div className="cert">
            <h6>I have gained certificates from:</h6>
            <ul>
              <li>FreeCodeCamp.</li>
              <li>HTUx | Al-Hussein Technical University.</li>
            </ul>
          </div>

          <div className="other">
            <h6>Resources I seized in the sake of learning:</h6>
            <ul>
              <li>FreeCodeCamp.</li>
              <a to="https://htux.org/" target='_blank'><li>HTUx | Al-Hussein Technical University.</li></a>
              <li>Khan Academy.</li>
              <li>w3school.</li>
              <li>Youtube.</li>
              <li>Stack Overflow.</li>
              <a to="https://app.manara.tech/" rel="noopener noreferrer" target='_blank'><li>Manara.</li></a>
            </ul>
          </div>
      </div>

      <div className="img-cont">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Edu
