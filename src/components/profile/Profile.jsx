import React from 'react'
import './Profile.css'
function Profile() {
  return (
    <section id='profile'>
        <div className="profile_img">
            <img src="/images/Profile.jpg" alt=""/>
        </div>
        <div className="profiletext">
            <p>Hello,I'm</p>
            <h1>Madhavv Viswanath</h1>
            <p>Student at Vit Vellore</p>
            <div className="button_container">
                <button className='btn btn_color1'>Download CV</button>
                <button className='btn btn_color2'>Contact Me</button>
            </div>
            <div className="social">
                <a href="https://github.com/Madhavv1GitHub"><i class="uil uil-github-alt"></i></a>
                <a href="https://www.linkedin.com/in/madhavv-viswanath-66043224b/"><i class="uil uil-linkedin"></i></a>
            </div>

        </div>
    </section>
  )
}

export default Profile
