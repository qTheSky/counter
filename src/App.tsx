import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/UI/Counter';
import {Settings} from './components/Settings';

export type ErrorType = 'work' | 'incorrect value' | 'enter values and press set'

export function App() {

		const [maxValue, setMaxValue] = useState(localStorage.getItem('counterMaxValue') ? Number(localStorage.getItem('counterMaxValue')) : 5)
		const [startValue, setStartValue] = useState(localStorage.getItem('counterStartValue') ? Number(localStorage.getItem('counterStartValue')) : 0)
		const [counter, setCounter] = useState<number>(startValue)
		const [error, setError] = useState<ErrorType>('work')




		const addIncCallBack = () => {
				setCounter(counter + 1)
		}
		const resetCallBack = () => {
				setCounter(startValue)
		}
		const setSettings = (startValue: number, maxValue: number) => {
				setMaxValue(maxValue)
				setStartValue(startValue)
				setCounter(startValue)
				setError('work')
				localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
				localStorage.setItem('counterStartValue', JSON.stringify(startValue))
		}

		const disableInc = counter === maxValue || error !== 'work'
		const disableReset = counter === startValue || error !== 'work'

		return (
				<div className="App">
						<Settings error={error}
						          setError={setError}
						          setSettings={setSettings}
						          maxValue={maxValue}
						          startValue={startValue}
						/>
						<Counter counter={counter}
						         addIncCallBack={addIncCallBack}
						         resetCallBack={resetCallBack}
						         disableInc={disableInc}
						         disableReset={disableReset}
						         error={error}
						         maxValue={maxValue}
						/>
				</div>
		);
}

