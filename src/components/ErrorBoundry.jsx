import { Component } from 'react';

// const ErrorBoundry = () => {
// 	const [hasErrorState, setErrorState] = useState(false);
// 	const componentDidCatch((error, info) => {
// 		setErrorState(true);
// 	});
// 	if (hasErrorState) {
// 		return <h1>Oooops, something went wrong...</h1>;
// 	}
// 	return this.props.children;
// }

// export default ErrorBoundry;

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oooops, something went wrong...</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundry;
