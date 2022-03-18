import React from 'react';
import './Form.css';

const Form = ({handleSubmit}) => {
	return (
		<form className="input">
			<label htmlFor="url" className="label">
				Enter Url:
			</label>
			<input
				placeholder="Paste your url here"
				id="url"
				type="text"
				required
				autoFocus
				onSubmit={handleSubmit}
			/>

			<button type="submit" className="btn">
				Shorten
			</button>
		</form>
	);
};

export default Form;
