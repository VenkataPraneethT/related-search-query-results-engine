import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import './HomePage.css';
import SearchResults from '../SearchResults/SearchResults';

export default class HomePage extends PureComponent {
  // abortController = new AbortController();
  constructor(props) {
    super(props);
    this.state = {
      summaries: null,
      selectedSummaries: [],
      currentSelectedItem: null,
      currentSelectedItemTitle: '',
      showSuggestions: false
    };
    this.abortController= new AbortController()
  }

  getSelectedItemDetails = (event) => {
    const {summaries} = this.state;
    const filteredItems = summaries.filter((summary) => summary.id === event.target.value);
    const selectedItem =  filteredItems ? filteredItems[0] : {};
    this.setState((prevState) => ({
      ...prevState,
      currentSelectedItem: selectedItem,
      currentSelectedItemTitle: selectedItem.title,
      showSuggestions: false
    }))
  }

  submitBtnPressed = () => {
      this.setState((prevState) => ({
        ...prevState,
        selectedSummaries: [
          ...prevState.selectedSummaries,
          prevState.currentSelectedItem
        ],
        currentSelectedItemTitle: ''
      }))
  }

  getQUeryResults = async (summaryQuery) => {
      const query = {
        queries: [summaryQuery],
        count: 3
      };
      this.abortController.abort(); // Cancel the previous request
      this.abortController = new AbortController();
    
      try {
        let response = await fetch("/api/query/results", { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(query),
            signal: this.abortController.signal 
        });
        let data = await response.json();
        this.setState((prevState) => ({
          ...prevState,
          summaries: data[0],
          showSuggestions: true
        }));
      }
      catch (ex) {
        if (ex.name === 'AbortError') {
          return; 
        }
        throw ex;
      }
  }

  handleSearchChange = event => {
    this.setState({
      currentSelectedItemTitle: event.target.value
    })
    if(event.target.value && event.target.value.length >= 7) {
      this.getQUeryResults(event.target.value)
    }    
  };

  renderBooks = () => {
    const {selectedSummaries} = this.state;
    if(selectedSummaries && selectedSummaries.length > 0) {
      return (
        <SearchResults
          selectedSummaries={selectedSummaries}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <div className="home-page">
        <Header />
        <SearchBar 
          textChange={this.handleSearchChange} 
          summaries={this.state.summaries} 
          getSelectedItemDetails={this.getSelectedItemDetails}
          submitBtnPressed={this.submitBtnPressed}
          currentSelectedItemTitle={this.state.currentSelectedItemTitle}
          showSuggestions={this.state.showSuggestions}
        />
        {this.renderBooks()}
      </div>
    );
  }
}
