import React from 'react'
import img from '../pages/image5.jpeg'
import 'animate.css/animate.min.css'
import Typical from 'react-typical'

function About() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>
                    <div className='ms-3 my-5'>
                        <div className='fs-1 my-5 ms-4 animate__animated animate__zoomIn animate__slower'>
                            <Typical
                                steps={['About me ...', 2000, 'My life ...', 2000, 'Experiances ...', 2000]}
                                loop={Infinity}
                                wrapper="code"
                            />
                        </div>
                        <div className='fs-4'>
                            <p className='animate__animated animate__rotateInDownRight '>
                                Hello there! I am a web developer. I went to AUI university where I gained a solid foundation in programming and computer systems.
                            </p>
                            <p className='animate__animated animate__rotateInDownRight'>
                                However, I found myself wanting more practical, hands-on experience in web development, which is what led me to enroll in the 3W Academy bootcamp. Here, I have been able to apply the skills I learned in university to real-world projects and challenges.
                            </p>
                            <p className='animate__animated animate__rotateInDownRight'>
                                I am excited to be a part of this rapidly-evolving field and am dedicated to staying up-to-date with the latest technologies and trends. My ultimate goal is to create user-friendly and aesthetically pleasing web experiences that make a positive impact on people's lives.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-5'>
                    <img className='image-about animate__animated animate__rotateInDownLeft ' src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
