import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
//import VirtualList from 'react-virtual-list';

// Import Components
import PairingSuggestions from '../../../components/PairingSuggestions/PairingSuggestions';
import WineCreateWidget from '../components/WineCreateWidget/WineCreateWidget';

// Import Actions
import { addWineRequest, fetchWines, deleteWineRequest } from '../WineActions';
import { toggleAddWine } from '../../App/AppActions';

// Import Selectors
import { getShowAddWine } from '../../App/AppReducer';
import { getWines } from '../WineReducer';

class WineListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWines());
  }

  componentWillUpdate(nextProps, nextState) {
    console.dir(nextProps);
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
      <div className="content">
        <PairingSuggestions suggestions={this.props.wines} />
      </div>
    );
  }
}

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
