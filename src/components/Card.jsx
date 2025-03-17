// import { robots } from '../bratki';
import { Roboti } from './Roboti';

const Card = ({ robots }) => {
	return (
		<>
			{robots.map(robots => (
				<Roboti
					key={robots.id}
					name={robots.name}
					email={robots.email}
					img={robots.id}
				/>
			))}
		</>
	);
};

export default Card;
