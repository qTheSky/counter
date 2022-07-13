import React from 'react';
import './App.css';
import {Counter} from './components/UI/Counter';
import {Settings} from './components/Settings';


export function App() {

		return (
				<div className="container">
						<Settings/>
						<Counter/>
				</div>
		);
}

