import React, { Component } from 'react';
import './searchBar.css'
import FontAwesome from 'react-fontawesome';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }
  onQueryChange = (e) => {
    const query = e.target.value;
    this.setState({
      query
    })
  }
  render() {
    return(
      <div className="search-box-wrapper">
        <input type="text" onChange={this.onQueryChange} className="search-box-input"/>
        <button onClick={(e) => this.props.onSearch(this.state.query)} className="search-box-button">
        <FontAwesome
        name='search'
        size='lg' 
        style={{ padding: '8px'}} />  
        </button>
      </div>
    )
  }
}

export default SearchBar;