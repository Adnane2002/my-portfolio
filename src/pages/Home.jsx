import React from 'react'
import Typical from 'react-typical'
import 'animate.css/animate.min.css'

function Home() {
  return (
    <div className='container ms-3 my-5'>
       <div className='fs-1 ms-5'>
       <Typical
            steps={['Hello World ...', 2000, 'Bonjour le monde ...', 2000 , 'こんにちは世界 ...',2000 , 'مرحبا بالعالم ...',2000, 'Hola Mundo ...', 2000, 'Hallo Welt ...', 2000 , '你好世界 ...', 2000]}
            loop={Infinity}
            wrapper="code"
          />
       </div>
        <p className='my-5 ms-5 fs-3 '> I'm Adnane Douiab an inspiring web devlopper, I'm currently studying to become a <span className='text-danger'>fullstack web devlopper</span>.</p>
        <p className='mt-5 ms-5 fs-1 fw-bolder animate__animated animate__flipInX text-white animate__slow'>I build websites using HTML ,Css and JavaScript.</p>  
    </div>
        
  )
}

export default Home
