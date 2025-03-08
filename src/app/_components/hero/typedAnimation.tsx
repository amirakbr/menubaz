'use client';

import { TypeAnimation } from 'react-type-animation';
const TypeAnimationC = () => {
	return (
		<TypeAnimation
			sequence={['کافی شاپ و فست فود', 1000, 'سفارش گیر آنلاین', 1000]}
			speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
			wrapper='span'
			repeat={Infinity}
		/>
	);
};
export default TypeAnimationC;
