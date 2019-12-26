import React       from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withCounter from './withCounter';

function AgeInput({ value }) {

  return <input type="text" defaultValue={value} name="name"/>;
}

function mapStateToProps(store) {
  return {
    value: store.user.age
  };
};

export default compose(connect(mapStateToProps), withCounter('AgeInput'))(AgeInput);
