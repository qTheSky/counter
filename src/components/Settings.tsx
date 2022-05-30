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
				console.log(props.error)
		}
		const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
				const startValueAsNumber = JSON.parse(e.currentTarget.value)
				checkValues(startValueAsNumber, maxValue)
				setStartValue(startValueAsNumber)
				console.log(props.error)
		}
		const onSetClickHandler = () => {
				props.setSettings(startValue, maxValue)
		}

		return (
				<div className="settings">
						<div>
								<div>max value:</div>
								<input className={props.error === 'incorrect value' ? 'input-error' : ''} onChange={onChangeMaxValue}
								       value={maxValue} type="number"/>
						</div>
						<div>
								<div>start value:</div>
								<input className={props.error === 'incorrect value' ? 'input-error' : ''} onChange={onChangeStartValue}
								       value={startValue} type="number"/>
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
