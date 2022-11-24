import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-logo'>
                <svg width="179" height="214" viewBox="0 0 179 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M172.426 6.24099V53.2065H149.241V29.4257H101.093V77.5743H172.426V172.092H101.093V199.088L77.9078 175.904V125.127H101.093V148.908H149.241V100.759H77.9078V29.4257H38.4749L15.2902 6.24099H172.426ZM178.667 0H0.333496V0.117414L35.8828 35.6667H71.6668V107H143V142.667H107.334V118.886H71.6668V178.487L107.171 213.991H107.334V178.324H178.667V71.3333H107.334V35.6667H143V59.4475H178.667V0Z" fill="white"/>
                </svg>
            </div>
            <div className='footer-home footer-list'>
                <h4>Home</h4>
                <p>My Process</p>
                <p>Importance of UX</p>
                <p>About Me</p>
            </div>
            <div className='footer-uxuiwork footer-list'>
                <h4>UX/UI Work</h4>
                <p>Project 01</p>
                <p>Project 02</p>
                <p>Project 03</p>
                <p>Project 04</p>
            </div>
            <div className='footer-artanddesign footer-list'>
                <h4>Art & Design</h4>
                <p>Project 01</p>
                <p>Project 02</p>
                <p>Project 03</p>
                <p>Project 04</p>
            </div>
            <div className='footer-contact footer-list'>
                <div className='footer-email'>
                    <h4>Contact</h4>
                    <p>stevenodendaal98@gmail.com</p>
                </div>
                <div className='footer-socials'>
                    <h4>Socials</h4>
                </div>
            </div>
        </div>
        <div className='footer-madeby'>
            <p>Proudly made by me :)</p>
        </div>
    </div>
  )
}

export default Footer