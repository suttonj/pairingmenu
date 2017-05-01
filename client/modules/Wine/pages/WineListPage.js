import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
//import VirtualList from 'react-virtual-list';

// Import Components
import PairingSuggestions from '../components/PairingSuggestions';
import WineCreateWidget from '../components/WineCreateWidget/WineCreateWidget';

// Import Actions
import { addWineRequest, fetchWines, deleteWineRequest } from '../WineActions';
import { toggleAddWine } from '../../App/AppActions';

// Import Selectors
import { getShowAddWine } from '../../App/AppReducer';
import { getWines } from '../WineReducer';

const WineList = ({
  virtual,
  itemHeight,
}) => (
  <ul style={virtual.style}>
    {virtual.items.map(item => (
      <li key={`item${item.id}`} className="list-group-item" style={{height: itemHeight }}>
        <div className="media-left">
          <img className="media-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4=" />
        </div>
        <div className="media-body">
          <h4 className="media-heading">{item.name}</h4>
          <p>{item.flavors}</p>
        </div>
      </li>
    ))}
  </ul>
);
const WinePairings = PairingSuggestions(WineList);
//const WineVirtualList = VirtualList()(WineListContent);

class WineListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWines());
  }

  handleDeleteWine = wine => {
    if (confirm('Do you want to delete this wine')) { // eslint-disable-line
      this.props.dispatch(deleteWineRequest(wine));
    }
  };

  handleAddWine = (name, title, content) => {
    this.props.dispatch(toggleAddWine());
    this.props.dispatch(addWineRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <WinePairings suggestions={this.props.wines} />
      </div>
    );
  }
}

        // <WineList handleDeleteWine={this.handleDeleteWine} wines={this.props.wines} />
// Actions required to provide data for this component to render in sever side.
WineListPage.need = [() => { return fetchWines(); }];

// Retrieve data from store as props
const mapStateToProps = (state) => {
  return {
    showAddWine: getShowAddWine(state),
    wines: getWines(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

WineListPage.propTypes = {
  wines: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    flavors: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  showAddWine: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

WineListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(WineListPage);
