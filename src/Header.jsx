import React from 'react';

const Header = () => {
	const headerStyle = {
		backgroundColor: 'cornsilk',
		margin: '50px',
		fontSize: '30px',
		padding: '1px 20px',
		borderRadius: '10px',
	};

	return (
		<div className="header" style={headerStyle}>
			<h2>Shorten Your URL</h2>
		</div>
	);
};

export default Header;
