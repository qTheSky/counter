import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';

type props = {}


const Tablo: React.FC<props> = ({}) => {
		const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
		const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
		const inCorrectInputValues = useSelector<AppRootStateType, boolean>(state => state.counter.inCorrectInputValues)


		const counterClassName = currentValue === maxValue ? 'red-color fontsize100' : 'fontsize100'
		const errorsClassName = inCorrectInputValues ? 'red-color tablo-errors' : 'tablo-errors'
		const value = useSelector<AppRootStateType, number>(state => state.counter.currentValue)

		const isChanging = useSelector<AppRootStateType, boolean>(state => state.counter.isChanging)

		return (
				<div className={'tablo'}>
						{isChanging
								? <span
										className={errorsClassName}>{inCorrectInputValues ? 'Incorrect values!' : 'Enter values and press set'}</span>
								: <span className={counterClassName}>{value}</span>
						}
				</div>
		);
};

export default Tablo;