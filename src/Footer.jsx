import React from 'react'
import './Footer.css';

const Footer = () => {

    const footerStyle = {
		backgroundColor: '#1a237e',
		fontSize: '20px',
		padding: '40px 20px',
	};

  return (
    <div className="footer" style={footerStyle}>
        <h6>React project lessons series by Tenongene &copy; 2022</h6>
    </div>
  )
}

export default Footer
