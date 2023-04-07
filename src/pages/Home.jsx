import React from 'react'
import Typical from 'react-typical'
import 'animate.css/animate.min.css'

function Home() {
  return (
    <div className='container ms-3 my-5 '>
       <div className='fs-1 ms-5 text-home'>
      <Typical
            steps={['Hello World ...', 1500, 'Bonjour le monde ...', 1500 , 'こんにちは世界 ...',1500 , 'مرحبا بالعالم ...',1500, 'Hola Mundo ...', 1500, 'Hallo Welt ...', 1500 , '你好世界 ...', 1500]}
            loop={Infinity}
          />
       </div>
      <div className='text-center animate__animated animate__zoomInDown animate__slow'>
      <p className='my-5 ms-5 fs-3'> <span>&gt;</span>I'm Adnane Douiab an inspiring <span className='text-danger'>fullstack web devlopper</span></p>
        <p className='mt-5 ms-5 fs-1 fw-bolder text-white' ><span>&gt;</span>I build websites using HTML ,Css and JavaScript.</p>  
      </div>
    </div>
        
  )
}

export default Home
