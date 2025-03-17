import { useState, useEffect } from 'react';
import { SearchBox } from '../components/SearchBox';
import Card from '../components/Card';
import { Scroll } from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {
	const [robotsState, setRobotsState] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	const filteredRobots = robotsState.filter(robots => {
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
	});

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobotsState(users));
	}, []);

	const onSearchChange = event => {
		setSearchfield(event.target.value);
	};

	if (robotsState.length) {
		return (
			<>
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<Card robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			</>
		);
	}
	return <h1 className='tc f1'>Loading</h1>;
};

export default App;

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			robots: [],
// 			searchfield: ''
// 		};
// 	}

// 	componentDidMount() {
// 		fetch('https:/jsonplaceholder.typicode.com/users')
// 			.then(response => response.json())
// 			.then(users => this.setState({ robots: users }));
// 	}

// 	onSearchChange = event => {
// 		this.setState({ searchfield: event.target.value });
// 	};

// 	render() {
// 		const filteredRobots = this.state.robots.filter(robots => {
// 			return robots.name
// 				.toLowerCase()
// 				.includes(this.state.searchfield.toLowerCase());
// 		});
// 		return (
// 			<>
// 				<div className='tc'>
// 					<h1 className='f1'>RoboFriends</h1>
// 					<SearchBox searchChange={this.onSearchChange} />
// 					<Card robots={filteredRobots} />
// 				</div>
// 			</>
// 		);
// 	}
// }

// export default App;
