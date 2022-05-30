import React from 'react';
import Tablo from './Tablo';
import {Buttons} from './Buttons';

type props = {
		counter: number
		addIncCallBack: () => void
		resetCallBack: () => void
		disableInc: boolean
		disableReset: boolean
		error: string
		maxValue: number
}

export const Counter: React.FC<props> = ({counter, addIncCallBack, resetCallBack, disableInc, disableReset, error,maxValue}) => {
		return (
				<div className="counter">
						<Tablo error={error}
						       counter={counter}
						       maxValue={maxValue}
						/>
						<Buttons addIncCallBack={addIncCallBack}
						         resetCallBack={resetCallBack}
						         disableInc={disableInc}
						         disableReset={disableReset}
						/>
				</div>
		);
};
