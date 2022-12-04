import React from 'react';
import Lottie from 'lottie-react';
import developer from './developer.json';

const Developer = () => (
	<Lottie
		animationData={developer}
		loop={true}
	/>
);

export default Developer;
