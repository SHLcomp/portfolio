import './Exp.scss';
import img from '../../assets/pc2.jpg';
import { Link } from 'react-router-dom';


const Education = () => {
  return (
    <div className="exp" id='exp'>
      <div className="img-cont">
          <img src={img} alt="" />
      </div>


      <div className="text">
        <div className="info">
          {/* title and desc */}
          <h3>More Than 5+ Years of Experience!</h3>
        </div>

        <div className="list-txt">
          <div className="txt">
            <p>I started learning programming when I was 15 year old, ever since I worked on many projects as a freelancer, 
              some were not too perfect, but now that I have got 5+ years of experience with too many projects that I have made and sold
              to my customers, and with all the learning paths I walked through (and still going throught), and with all the of the 
              certificates that I obtained... I can proudly see myself as a frontend web developer!!
            </p>
              
              <section>
              <ul>
              <h6>My Skills:</h6>
                <li>HTML</li>
                <li>CSS</li>
                <li>Js</li>
                <li>React Framework</li>
                <li>Visual Studio Code</li>
                <li>c++</li>
                <li>Python</li>
              </ul>



              <div className="cta">
            {/* socials and download cv... again */}
            <div className="socials">
            <h6>Find me on my socials:</h6>
            <ul>
              <li><i className="fa-brands fa-instagram"></i> <Link to={"https://www.instagram.com/eng.sarahbader648/"}>Instagram</Link> </li>
              <li><i className="fa-brands fa-linkedin"></i> <Link to={"https://www.linkedin.com/in/sarah-bader-98894725a/"}>LinkedIn</Link> </li>
              <li><i className="fa-brands fa-github"></i> <Link to={"https://github.com/SHLcomp"}>GitHub</Link></li>

            </ul>
            </div>

            <div className="projects">
              <a className='a' href='#proj'><button>Check My Projects!!</button></a>
            </div>

            
          </div>

          </section>



          </div>

          

        </div>


      </div>
    </div>
  )
}

export default Education
