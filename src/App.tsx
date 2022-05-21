import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/UI/Counter';

export function App() {

		const maxValue = 7
		const startValue = -1

		const [counter, setCounter] = useState<number>(startValue)

		const addIncCallBack = ()=> {
				setCounter(counter+1)
		}
		const resetCallBack = () => {
		  setCounter(startValue)
		}

		const disableInc = counter === maxValue
		const disableReset = counter === startValue

		return (
				<div className="App">
						<Counter counter={counter}
						         addIncCallBack={addIncCallBack}
						         resetCallBack={resetCallBack}
						         disableInc={disableInc}
						         disableReset={disableReset}
						/>
				</div>
		);
}

