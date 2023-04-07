import React from 'react'
import Typical from 'react-typical'
import 'animate.css/animate.min.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
  return (
    <div className='container ms-3 my-5'>
      <div className='fs-1 ms-5 text-home'>
        <Typical
          steps={['Hello World ...', 1500, 'Bonjour le monde ...', 1500 , 'こんにちは世界 ...',1500 , 'مرحبا بالعالم ...',1500, 'Hola Mundo ...', 1500, 'Hallo Welt ...', 1500 , '你好世界 ...', 1500]}
          loop={Infinity}
        />
      </div>
      <div className='text-center animate__animated animate__zoomInDown animate__slow'>
        <p className='my-5 ms-5 fs-3 animate__animated animate__delay-1s animate__lightSpeedInLeft'> <span>&gt;</span>I'm Adnane Douiab an inspiring <span className='text-danger'>fullstack web developer</span></p>
        <p className='mt-5 ms-5 fs-1 fw-bolder text-white animate__animated animate__delay-3s animate__lightSpeedInLeft' ><span>&gt;</span>I build websites using HTML ,Css and JavaScript.</p>
        <p className='mt-5 ms-5 fs-4 fw-bolder text-white animate__animated animate__delay-4s animate__lightSpeedInLeft' ><span>&gt;</span>Check my socials</p>
        <div className="d-flex justify-content-center my-3 ms-5 animate__animated animate__delay-5s animate__rollIn">
          <a href="https://www.instagram.com/adnane_011/" className="mx-4"><FaInstagram size={30} /></a>
          <a href="https://www.linkedin.com/in/adnane-douiab-806243240/" className="mx-4"><FaLinkedin size={30} /></a>
          <a href="https://github.com/Adnane2002/" className="mx-4"><FaGithub size={30} /></a>
        </div>
      </div>
    </div>        
  )
}

export default Home
