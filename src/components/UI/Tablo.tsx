import React from 'react';

type props = {
		counter: number
		disableInc: boolean
}


const Tablo: React.FC<props> = ({counter,disableInc}) => {
		const tabloClasses = disableInc ? 'tablo-red tablo' : 'tablo'
		return (
				<div className={tabloClasses}>{counter}</div>
		);
};

export default Tablo;