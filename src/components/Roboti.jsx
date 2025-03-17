export function Roboti(props) {
	const { name, email, img } = props;
	return (
		<>
			<div className='robot-card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img
					className='robot-img'
					alt='robots'
					src={`https://robohash.org/${img}?200x200`}
				/>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</>
	);
}
