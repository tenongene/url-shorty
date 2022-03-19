import React, { useState } from 'react';
import './Output.css';
import { FiCopy } from 'react-icons/fi';
import Clipboard from 'clipboard';

const Output = ({ newUrl }) => {

    const [clipMessage, setClipMessage] = useState('')
	const clippy = new Clipboard('.copy');
	clippy.on('success', () => {
        setClipMessage('Copied to clipboard')
	});

	return (
		<div className="output">
			<p>Here is your shortened Url:</p>
			<blockquote className="newUrl">
				{newUrl}
				<button className="copy" data-clipboard-target=".newUrl">
					<FiCopy />
				</button>
			</blockquote>
			<p className='message'>{clipMessage}</p>
		</div>
	);
};

export default Output;
