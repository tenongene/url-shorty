import './App.css';
import React from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Output from './Output';
//Access token: da239b687ac1cba62bc92b9a01ca02582d7c6d0c
//
function App() {


	const handleSubmit = async (e) => {
		e.preventDefault();
		
        const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
		method: 'POST',
		headers: {
			Authorization: 'Bearer {da239b687ac1cba62bc92b9a01ca02582d7c6d0c}',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ long_url: 'link', domain: 'bit.ly'}),
	});
        const data = await response.json();
        console.log(data.link);

	};

	return (
		<div className="App">
			<>
				<Header />
				<Form  handleSubmit={handleSubmit}/>
				<Output />
				<Footer />
			</>
		</div>
	);
}

export default App;
