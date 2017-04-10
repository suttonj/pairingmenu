import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './WineListItem.css';

const WineListItem = (props) => {
  return (
    <div className={styles['single-wine']}>
      <h3 className={styles['wine-title']}>
        <Link to={`/wines/${props.wine.name}`} >
          {props.wine.name}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.wine.name}</p>
      <p className={styles['wine-desc']}>{props.wine.flavors}</p>
      <p className={styles['wine-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteWine" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

WineListItem.propTypes = {
  wine: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flavors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WineListItem;
