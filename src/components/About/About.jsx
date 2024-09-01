import React from 'react'
import './About.css'
function About() {
  return (
<section id='About'>
    <div className='About_header'>
      <p>Get To Know More</p>
      <h1>About Me</h1>
    </div>
    <div className="About_info">
      <div className="About_img" >
        <img src="assests\about.jpg" alt="" />
      </div>
      <div className="Abouttext">
          <div className="box">
            
            <div className="box1">
            <i class="uil uil-bookmark"></i>
             <h3>Experience</h3>
             <p>6+ Months</p>
             <p>Web Development</p>
             <p>python</p>
            </div>
            <div className="box2">
            <i class="uil uil-users-alt"></i>
            <h3>Education</h3>
            <p>Int.Mtech in Computer Science</p>
            </div>
          </div>
          <div className='info'>
              <p>I am Madhavv Viswanath Student at VIT University pursuing my Integrated Mtech degree in Computer Science.I am a passionate and shrewd person who can learn new technologies and skills quickly.I have a great interest in the field of Web Development and CyberSecurity and have done some projects on these fields as part of my college and free time work.</p>
            </div>
      </div>
    </div>
</section>
   
  )
}

export default About
