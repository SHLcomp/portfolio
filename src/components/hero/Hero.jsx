import pcImg from '../../assets/pc2.png';
import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>

      <div className="txt">
        <div className="header">
          <h4 className="greet">Hey There!</h4>
          <h1 className="act-txt">I&apos;m Sarah, a <span>Web Developer</span>.</h1>
        </div>

        <div className="ctas">
          {/* whatsapp and download cv options */}
          <button className="contact">WhatsApp</button>
          <button className="cv">Download CV</button>
        </div>
      </div>

      <div className="img-cont">
        <img src={pcImg} alt="" />
      </div>
    </div>
  )
}

export default Hero
