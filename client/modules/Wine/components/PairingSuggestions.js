import React, { Component } from 'react';
import VirtualList from 'react-virtual-list';

const PairingSuggestions = (MatchesList) => {
	return class PairingSuggestions extends Component {
		constructor(props) {
      super(props);

      const defaultItemCount = 100000;

      const items = props.suggestions;

      const state = {
        itemHeight: 100,
        itemCount: defaultItemCount,
        items: items,
        contained: false,
        containerHeight: 250,
        itemBuffer: 0,
      };
      
      this.state = state;

      this.MatchesVirtualList = VirtualList()(MatchesList);
    };

    render() {
      const MatchesVirtualList = this.MatchesVirtualList;

      return (
        <div className="row">
          <div className="col-xs-12" id="container" ref="container" style={{ overflow: 'scroll', height: this.state.containerHeight }}>
            <MatchesVirtualList
              items={this.state.items}
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