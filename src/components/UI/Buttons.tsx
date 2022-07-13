import React from 'react';
import {Button} from './button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {incCurrentValue, resetCurrentValue} from '../../redux/counter-reducer';
import {AppRootStateType} from '../../redux/store';

type props = {}

export const Buttons: React.FC<props> = () => {
		const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
		const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
		const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
		const disabledRestButton = useSelector<AppRootStateType, boolean>(state => state.counter.disableResetButton)
		const isChanging = useSelector<AppRootStateType, boolean>(state => state.counter.isChanging)


		const dispatch = useDispatch()
		const incValue = () => {
				dispatch(incCurrentValue())
		}
		const resetValue = () => {
				dispatch(resetCurrentValue())
		}

		return (
				<div className="buttons">
						<Button className={'btn'} disabled={currentValue >= maxValue||isChanging} name={'inc'} callBack={incValue}/>
						<Button className={'btn'} disabled={disabledRestButton || startValue === currentValue||isChanging} name={'reset'}
						        callBack={resetValue}/>
				</div>
		);
};