import React from 'react';
import git1 from '../images/git1.png'
import git2 from '../images/git2.png'
import { Link } from 'react-router-dom';



function Projects() {
  return (
    <>
      <div className='text-center'>
        <h4 className='text-danger fs-1 my-5'>This is some of my work</h4>
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
              <img src='...' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title '>Project Title 3</h5>
                <p className='card-text'>Project Description 3</p>
                <Link to="" className="btn btn-primary">View Project</Link>
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
