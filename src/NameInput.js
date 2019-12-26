import React       from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withCounter from './withCounter';

function NameInput({ value }) {
  return (
    <input type="text" name="name" defaultValue={value}/>
  );
}

function mapStateToProps(store) {
  return {
    value: store.user.name
  };
};

export default compose(connect(mapStateToProps), withCounter('NameInput'))(NameInput);
