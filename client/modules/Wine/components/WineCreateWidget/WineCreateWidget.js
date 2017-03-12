import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './WineCreateWidget.css';

export class WineCreateWidget extends Component {
  addWine = () => {
    const nameRef = this.refs.name;
    const attributesRef = this.refs.attributes;
    const flavorsRef = this.refs.flavors;
    if (nameRef.value && attributesRef.value && flavorsRef.value) {
      this.props.addWine(nameRef.value, attributesRef.value, flavorsRef.value);
      nameRef.value = attributesRef.value = flavorsRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddWine ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewWine" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.nameTitle} className={styles['form-field']} ref="attributes" />
          <textarea placeholder={this.props.intl.messages.nameContent} className={styles['form-field']} ref="flavors" />
          <a className={styles['name-submit-button']} href="#" onClick={this.addWine}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

WineCreateWidget.propTypes = {
  addWine: PropTypes.func.isRequired,
  showAddWine: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(WineCreateWidget);
