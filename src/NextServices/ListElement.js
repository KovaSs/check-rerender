import React       from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withCounter from '../withCounter';

class ListElement extends React.Component {
  render() {
    const { data, onRemove, id } = this.props;

    return (
      <li>{data.title} <span className="cross" onClick={() => onRemove(id)}>X</span></li>
    );
  }
}

function mapStateToProps(store, props) {
  return {
    data: store.services.find(el => el.id === props.id)
  };
};

export default compose(withCounter('ListElement'), connect(mapStateToProps))(ListElement);
