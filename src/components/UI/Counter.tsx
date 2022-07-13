import React from 'react';
import Tablo from './Tablo';
import {Buttons} from './Buttons';

type props = {}

export const Counter: React.FC<props> = ({}) => {
		return (
				<div className="counter">
						<Tablo/>
						<Buttons/>
				</div>
		);
};
