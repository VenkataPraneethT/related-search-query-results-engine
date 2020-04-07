import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

export default class SearchBar extends PureComponent {

  static propTypes = {
    textChange: PropTypes.func
  };

  renderItems = () => {
    const {summaries, showSuggestions} = this.props;
    if(summaries && summaries.length > 0 && showSuggestions) {
      return (
      <ul>
        {summaries.map((item) => <li key={item.id} className="list-items" onClick={this.props.getSelectedItemDetails} value={item.id}>{item.title}</li>)}
      </ul>
      );
    }
    return null;
  }

  render() {
    return (
        <div className="search-bar">
          <div className="search-container">
            <input onChange={this.props.textChange} type="text" placeholder="Search summaries..." value={this.props.currentSelectedItemTitle}/>
            {this.renderItems()}
          </div>
          <div className="button-container">
              <button type="button" onClick={this.props.submitBtnPressed} disabled={!this.props.currentSelectedItemTitle}>Submit</button>
          </div>
        </div>
    );
  }

}
// const SearchBar = () => (
//   <div className="SearchBar">
//     <input onChange={this.handleChange} />
//   </div>
// );
