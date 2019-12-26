import React       from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withCounter from './withCounter';

import NameInput from './NameInput';
import AgeInput  from './AgeInput';

class Form extends React.Component {
  handleSaveName = event => {
    event.preventDefault();
    const { onSaveName } = this.props;
    const { value } = event.target.name;

    onSaveName(value);
  };

  handleSaveAge = event => {
    event.preventDefault();
    const { onSaveAge } = this.props;
    const { value } = event.target.name;

    onSaveAge(value);
  };

  render() {
    return (
      <div className="form_group">
        <form onSubmit={this.handleSaveName}>
          <NameInput/>
          <button type="submit">Диспатч</button>
        </form>
        <form onSubmit={this.handleSaveAge}>
          <AgeInput/>
          <button type="submit">Диспатч</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return ({
    user: store.user
  });
};

function mapDispatchToProps(dispatch) {
  return {
    onSaveName: value => {
      dispatch({
        type: 'UPDATE_NAME',
        payload: {
          name: value
        }
      });
    },
    onSaveAge: value => {
      dispatch({
        type: 'UPDATE_AGE',
        payload: {
          age: value
        }
      });
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withCounter('Form'))(Form);
