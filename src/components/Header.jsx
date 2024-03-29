import React from 'react'

const Header = () => {
  return (
    <nav>
        <NavContent/>
    </nav>
  )
}

const NavContent = () => (
    <>
    <h1 className='font-bold'>Aryan Patel</h1>
    <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
    </div>
    <a href="mailto:aryanpat18@gmail.com">
        <button>Email</button>
    </a>
    </>
)

export default Header