import React from 'react';

const Header = () => {
	const headerStyle = {
		backgroundColor: 'rgb(105, 236, 175)',
		marginBottom: '50px',
		fontSize: '20px',
		padding: ' 20px',
        
		
	};

	return (
		<div className="header" style={headerStyle}>
			<h2>Shorten Your URL</h2>
		</div>
	);
};

export default Header;
