import React from 'react';
import Counter from '../Counter.component';
import PureButton from './PureButton.component';

export default function PureWrapper() {
	return (
		<Counter>
			{(increase, decrease) => (
				<React.Fragment>
					<PureButton onClick={increase} label="+" />
					<PureButton onClick={decrease} label="-" />
				</React.Fragment>
			)}
		</Counter>
	);
}
