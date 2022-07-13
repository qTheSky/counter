import {ActionsType} from './store';

export type incCurrentValueType = {
		type: 'INC-VALUE'
}
export type resetCurrentValueType = {
		type: 'RESET-VALUE'
}
export type setIsChangingSettingsType = {
		type: 'CHANGING-SETTINGS'
		mode: boolean
}
export type setNewSettingsType = {
		type: 'SET-NEW-SETTINGS'
		maxValue: number
		startValue: number
}
export type changeErrorIncorrectInputValues = {
		type: 'CHANGE-ERROR-INCORRECT-VALUES'
		value: boolean
}


const initialState = {
		currentValue: 0,
		maxValue: 3,
		startValue: 0,
		disableResetButton: true,
		isChanging: false,
		inCorrectInputValues: false,
}
export const counterReducer = (state = initialState, action: ActionsType) => {
		switch (action.type) {
				case 'INC-VALUE': {
						return {...state, currentValue: state.currentValue + 1, disableResetButton: false}
				}
				case 'RESET-VALUE': {
						return {...state, currentValue: state.startValue}
				}
				case 'CHANGING-SETTINGS': {
						return {...state, isChanging: action.mode}
				}
				case 'SET-NEW-SETTINGS': {
						return {...state, startValue: action.startValue, maxValue: action.maxValue, currentValue: action.startValue}
				}
				case 'CHANGE-ERROR-INCORRECT-VALUES': {
						return {...state, inCorrectInputValues: action.value}
				}
				default:
						return state;
		}
}

export const incCurrentValue = (): incCurrentValueType => {
		return {type: 'INC-VALUE'} as const
}
export const resetCurrentValue = (): resetCurrentValueType => {
		return {type: 'RESET-VALUE'} as const
}
export const setIsChangingSettings = (mode: boolean): setIsChangingSettingsType => {
		return {type: 'CHANGING-SETTINGS', mode} as const
}
export const setNewSettings = (maxValue: number, startValue: number): setNewSettingsType => {
		return {type: 'SET-NEW-SETTINGS', maxValue, startValue} as const
}
export const changeErrorIncorrectInputValues = (value: boolean): changeErrorIncorrectInputValues => {
		return {type: 'CHANGE-ERROR-INCORRECT-VALUES', value} as const
}
