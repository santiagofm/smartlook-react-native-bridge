import { useEffect, useState } from 'react';

const useAsync = <T>(fn: () => Promise<T>) => {
	const [res, setRes] = useState<T | undefined>();
	useEffect(() => {
		let cancel = false;
		fn().then((_res) => {
			if (cancel) return;
			setRes(_res);
		});
		return () => {
			cancel = true;
		};
	}, [fn]);
	return res;
};

export default useAsync;
