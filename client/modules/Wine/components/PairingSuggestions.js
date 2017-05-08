import React, { Component } from 'react';
import VirtualList from 'react-virtual-list';

const PairingSuggestions = (MatchesList) => {
	return class PairingSuggestions extends Component {
		constructor(props) {
      super(props);

      const defaultItemCount = 10;

      const items = props.suggestions;

      const state = {
        itemHeight: 100,
        itemCount: defaultItemCount,
        items: items,
        contained: true,
        containerHeight: 250,
        itemBuffer: 0,
      };
      
      this.state = state;

      this.MatchesVirtualList = VirtualList()(MatchesList);
    }

    componentWillUpdate(nextProps) {
    	console.log("pairing suggestions");
    }

    render() {
      const MatchesVirtualList = this.MatchesVirtualList;
console.log(this.props.suggestions);
      return (
        <div className="row">
          <div className="col-xs-12" id="container" ref="container" style={{ overflow: 'scroll', height: this.state.containerHeight }}>
            <MatchesVirtualList
              items={this.props.suggestions}
              itemBuffer={this.state.itemBuffer}
              itemHeight={this.state.itemHeight}
            />
          </div>
        </div>
      );
    };
	};
};
//<WineVirtualList items={this.props.wines} itemHeight={200} />
export default PairingSuggestions;