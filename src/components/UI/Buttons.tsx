import React from 'react';
import {Button} from './button/Button';

type props = {
		addIncCallBack: () => void
		resetCallBack: () => void
		disableInc: boolean
		disableReset: boolean
}

export const Buttons: React.FC<props> = ({addIncCallBack, resetCallBack, disableInc, disableReset}) => {

		return (
				<div className="buttons">
						<Button className={'btn'} disabled={disableInc} name={'inc'} callBack={addIncCallBack}/>
						<Button className={'btn'} disabled={disableReset} name={'reset'} callBack={resetCallBack}/>
				</div>
		);
};