import './App.css';
import React from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Output from './Output';
import { useState } from 'react';

//BitLy Access token: da239b687ac1cba62bc92b9a01ca02582d7c6d0c

function App() {
	const [url, setUrl] = useState('');
	const [newUrl, setNewUrl] = useState('');

	const getLink = async function (link) {
		const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer da239b687ac1cba62bc92b9a01ca02582d7c6d0c',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ long_url: `${link}`, domain: 'bit.ly' }),
		});
		const data = await response.json();
        setNewUrl(data.link);
		console.log(data.link);
	};

	const handleSubmit = function (e) {
		e.preventDefault();
		getLink(url);
	};

	return (
		<div className="App">
			<>
				<Header />
				<Form handleSubmit={handleSubmit} url={url} setUrl={setUrl} />
				<Output newUrl={newUrl} setNewUrl={setNewUrl} />
				<Footer />
                
			</>
		</div>
	);
}

export default App;
