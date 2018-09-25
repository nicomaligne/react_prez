import React from 'react';
import Counter from '../Counter.component';
import ReactComponent from './React.component';

export default function ReactComponentWrapper() {
	return (
		<Counter>
			{(increase, decrease) => (
				<React.Fragment>
					<ReactComponent onClick={increase} label="+" />
					<ReactComponent onClick={decrease} label="-" />
				</React.Fragment>
			)}
		</Counter>
	);
}
