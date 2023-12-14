import { Cat } from '@/svgs';
import { FC } from 'react';

import { useIdle } from 'react-use';

export const Home: FC = () => {
	const isIdle = useIdle(300);

	return (
		<div>
			<h1>Welcome to your Next.js Boilerplate</h1>

			<div>
				<div>
					<Cat />
				</div>

				<div>
					<div>
						<h2>Default heading</h2>

						<p>(xl) This is default text!</p>
						<p>(lg) This is default text!</p>
						<p>(md) This is default text!</p>
						<p>(sm) This is default text!</p>
						<p>(xs) This is default text!</p>
					</div>

					<div>
						<button>Submit</button>
					</div>
				</div>
			</div>

			<p>User is idle: {isIdle ? 'Yes 😴' : 'Nope'}</p>
		</div>
	);
};

export default Home;
