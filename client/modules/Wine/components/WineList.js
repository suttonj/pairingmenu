import React, { PropTypes } from 'react';

// Import Components
import WineListItem from './WineListItem/WineListItem';

const WineList = (props) => {
  return (
    <div className="listView">
      {
        props.wines.map(wine => (
          <WineListItem
            wine={wine}
            key={wine.name}
            onDelete={() => props.handleDeleteWine(wine.name)}
          />
        ))
      }
    </div>
  );
}

WineList.propTypes = {
  wines: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
    flavors: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  handleDeleteWine: PropTypes.func.isRequired,
};

export default WineList;
