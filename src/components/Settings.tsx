import React, {ChangeEvent} from 'react';
import {Button} from './UI/button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {changeErrorIncorrectInputValues, setIsChangingSettings, setNewSettings} from '../redux/counter-reducer';

type PropsType = {}

export const Settings = (props: PropsType) => {

		const dispatch = useDispatch()
		const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
		const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
		const isChanging = useSelector<AppRootStateType, boolean>(state => state.counter.isChanging)
		const inCorrectInputValues = useSelector<AppRootStateType, boolean>(state => state.counter.inCorrectInputValues)

		const [tempStartValue, setTempStartValue] = React.useState(startValue)
		const [tempMaxValue, setTempMaxValue] = React.useState(maxValue)

		const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
				dispatch(setIsChangingSettings(true))
				setTempMaxValue(Math.floor(+e.currentTarget.value))
				checkValues(tempStartValue, +e.currentTarget.value)
		}
		const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
				dispatch(setIsChangingSettings(true))
				setTempStartValue(Math.floor(+e.currentTarget.value))
				checkValues(+e.currentTarget.value, tempMaxValue)
		}

		const checkValues = (tempStartValue: number, tempMaxValue: number) => {
				if (tempStartValue >= tempMaxValue || tempStartValue < 0 || tempMaxValue > 10) {
						dispatch(changeErrorIncorrectInputValues(true))
				} else {
						dispatch(changeErrorIncorrectInputValues(false))
				}
		}

		const onSetClickHandler = () => {
				dispatch(setIsChangingSettings(false))
				dispatch(setNewSettings(tempMaxValue,tempStartValue))
		}

		return (
				<div className="settings">
						<div>
								<div>max value:</div>
								<input
										className={inCorrectInputValues ? 'input-error input-settings' : 'input-settings'}
										onChange={onChangeMaxValue}
										value={tempMaxValue} type="number"/>
						</div>
						<div>
								<div>start value:</div>
								<input
										className={inCorrectInputValues ? 'input-error input-settings' : 'input-settings'}
										onChange={onChangeStartValue}
										value={tempStartValue} type="number"/>
						</div>
						<div>
								<Button className={'btn'} name={'set'}
								        disabled={!isChanging || inCorrectInputValues}
								        callBack={onSetClickHandler}
								/>
						</div>
				</div>
		);
};
