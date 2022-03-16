import React from 'react'
import './Footer.css';

const Footer = () => {

    const footerStyle = {
		backgroundColor: 'cornsilk',
		fontSize: '20px',
		padding: '1px px',
		borderRadius: '10px',
	};

  return (
    <div className="footer" style={footerStyle}>
        <h6>React project lessons series by Tenongene &copy; 2022</h6>
    </div>
  )
}

export default Footer