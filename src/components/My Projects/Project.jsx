import React from 'react'
import './Project.css'
function Project() {
  function demo1()
  {
    
    window.location.href="https://madhavv1github.github.io/pixel-sketch/"
  }
  function demo1git()
  {
    window.location.href="https://github.com/Madhavv1GitHub/pixel-sketch"
  }

  function demo2()
  {
    
    window.location.href="https://madhavv1github.github.io/Rock-Paper/"
  }
  function demo2git()
  {
    window.location.href="https://github.com/Madhavv1GitHub/Rock-Paper/"
  }


  function demo3()
  {
    
    window.location.href="https://madhavv1github.github.io/responsive-portfolio/"
  }
  function demo3git()
  {
    window.location.href="https://github.com/Madhavv1GitHub/responsive-portfolio/"
  }


  return (
    <section id='project'>
    <div className='About_header'>
      <p>Browse My Recent</p>
      <h1>Projects</h1>
    </div>
    <div className='project_info'>
      <div className='pr 1'>
          <div className='im 1'>
            <img src="images/pixel sketch.jpg" alt="" height={220} width={250}/>
          </div>
          <div className='title 1'>
            <h2>Etch a sketch</h2>
          </div>
          <div className='source'>
            <button className='bt bt1' onClick={demo1}>Live Demo</button>
            <button className='bt bt2'onClick={demo1git}>GitHub</button>
          </div>
          
          
      </div>
      <div className='pr 2'>
          <div className='im 2'>
            <img src="images/rock.png" alt="" height={220} width={250}/>
          </div>
          <div className='title 2'>
            <h2>Rock Paper Scissor</h2>
          </div>
          <div className='source'>
            <button className='bt bt1'onClick={demo2}>Live Demo</button>
            <button className='bt bt2'onClick={demo2git}>GitHub</button>
          </div>
          
      </div>
      <div className='pr 3'>
          <div className='im 3'>
            <img src="images/responsive.png" alt="" height={220} width={250}/>
          </div>
          <div className='title 3'>
            <h2>Responsive Portfolio</h2>
          </div>
          <div className='source'>
            <button className='bt bt1' onClick={demo3}>Live Demo</button>
            <button className='bt bt2' onClick={demo3git}>GitHub</button>
          </div>
      </div>
    </div>
    </section>
  )
}

export default Project
