import React from 'react'
import img from '../images/tantan.png'
import 'animate.css/animate.min.css'
import Typical from 'react-typical'

function About() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='ms-3 my-3'>
                        <div className='fs-1 my-5 ms-4 animate__animated animate__zoomIn animate__slow '>
                            <Typical
                                steps={['About me ...', 1500, 'Roadmap ...', 1500, 'Experiences ...', 1500]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </div>
                        <div className='fs-4'>
                        <p className='animate__animated animate__slideInLeft text-white'>
                               <span>&gt;</span> Hello there! I am a web developer. I went to AUI university where I gained a solid foundation in programming and computer systems.
                        </p>
                            <p className='animate__animated animate__slideInLeft animate__delay-2s animate__slower text-white'>
                            <span>&gt;</span> However, I found myself wanting more practical, hands-on experience in web development, which is what led me to enroll in the 3W Academy bootcamp. Here, I have been able to apply the skills I learned in university to real-world projects and challenges.
                            </p>
                            <p className='animate__animated animate__slideInLeft animate__delay-5s animate__slower text-white'>
                                <span>&gt;</span>I am excited to be a part of this rapidly-evolving field and am dedicated to staying up-to-date with the latest technologies and trends. My ultimate goal is to create user-friendly and aesthetically pleasing web experiences that make a positive impact on people's lives.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
