import React from 'react';
import Tablo from './Tablo';
import {Buttons} from './Buttons';

type props = {
		counter: number
		addIncCallBack: () => void
		resetCallBack: () => void
		disableInc: boolean
		disableReset: boolean
}

export const Counter: React.FC<props> = ({counter, addIncCallBack, resetCallBack, disableInc, disableReset}) => {
		return (
				<div className="counter">
						<Tablo counter={counter} disableInc={disableInc}/>
						<Buttons addIncCallBack={addIncCallBack}
						         resetCallBack={resetCallBack}
						         disableInc={disableInc}
						         disableReset={disableReset}
						/>
				</div>
		);
};
