import React from 'react'
import Typical from 'react-typical'
import 'animate.css/animate.min.css'

function Home() {
  return (
    <div className='container ms-3 my-5'>
       <div className='fs-1 ms-5'>
       <p><Typical
            steps={['Hello World ...', 2000, 'Bonjour le monde ...', 2000 , 'こんにちは世界 ...',2000 , 'مرحبا بالعالم ...',2000, 'Hola Mundo ...', 2000, 'Hallo Welt ...', 2000 , '你好世界 ...', 2000]}
            loop={Infinity}
            wrapper="code"
          /></p>
       </div>
      <div className='text-center animate__animated animate__zoomInDown animate__slow'>
      <p className='my-5 ms-5 fs-3 '> I'm Adnane Douiab an inspiring <span className='text-danger'>fullstack web devlopper</span></p>
        <p className='mt-5 ms-5 fs-1 fw-bolder text-white' >I build websites using HTML ,Css and JavaScript.</p>  
      </div>
    </div>
        
  )
}

export default Home
