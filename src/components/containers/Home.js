import React from 'react';
import axios from 'axios';

/**
 * The Home compnent container.
 *
 * @visibleName Home
 */
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
            <div className="container-fluid">
                <h1>Home</h1>
                <div>
                    <h2>{this.state.results.title}</h2>
                    <img className="latestImage" title={this.state.results.alt} alt={this.state.results.title} src={this.state.results.img}></img>
                    <br/>
                    <h4>{this.state.results.alt}</h4>
                </div>
            </div>
        );
    }
}

export default Home;