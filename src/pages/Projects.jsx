import React from 'react';
import git1 from '../images/git1.png'
import git2 from '../images/git2.png'
import git3 from '../images/git3.png'
import { Link } from 'react-router-dom';
import Typical from 'react-typical';



function Projects() {
  return (
    <>
      <div className='text-center'>
        <div className='fs-1 my-5 ms-4 animate__animated animate__zoomIn animate__slower'>
          <Typical
            steps={['Projects ...', 2500, 'Javascript ...', 1000, 'Html & Css ...', 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>

      <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active'
            aria-current='true' aria-label='Slide 1'></button>
          <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1'
            aria-label='Slide 2'></button>
          <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2'
            aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='card mx-auto' style={{ width: '400px' }}>
              <img src={git1} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Gourmet-Cooking</h5>
                <p className='card-text'>This is a model for a Resturante website </p>
                <Link to="https://gourmet-cooking-9cnuqdpvw-adnane2002.vercel.app" className="btn btn-primary">View Project</Link>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card mx-auto' style={{ width: '400px' }}>
              <img src={git2} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Bootcamp</h5>
                <p className='card-text'>This is a model for a bootcamp website</p>
                <Link to="https://bootcamp-opal.vercel.app" className="btn btn-primary">View Project</Link>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card mx-auto' style={{ width: '400px' }}>
              <img src={git3} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title '>Calculator</h5>
                <p className='card-text'>This is a fully functional calculator created in react</p>
                <Link to="https://calculator-topaz-omega.vercel.app" className="btn btn-primary">View Project</Link>
              </div>
            </div>
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}


export default Projects;
