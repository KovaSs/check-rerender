import React, { Component } from 'react';
import { compose }          from 'redux';
import { connect }          from 'react-redux';

import withCounter from '../withCounter';
import ListElement from './ListElement';

class Services extends Component {

  create = () => {
    const { onCreateService } = this.props;
    onCreateService();
  };

  remove = id => {
    const { onRemoveService } = this.props;

    onRemoveService(id);
  };

  render() {
    const { services } = this.props;


    return (
      <div>
        <span>C connect в каждом ребенке</span>
        {services.map(id => (
          <ListElement key={id} onRemove={this.remove} id={id}/>
        ))}
        <button type="button" onClick={this.create}>Добавить сервис</button>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    services: store.servicesIds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveService: serviceId => {
      dispatch({
        type: 'REMOVE_SERVICE',
        payload: serviceId
      });
    },
    onCreateService: () => {
      dispatch({
        type: 'CREATE_SERVICE'
      });
    }
  };
}

export default compose(withCounter('Services'), connect(mapStateToProps, mapDispatchToProps))(Services);
