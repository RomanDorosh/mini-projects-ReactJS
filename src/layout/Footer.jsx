import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <h3>
                <a className='footer-link' href='https://www.linkedin.com/in/roman-dorosh-2b26121bb/' target='_blank'><FaLinkedin /></a>
                <a className='footer-link' href='https://github.com/RomanDorosh' target='_blank'><FaGithub /></a>
            </h3>
        </div>
    )
}

export default Footer



