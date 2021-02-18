import React , { Component } from 'react';
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";


class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
        })
            .then(users => {
                this.setState({ robots: users});
        })

    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render () {
        const askedRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) { //can also write !this.state.robots.length as this would mean 0
            return <h2 className='tc'>Loading</h2>
        }
        else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {askedRobot}/>
                        </ErrorBoundary>
                    </Scroll>
                    {/* state becomes a prop cz robots is then passed down as a prop to CardList*/}
                </div>
            );
        }
    }
}

export default App;