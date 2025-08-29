import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer_section py-md-4 py-3'>
      <div className="container">
        <div className="footer_content text-center text-white">
          <p className="mb-0">
            Copyright © {currentYear} 
            <a href="#" className='text-decoration-none text-white'> Nimra</a>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
