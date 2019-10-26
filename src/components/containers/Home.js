import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    state = {
        results:[]
    };

    componentDidMount = () => {
        axios(`https://xkcd.now.sh/?comic=latest`)
        .then(({data}) => {
            this.setState({
                results: data
            })
        })
    }

    render() {
        console.log(this.state.results)
        return (
            <div>
                <h1>Home</h1>
                <div>
                    <img clasName="latestImage" title={this.state.results.alt} alt={this.state.results.title} src={this.state.results.img}></img>
                </div>
            </div>
        );
    }
}

export default Home;