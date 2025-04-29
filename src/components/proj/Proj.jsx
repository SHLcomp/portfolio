import './Proj.scss';
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import data from './data/data';
import { Link } from 'react-router-dom';

const Proj = () => {
  useEffect(() => {
    new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
  // swiper to show my projects
    <div id='proj'>
      <div className="proj-txt">
        <h3>Here are Some of My Previous Work:</h3>
      </div>
      <div className="swiper cont">
        <div className="swiper-wrapper" >

      {data.map((item, index) => (
            <div className="swiper-slide card" key={index}>
              <div className="card-info">

                <div className="img-div">
                  <img src={item.img} alt="" />
                </div>

                <div className="info-text">
                  <h1>{item.title}</h1>
                  <h4>{item.cat}</h4>
                  <p>{item.des}</p>   
                  <Link className='a' to={`/${item.link}`}><h6>Go To</h6></Link>
                </div>

              </div>
            </div>
          ))}
            </div>


        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
};

export default Proj;
