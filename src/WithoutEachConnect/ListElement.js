import React from 'react';

import withCounter from '../withCounter';

class ListElement extends React.Component {

  render() {
    const { children, onRemove } = this.props;

    return (
      <li>{children} <span className="cross" onClick={onRemove}>X</span></li>
    );
  }
}

export default withCounter('ListElement')(ListElement);
