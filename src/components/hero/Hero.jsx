import pcImg from '../../assets/pc2.png';
import './Hero.scss';
import pdf from './cv.pdf'

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/9620771407526', '_blank'); 
  };
  return (
    <div className='hero'>

      <div className="txt">
        <div className="header">
          <h4 className="greet">Hey There!</h4>
          <h1 className="act-txt">I&apos;m Sarah, a <span>Web Developer</span>.</h1>
          <p>I am Sarah Herzallah, I&apos;m from Jordan. My native language is Arabic, and I speak English fluently.</p>
        </div>

        <div className="ctas">
          {/* whatsapp and download cv options */}
          <button className="contact" onClick={handleWhatsApp}>WhatsApp</button>
          <a href={pdf} download>
          <button className="cv" type='button'>Download CV</button>
          </a>
        </div>
      </div>

      <div className="img-cont">
        <img src={pcImg} alt="" />
      </div>
    </div>
  )
}

export default Hero
