import React from 'react';

type props = {
		counter: number
		error: string
		maxValue: number
}


const Tablo: React.FC<props> = ({counter, error, maxValue}) => {
		const counterClassName = counter === maxValue ? 'red-color fontsize80' : 'fontsize80'
		const errorsClassName = error === 'incorrect value' ? 'red-color tablo-errors' : 'tablo-errors'
		return (
				<div className={'tablo'}>
						{error === 'work'
								? <span className={counterClassName}>{counter}</span>
								: <span className={errorsClassName}>{error}</span>}
				</div>
		);
};

export default Tablo;