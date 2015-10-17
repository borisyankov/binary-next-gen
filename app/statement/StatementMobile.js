import React from 'react';
import { MobilePage } from '../common';
import StatementCard from './StatementCard';

export default (props) => (
	<MobilePage>
		<StatementCard compact={true} {...props} />
	</MobilePage>
);
