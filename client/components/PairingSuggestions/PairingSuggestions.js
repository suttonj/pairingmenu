import React, { Component } from 'react';
import styles from './PairingSuggestions.css';

class PairingSuggestions extends Component {
	constructor(props) {
    super(props);

    const defaultItemCount = 10;

    const items = props.suggestions;

    const state = {
      itemHeight: 100,
      itemCount: defaultItemCount,
      items: items,
      contained: true,
      containerHeight: 500,
      itemBuffer: 0,
    };
    
    this.state = state;

    this.renderSuggestions = this.renderSuggestions.bind(this);
  }

  componentWillUpdate(nextProps) {
  	console.log("pairing suggestions");
  }

  renderSuggestions(suggestions) {
    console.log(suggestions);
    return suggestions.map(suggestion => (
        <div className={styles['card']}>
          <div className={styles['card-top']}>
            <div className={styles.image}>
              <img className={styles['image']} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4=" />
            </div>
            <div className={styles['score']}>{suggestion.score}</div>
          </div>
          <div className={styles['card-metadata']}>
            <div className={styles['title']}>{suggestion.name}</div>
            <div className={styles.flavors}>{suggestion.flavors.join(", ")}</div>
          </div>
        </div>
      ));
  }

  render() {
console.log(this.props.suggestions);
    return (
      <div className="row">
        <div className="col-xs-12" id="container" ref="container" style={{ height: this.state.containerHeight }}>
          { this.renderSuggestions(this.props.suggestions) }
        </div>
      </div>
    );
  }
}

export default PairingSuggestions;