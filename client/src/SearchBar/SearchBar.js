import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

export default class SearchBar extends PureComponent {

  constructor(props) {
    super(props);
    this.items = [
      "David",
      "Daniel",
      "Sara",
      "Jack"
    ];
  }
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event.target.value);
  };

  renderItems()  {
    const {summaries} = this.props;
    if(summaries && summaries.length > 0) {
      return (
      <ul>
        {this.items.map((item, id) => <li key={id}>{item}</li>)}
      </ul>
      );
    }
    return null;
  }

  render() {
    return (
        <div className="search-bar">
          <div className="search-container">
            <input onChange={this.handleChange} type="text" placeholder="Search summaries..."/>
            {this.renderItems()}
          </div>
          <div>
              <button type="button">Submit</button>
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
