import React from 'react';
import './components.css';

export default function ChangeDate({ date, setDate }) {
	
	function getPreviousDate() {
		date.setDate(date.getDate() - 1);
		setDate(new Date(date));
	}

	function resetDate() {
		setDate(new Date());
	}

	function getNextDate() {
		date.setDate(date.getDate() + 1);
		setDate(new Date(date));
	}

	return (
		<>
			<div className='buttons'>
				<button className='prev' onClick={() => getPreviousDate()}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32px'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M15 19l-7-7 7-7'
						/>
					</svg>
				</button>
				<button className='reset' onClick={() => resetDate()}>TODAY</button>
				<button className='next' onClick={() => getNextDate()}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						width='32px'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</button>
			</div>
		</>
	);
}
