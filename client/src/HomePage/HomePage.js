import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import './HomePage.css';

export default class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    debugger
  };

  render() {
    return (
      <div className="home-page">
        <Header />
        <SearchBar textChange={this.handleSearchChange} />
        {/* <EmojiResults emojiData={this.state.filteredEmoji} /> */}
      </div>
    );
  }
}
