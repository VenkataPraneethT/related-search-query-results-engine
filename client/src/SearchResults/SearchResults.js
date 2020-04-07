import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './SearchResults.css';

export default class SearchResults extends PureComponent {
    render() {
        const {selectedSummaries} = this.props;
        return (
            <div className="search-results-container">
                {selectedSummaries.map((summary, id) => 
                    <div className="summary-card-container" key={id}>
                        <h4>{summary.title}</h4>
                        <p className="summary-description-container">{summary.summary}</p>
                        <hr></hr>
                        <p>{summary.author}</p>
                    </div>
                )}
            </div>
        )
    }
};