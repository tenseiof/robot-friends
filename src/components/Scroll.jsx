export const Scroll = props => {
	return (
		<div
			style={{
				overflowY: 'scroll',
				border: '3px solid black',
				height: '723px'
			}}
		>
			{props.children}
		</div>
	);
};
