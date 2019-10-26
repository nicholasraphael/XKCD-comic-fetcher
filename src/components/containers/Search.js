import React from 'react';
import axios from 'axios';
import Results from './Results';

class Search extends React.Component {
    state = {
        query: '',
        results:[]
    }


    getImage = (event) => {
        if(parseInt(this.state.query) > 1 && parseInt(this.state.query) < 2219) { 
            axios.get(`https://xkcd.now.sh/?comic=${this.state.query}`)
            .then(({data}) => {
                this.setState({
                    results: data
                })
            });
        } 
        
        event.preventDefault()
    }

    handleSearchInput = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        return(
            <div className='container-fluid'>
                <h1>Search</h1>
                <form onSubmit={this.getImage}> 
                    <input className="searchInput" type="text" placeholder="Search.." onChange={event => this.handleSearchInput(event)}/>
                    <button className="searchSubmit" type='submit'>Search</button>
                    <br/>
                    <div className="results">
                        <Results results={this.state.results}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;