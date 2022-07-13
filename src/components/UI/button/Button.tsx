import React from 'react';

type props = {
		className: string
		name: string
		disabled?: boolean
		callBack: () => void
}

export const Button: React.FC<props> = ({className, name, disabled, callBack}) => {
		return (
				<button onClick={callBack} className={className} disabled={disabled}>{name}</button>
		);
};

