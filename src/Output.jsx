import React, { useState } from 'react';
import './Output.css';
import { FiCopy } from 'react-icons/fi';


const Output = ({ newUrl, clipboardMessage, }) => {
	

	return (
		<div className="output">
			<p>Here is your shortened Url:</p>
			<blockquote className="newUrl">
				{newUrl}
				<button
					className="copy"
					data-clipboard-target=".newUrl"
					style={{ display: `${newUrl ? 'block' : 'none'}` }}>
					<FiCopy />
				</button>
			</blockquote>
			<p className="message">{clipboardMessage}</p>
			
		</div>
	);
};

export default Output;
