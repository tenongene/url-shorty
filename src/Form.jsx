import React from 'react';
import './Form.css';

const Form = () => {
	return (
		<form className="input">
			<label for="url" className="label">
				Enter Url:
			</label>
			<input placeholder="Paste your url here" id="url" type="text" value="" required />
            <button type="submit" className="btn">Submit</button>
		</form>
	);
};

export default Form;
