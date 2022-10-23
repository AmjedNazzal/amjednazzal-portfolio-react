import React from 'react';
import { SpinnerCircular } from 'spinners-react';


export const Loading = () => {
	return(
		<div className="col-12">
			<SpinnerCircular size={100}color='#fff' />
			<h1>Please Wait . . .</h1>
		</div>
	);
};