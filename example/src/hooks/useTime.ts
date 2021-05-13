import React from 'react';

const useTime = () => {
	const [date, setDate] = React.useState(new Date());

	React.useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	const time = date.toLocaleTimeString('en-IT', { hour12: false });

	return {
		time,
	};
};

export default useTime;
