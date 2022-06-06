import React, {ChangeEvent, useState} from 'react';
import {Button} from './UI/button/Button';
import {ErrorType} from '../App';

type PropsType = {
		error: string
		setError: (error: ErrorType) => void
		setSettings: (startValue: number, maxValue: number) => void
		maxValue: number
		startValue: number
}

export const Settings = (props: PropsType) => {

		const [maxValue, setMaxValue] = useState(props.maxValue)
		const [startValue, setStartValue] = useState(props.startValue)

		const checkValues = (startValue: number, maxValue: number) => {
				if (startValue >= maxValue || startValue < 0 || maxValue > 10) {
						props.setError('incorrect value')
				} else props.setError('enter values and press set')
		}

		const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
				const maxValueAsNumber = JSON.parse(e.currentTarget.value)
				checkValues(startValue, maxValueAsNumber)
				setMaxValue(maxValueAsNumber)
		}
		const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
				const startValueAsNumber = JSON.parse(e.currentTarget.value)
				checkValues(startValueAsNumber, maxValue)
				setStartValue(startValueAsNumber)
		}
		const onSetClickHandler = () => {
				props.setSettings(Math.floor(startValue), Math.floor(maxValue))
		}

		return (
				<div className="settings">
						<div>
								<div>max value:</div>
								<input className={props.error === 'incorrect value' ? 'input-error input-settings' : 'input-settings'} onChange={onChangeMaxValue}
								       value={maxValue.toFixed()} type="number"/>
						</div>
						<div>
								<div>start value:</div>
								<input className={props.error === 'incorrect value' ? 'input-error input-settings' : 'input-settings'} onChange={onChangeStartValue}
								       value={startValue.toFixed()} type="number"/>
						</div>
						<div>
								<Button className={'btn'} name={'set'}
								        disabled={props.error === 'incorrect value' || props.error === 'work'}
								        callBack={onSetClickHandler}
								/>
						</div>
				</div>
		);
};
