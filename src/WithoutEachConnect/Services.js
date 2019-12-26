import React, { useCallback } from 'react';
import { compose }            from 'redux';
import { connect }            from 'react-redux';

import withCounter from '../withCounter';
import ListElement from './ListElement';

function Services({ services, onCreateService, onRemoveService }) {

  const remove = useCallback(id => {
    onRemoveService(id);
  }, []);


  return (
    <div>
      <span>Без connect в каждом ребенке</span>
      {services.map(el => <ListElement key={el.id} onRemove={() => remove(el.id)}>{el.title}</ListElement>)}
      <button type="button" onClick={onCreateService}>Добавить сервис</button>
    </div>
  );
}

function mapStateToProps(store) {
  return {
    services: store.services
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
