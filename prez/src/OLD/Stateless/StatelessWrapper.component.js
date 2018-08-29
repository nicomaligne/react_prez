import React from 'react';
import Counter from '../Counter.component';
import StatelessButton from './StatelessButton.component';

export default function StatelessWrapper() {
	return (
		<Counter>
			{(increase, decrease) => (
				<React.Fragment>
					<StatelessButton onClick={increase} label="+" />
					<StatelessButton onClick={decrease} label="-" />
				</React.Fragment>
			)}
		</Counter>
	);
}
